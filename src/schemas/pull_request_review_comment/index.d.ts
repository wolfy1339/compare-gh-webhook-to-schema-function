export * from './created.d';
export * from './deleted.d';
export * from './edited.d';

import { PullRequestReviewCommentCreatedEvent } from './created.d';
import { PullRequestReviewCommentDeletedEvent } from './deleted.d';
import { PullRequestReviewCommentEditedEvent } from './edited.d';

export type PullRequestReviewCommentEvent =
  | PullRequestReviewCommentCreatedEvent
  | PullRequestReviewCommentDeletedEvent
  | PullRequestReviewCommentEditedEvent;
