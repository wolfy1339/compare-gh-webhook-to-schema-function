import { verify } from '@octokit/webhooks';
import { WebhookEventName as GithubEventName } from '@octokit/webhooks-types';
import { IncomingHttpHeaders } from 'http';
import { GithubEvent } from './types';

declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      GH_WEBHOOK_SECRET: string;
    }
  }
}

declare module 'http' {
  export interface IncomingHttpHeaders {
    'x-hub-signature-256': string;
    'x-github-event': GithubEventName;
  }
}

export const getEvent = (
  headers: IncomingHttpHeaders,
  rawBody: string
): GithubEvent => {
  const signature: string = headers['x-hub-signature-256'];
  const { GH_WEBHOOK_SECRET } = process.env;

  if (verify(GH_WEBHOOK_SECRET, rawBody, signature)) {
    // ensure we're referencing a header that is defined, outside of the cast
    const name = headers['x-github-event'];
    const payload = JSON.parse(rawBody) as GithubEvent['payload'];

    return { name, payload } as GithubEvent;
  }

  throw new Error('event did not come from github');
};
