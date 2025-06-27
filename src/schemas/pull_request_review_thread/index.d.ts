export type * from './resolved.d.ts';
export type * from './unresolved.d.ts';

import type { PullRequestReviewThreadResolvedEvent } from './resolved.d.ts';
import type { PullRequestReviewThreadUnresolvedEvent } from './unresolved.d.ts';

export type PullRequestReviewThreadEvent =
  | PullRequestReviewThreadResolvedEvent
  | PullRequestReviewThreadUnresolvedEvent;
