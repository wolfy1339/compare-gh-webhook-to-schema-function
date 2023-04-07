import { verify } from '@octokit/webhooks-methods';
import type { WebhookEventName as GithubEventName } from '@octokit/webhooks-types';
import type { IncomingHttpHeaders } from 'node:http';
import type { GithubEvent } from './types';

declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      GH_WEBHOOK_SECRET: string;
    }
  }
}

declare module 'node:http' {
  export interface IncomingHttpHeaders {
    'x-hub-signature-256': string;
    'x-github-event': GithubEventName;
  }
}

export const getEvent = async (
  headers: IncomingHttpHeaders,
  rawBody: string
): Promise<GithubEvent> => {
  const signature: string = headers['x-hub-signature-256'];
  const { GH_WEBHOOK_SECRET } = process.env;

  if (await verify(GH_WEBHOOK_SECRET, rawBody, signature)) {
    // ensure we're referencing a header that is defined, outside of the cast
    const name = headers['x-github-event'];
    const payload = JSON.parse(rawBody) as GithubEvent['payload'];

    return { name, payload } as GithubEvent;
  }

  throw new Error('event did not come from github');
};
