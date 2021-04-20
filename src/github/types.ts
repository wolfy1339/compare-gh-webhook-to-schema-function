import {
  WebhookEventMap,
  WebhookEventName
} from '@octokit/webhooks-types';

interface EventWithPayload<TName extends WebhookEventName> {
  name: TName;
  payload: WebhookEventMap[TName];
}

type GithubEventsMap = {
  [K in WebhookEventName]: EventWithPayload<K>;
};

type GithubEventName = WebhookEventName;
export type GithubEvent = GithubEventsMap[GithubEventName];
