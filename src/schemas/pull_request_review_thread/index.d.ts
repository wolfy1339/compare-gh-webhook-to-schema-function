export * from './resolved.d';
export * from './unresolved.d';

import { PullRequestReviewThreadResolvedEvent } from './resolved.d';
import { PullRequestReviewThreadUnresolvedEvent } from './unresolved.d';

export type PullRequestReviewThreadEvent =
  | PullRequestReviewThreadResolvedEvent
  | PullRequestReviewThreadUnresolvedEvent;
