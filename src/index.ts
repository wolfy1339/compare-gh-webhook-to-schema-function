import dotenv from 'dotenv';
import { RequestHandler } from 'express';
import getRawBody from 'raw-body';
import 'source-map-support/register';
import { v5 as uuid } from 'uuid';
import { EventValidator, describeEvent, getEvent } from './github';
import { Notifier } from './notifier';

dotenv.config();
interface FnResult {
  summary: string;
  errors?: unknown[];
  error?: Error;
}

interface FnResponse {
  body: FnResult;
  statusCode: number;
  headers: {
    [key: string]: string;
    'X-Invocation-Id': string;
  };
}

export const handler = async (
  request: Parameters<RequestHandler>[0]
): Promise<FnResponse> => {
  const context = {
    invocationId: uuid('https://hellomouse.net/', uuid.URL)
  };

  console.log(request);

  const rawBody = await getRawBody(request, {
    length: request.get('content-length'),
    limit: '5mb'
  });

  const notifier = new Notifier();

  try {
    const githubEvent = getEvent(request, rawBody.toString());
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
    const message = error.stack ?? error.message;

    console.error(error);

    await notifier.send({ text: `\`\`\`${message}\`\`\`` });

    return {
      body: { summary: 'oh noes!', error },
      headers: { 'X-Invocation-Id': context.invocationId },
      statusCode: 500
    };
  }
};
