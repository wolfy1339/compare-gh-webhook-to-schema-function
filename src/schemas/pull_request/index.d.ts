export type * from './assigned.d.ts';
export type * from './auto_merge_disabled.d.ts';
export type * from './auto_merge_enabled.d.ts';
export type * from './closed.d.ts';
export type * from './converted_to_draft.d.ts';
export type * from './demilestoned.d.ts';
export type * from './dequeued.d.ts';
export type * from './edited.d.ts';
export type * from './enqueued.d.ts';
export type * from './labeled.d.ts';
export type * from './locked.d.ts';
export type * from './milestoned.d.ts';
export type * from './opened.d.ts';
export type * from './ready_for_review.d.ts';
export type * from './reopened.d.ts';
export type * from './review_request_removed.d.ts';
export type * from './review_requested.d.ts';
export type * from './synchronize.d.ts';
export type * from './unassigned.d.ts';
export type * from './unlabeled.d.ts';
export type * from './unlocked.d.ts';

import type { PullRequestAssignedEvent } from './assigned.d.ts';
import type { PullRequestAutoMergeDisabledEvent } from './auto_merge_disabled.d.ts';
import type { PullRequestAutoMergeEnabledEvent } from './auto_merge_enabled.d.ts';
import type { PullRequestClosedEvent } from './closed.d.ts';
import type { PullRequestConvertedToDraftEvent } from './converted_to_draft.d.ts';
import type { PullRequestDemilestonedEvent } from './demilestoned.d.ts';
import type { PullRequestDequeuedEvent } from './dequeued.d.ts';
import type { PullRequestEditedEvent } from './edited.d.ts';
import type { PullRequestEnqueuedEvent } from './enqueued.d.ts';
import type { PullRequestLabeledEvent } from './labeled.d.ts';
import type { PullRequestLockedEvent } from './locked.d.ts';
import type { PullRequestMilestonedEvent } from './milestoned.d.ts';
import type { PullRequestOpenedEvent } from './opened.d.ts';
import type { PullRequestReadyForReviewEvent } from './ready_for_review.d.ts';
import type { PullRequestReopenedEvent } from './reopened.d.ts';
import type { PullRequestReviewRequestRemovedEvent } from './review_request_removed.d.ts';
import type { PullRequestReviewRequestedEvent } from './review_requested.d.ts';
import type { PullRequestSynchronizeEvent } from './synchronize.d.ts';
import type { PullRequestUnassignedEvent } from './unassigned.d.ts';
import type { PullRequestUnlabeledEvent } from './unlabeled.d.ts';
import type { PullRequestUnlockedEvent } from './unlocked.d.ts';

export type PullRequestEvent =
  | PullRequestAssignedEvent
  | PullRequestAutoMergeDisabledEvent
  | PullRequestAutoMergeEnabledEvent
  | PullRequestClosedEvent
  | PullRequestConvertedToDraftEvent
  | PullRequestDemilestonedEvent
  | PullRequestDequeuedEvent
  | PullRequestEditedEvent
  | PullRequestEnqueuedEvent
  | PullRequestLabeledEvent
  | PullRequestLockedEvent
  | PullRequestMilestonedEvent
  | PullRequestOpenedEvent
  | PullRequestReadyForReviewEvent
  | PullRequestReopenedEvent
  | PullRequestReviewRequestRemovedEvent
  | PullRequestReviewRequestedEvent
  | PullRequestSynchronizeEvent
  | PullRequestUnassignedEvent
  | PullRequestUnlabeledEvent
  | PullRequestUnlockedEvent;
