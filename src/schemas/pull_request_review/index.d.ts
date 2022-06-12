export * from './dismissed.d';
export * from './edited.d';
export * from './submitted.d';

import { PullRequestReviewDismissedEvent } from './dismissed.d';
import { PullRequestReviewEditedEvent } from './edited.d';
import { PullRequestReviewSubmittedEvent } from './submitted.d';

export type PullRequestReviewEvent =
  | PullRequestReviewDismissedEvent
  | PullRequestReviewEditedEvent
  | PullRequestReviewSubmittedEvent;
