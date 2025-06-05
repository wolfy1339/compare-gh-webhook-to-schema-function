import type {
  WebhookEventMap,
  WebhookEventName
} from '@octokit/openapi-webhooks-types-transition';

interface EventWithPayload<TName extends WebhookEventName> {
  name: TName;
  payload: WebhookEventMap[TName];
}

type GithubEventsMap = {
  [K in WebhookEventName]: EventWithPayload<K>;
};

type GithubEventName = WebhookEventName;
export type GithubEvent = GithubEventsMap[GithubEventName];
