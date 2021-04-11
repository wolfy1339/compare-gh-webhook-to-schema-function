import { verify } from '@octokit/webhooks';
import { WebhookEventName as GithubEventName } from '@octokit/webhooks-definitions/schema';
import { RequestHandler } from 'express';
import { GithubEvent } from './types';

declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      GH_WEBHOOK_SECRET: string;
    }
  }
}

export const getEvent = (
  request: Parameters<RequestHandler>[0],
  rawBody: string
): GithubEvent => {
  const signature: string = request.headers['x-hub-signature-256'] as string;
  const { GH_WEBHOOK_SECRET } = process.env;

  if (verify(GH_WEBHOOK_SECRET, rawBody, signature)) {
    // ensure we're referencing a header that is defined, outside of the cast
    const name = request.headers['x-github-event'] as GithubEventName;
    const payload = JSON.parse(rawBody) as GithubEvent['payload'];

    return { name, payload } as GithubEvent;
  }

  throw new Error('event did not come from github');
};
