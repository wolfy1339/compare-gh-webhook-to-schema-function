export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';

import type { PullRequestReviewCommentCreatedEvent } from './created.d.ts';
import type { PullRequestReviewCommentDeletedEvent } from './deleted.d.ts';
import type { PullRequestReviewCommentEditedEvent } from './edited.d.ts';

export type PullRequestReviewCommentEvent =
  | PullRequestReviewCommentCreatedEvent
  | PullRequestReviewCommentDeletedEvent
  | PullRequestReviewCommentEditedEvent;
