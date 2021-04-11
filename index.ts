import { RequestHandler, Router as _router, default as express } from 'express';
import { handler as validator } from './src/index';

const handler: RequestHandler = async (req, res) => {
  const result = await validator(req);

  return res.status(result.statusCode).set(result.headers).json(result.body);
};
const router = _router();

router.use(express.raw());

export default router.post('/', handler);
