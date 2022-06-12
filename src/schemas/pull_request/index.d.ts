export * from './assigned.d';
export * from './auto_merge_disabled.d';
export * from './auto_merge_enabled.d';
export * from './closed.d';
export * from './converted_to_draft.d';
export * from './edited.d';
export * from './labeled.d';
export * from './locked.d';
export * from './opened.d';
export * from './ready_for_review.d';
export * from './reopened.d';
export * from './review_request_removed.d';
export * from './review_requested.d';
export * from './synchronize.d';
export * from './unassigned.d';
export * from './unlabeled.d';
export * from './unlocked.d';

import { PullRequestAssignedEvent } from './assigned.d';
import { PullRequestAutoMergeDisabledEvent } from './auto_merge_disabled.d';
import { PullRequestAutoMergeEnabledEvent } from './auto_merge_enabled.d';
import { PullRequestClosedEvent } from './closed.d';
import { PullRequestConvertedToDraftEvent } from './converted_to_draft.d';
import { PullRequestEditedEvent } from './edited.d';
import { PullRequestLabeledEvent } from './labeled.d';
import { PullRequestLockedEvent } from './locked.d';
import { PullRequestOpenedEvent } from './opened.d';
import { PullRequestReadyForReviewEvent } from './ready_for_review.d';
import { PullRequestReopenedEvent } from './reopened.d';
import { PullRequestReviewRequestRemovedEvent } from './review_request_removed.d';
import { PullRequestReviewRequestedEvent } from './review_requested.d';
import { PullRequestSynchronizeEvent } from './synchronize.d';
import { PullRequestUnassignedEvent } from './unassigned.d';
import { PullRequestUnlabeledEvent } from './unlabeled.d';
import { PullRequestUnlockedEvent } from './unlocked.d';

export type PullRequestEvent =
  | PullRequestAssignedEvent
  | PullRequestAutoMergeDisabledEvent
  | PullRequestAutoMergeEnabledEvent
  | PullRequestClosedEvent
  | PullRequestConvertedToDraftEvent
  | PullRequestEditedEvent
  | PullRequestLabeledEvent
  | PullRequestLockedEvent
  | PullRequestOpenedEvent
  | PullRequestReadyForReviewEvent
  | PullRequestReopenedEvent
  | PullRequestReviewRequestRemovedEvent
  | PullRequestReviewRequestedEvent
  | PullRequestSynchronizeEvent
  | PullRequestUnassignedEvent
  | PullRequestUnlabeledEvent
  | PullRequestUnlockedEvent;
