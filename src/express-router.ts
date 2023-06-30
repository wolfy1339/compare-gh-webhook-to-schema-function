// @ts-check
import { Router as expressRouter, raw } from 'express';
import { createTransport } from 'nodemailer';
import config from './config.js';
import { handler as validator } from './index.js';
const WEBHOOK_SECRET = 'thisismysecret';

process.env.GH_WEBHOOK_SECRET = WEBHOOK_SECRET;

const transport = createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail'
});

const router = expressRouter();

router.use(raw({ type: '*/*', limit: '1mb' }));
router
  .post('/', (req, res) => {
    if (req.get('content-type') !== 'application/json') {
      res.set('Accept', 'application/json').sendStatus(415);

      return;
    }
    const body = req.body as string;

    validator(body.toString(), req.headers)
      .then(async result => {
        if (result.statusCode !== 200) {
          try {
            const githubEvent = req.get('x-github-event') ?? 'Unknown event';
            const message = {
              from: config.email.from,
              to: config.email.to,
              subject: `Webhook validation failed for ${githubEvent}`,
              html: `<p>Error object from ajv</p><pre><code>${JSON.stringify(
                result.body,
                null,
                2
              )}</code></pre><details><summary>JSON payload</summary><pre><code>${JSON.stringify(
                JSON.parse(body.toString()),
                null,
                2
              )}</pre></code></details>`
            };

            await transport.sendMail(message);
          } catch (e) {
            res.status(500).send(String(e));

            return;
          }
        }

        res
          .status(result.statusCode)
          .type('json')
          .send(JSON.stringify(result.body, null, 2));
      })
      .catch(e => {
        res.status(500).send(String(e));
      });
  })
  .get('/*', (req, res) => {
    res.set('Allow', 'POST').sendStatus(405);
  })
  .options('/*', (req, res) => {
    res.set('Allow', 'POST').send('POST');
  });

module.exports = router;
