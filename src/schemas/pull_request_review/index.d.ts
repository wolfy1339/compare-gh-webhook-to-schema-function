export type * from './dismissed.d.ts';
export type * from './edited.d.ts';
export type * from './submitted.d.ts';

import type { PullRequestReviewDismissedEvent } from './dismissed.d.ts';
import type { PullRequestReviewEditedEvent } from './edited.d.ts';
import type { PullRequestReviewSubmittedEvent } from './submitted.d.ts';

export type PullRequestReviewEvent =
  | PullRequestReviewDismissedEvent
  | PullRequestReviewEditedEvent
  | PullRequestReviewSubmittedEvent;
