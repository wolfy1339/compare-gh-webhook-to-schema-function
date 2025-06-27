export type * from './answered.d.ts';
export type * from './category_changed.d.ts';
export type * from './closed.d.ts';
export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './labeled.d.ts';
export type * from './locked.d.ts';
export type * from './pinned.d.ts';
export type * from './reopened.d.ts';
export type * from './transferred.d.ts';
export type * from './unanswered.d.ts';
export type * from './unlabeled.d.ts';
export type * from './unlocked.d.ts';
export type * from './unpinned.d.ts';

import type { DiscussionAnsweredEvent } from './answered.d.ts';
import type { DiscussionCategoryChangedEvent } from './category_changed.d.ts';
import type { DiscussionClosedEvent } from './closed.d.ts';
import type { DiscussionCreatedEvent } from './created.d.ts';
import type { DiscussionDeletedEvent } from './deleted.d.ts';
import type { DiscussionEditedEvent } from './edited.d.ts';
import type { DiscussionLabeledEvent } from './labeled.d.ts';
import type { DiscussionLockedEvent } from './locked.d.ts';
import type { DiscussionPinnedEvent } from './pinned.d.ts';
import type { DiscussionReopenedEvent } from './reopened.d.ts';
import type { DiscussionTransferredEvent } from './transferred.d.ts';
import type { DiscussionUnansweredEvent } from './unanswered.d.ts';
import type { DiscussionUnlabeledEvent } from './unlabeled.d.ts';
import type { DiscussionUnlockedEvent } from './unlocked.d.ts';
import type { DiscussionUnpinnedEvent } from './unpinned.d.ts';

export type DiscussionEvent =
  | DiscussionAnsweredEvent
  | DiscussionCategoryChangedEvent
  | DiscussionClosedEvent
  | DiscussionCreatedEvent
  | DiscussionDeletedEvent
  | DiscussionEditedEvent
  | DiscussionLabeledEvent
  | DiscussionLockedEvent
  | DiscussionPinnedEvent
  | DiscussionReopenedEvent
  | DiscussionTransferredEvent
  | DiscussionUnansweredEvent
  | DiscussionUnlabeledEvent
  | DiscussionUnlockedEvent
  | DiscussionUnpinnedEvent;
