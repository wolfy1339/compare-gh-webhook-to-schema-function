import dotenv from 'dotenv';
import type { IncomingHttpHeaders } from 'node:http';
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
export const handler = async (
  rawBody: string,
  headers: IncomingHttpHeaders
): Promise<FnResponse> => {
  const context = {
    invocationId: uuid('https://hellomouse.net/', uuid.URL)
  };

  // const notifier = new Notifier();

  try {
    const githubEvent = await getEvent(headers, rawBody);
    const errors = EventValidator.validate(githubEvent, console);
    const eventDescription = describeEvent(githubEvent);

    // For some reason, errors can be undefined
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (errors?.length) {
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
