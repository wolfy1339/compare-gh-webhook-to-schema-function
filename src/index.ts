import dotenv from 'dotenv';
import { IncomingHttpHeaders } from 'node:http2';
import 'source-map-support/register';
import { v5 as uuid } from 'uuid';
import { EventValidator, describeEvent, getEvent } from './github';
// import { Notifier } from './notifier';

dotenv.config();
export interface FnResult {
  summary: string;
  errors?: unknown[];
  error?: Error;
}

export interface FnResponse {
  body: FnResult;
  statusCode: number;
  headers: {
    [key: string]: string;
    'X-Invocation-Id': string;
  };
}
export const handler = (
  rawBody: string,
  headers: IncomingHttpHeaders
): FnResponse => {
  const invocationId = uuid('https://hellomouse.net/', uuid.URL);
  const context = {
    invocationId
  };

  // const notifier = new Notifier();

  try {
    const githubEvent = getEvent(headers, rawBody);
    const errors = EventValidator.validate(githubEvent, console);
    const eventDescription = describeEvent(githubEvent);

    if (errors.length) {
      console.log(errors);

      return {
        body: { summary: 'oh dear, there were errors :/', errors },
        headers: { 'X-Invocation-Id': context.invocationId },
        statusCode: 422
      };
    }

    return {
      body: { summary: `success! ${eventDescription} matches its schema :D` },
      headers: { 'X-Invocation-Id': context.invocationId },
      statusCode: 200
    };
  } catch (err: unknown) {
    const error = err as Error;
    // const message = error.stack ?? error.message;

    console.error(error);

    // await notifier.send({ text: `\`\`\`${message}\`\`\`` });

    return {
      body: { summary: 'oh noes!', error },
      headers: { 'X-Invocation-Id': context.invocationId },
      statusCode: 500
    };
  }
};
