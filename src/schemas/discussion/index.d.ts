export * from './answered.d';
export * from './category_changed.d';
export * from './created.d';
export * from './deleted.d';
export * from './edited.d';
export * from './labeled.d';
export * from './locked.d';
export * from './pinned.d';
export * from './transferred.d';
export * from './unanswered.d';
export * from './unlabeled.d';
export * from './unlocked.d';
export * from './unpinned.d';

import { DiscussionAnsweredEvent } from './answered.d';
import { DiscussionCategoryChangedEvent } from './category_changed.d';
import { DiscussionCreatedEvent } from './created.d';
import { DiscussionDeletedEvent } from './deleted.d';
import { DiscussionEditedEvent } from './edited.d';
import { DiscussionLabeledEvent } from './labeled.d';
import { DiscussionLockedEvent } from './locked.d';
import { DiscussionPinnedEvent } from './pinned.d';
import { DiscussionTransferredEvent } from './transferred.d';
import { DiscussionUnansweredEvent } from './unanswered.d';
import { DiscussionUnlabeledEvent } from './unlabeled.d';
import { DiscussionUnlockedEvent } from './unlocked.d';
import { DiscussionUnpinnedEvent } from './unpinned.d';

export type DiscussionEvent =
  | DiscussionAnsweredEvent
  | DiscussionCategoryChangedEvent
  | DiscussionCreatedEvent
  | DiscussionDeletedEvent
  | DiscussionEditedEvent
  | DiscussionLabeledEvent
  | DiscussionLockedEvent
  | DiscussionPinnedEvent
  | DiscussionTransferredEvent
  | DiscussionUnansweredEvent
  | DiscussionUnlabeledEvent
  | DiscussionUnlockedEvent
  | DiscussionUnpinnedEvent;
