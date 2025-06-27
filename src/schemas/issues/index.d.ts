export type * from './assigned.d.ts';
export type * from './closed.d.ts';
export type * from './deleted.d.ts';
export type * from './demilestoned.d.ts';
export type * from './edited.d.ts';
export type * from './labeled.d.ts';
export type * from './locked.d.ts';
export type * from './milestoned.d.ts';
export type * from './opened.d.ts';
export type * from './pinned.d.ts';
export type * from './reopened.d.ts';
export type * from './transferred.d.ts';
export type * from './typed.d.ts';
export type * from './unassigned.d.ts';
export type * from './unlabeled.d.ts';
export type * from './unlocked.d.ts';
export type * from './unpinned.d.ts';
export type * from './untyped.d.ts';

import type { IssuesAssignedEvent } from './assigned.d.ts';
import type { IssuesClosedEvent } from './closed.d.ts';
import type { IssuesDeletedEvent } from './deleted.d.ts';
import type { IssuesDemilestonedEvent } from './demilestoned.d.ts';
import type { IssuesEditedEvent } from './edited.d.ts';
import type { IssuesLabeledEvent } from './labeled.d.ts';
import type { IssuesLockedEvent } from './locked.d.ts';
import type { IssuesMilestonedEvent } from './milestoned.d.ts';
import type { IssuesOpenedEvent } from './opened.d.ts';
import type { IssuesPinnedEvent } from './pinned.d.ts';
import type { IssuesReopenedEvent } from './reopened.d.ts';
import type { IssuesTransferredEvent } from './transferred.d.ts';
import type { IssuesTypedEvent } from './typed.d.ts';
import type { IssuesUnassignedEvent } from './unassigned.d.ts';
import type { IssuesUnlabeledEvent } from './unlabeled.d.ts';
import type { IssuesUnlockedEvent } from './unlocked.d.ts';
import type { IssuesUnpinnedEvent } from './unpinned.d.ts';
import type { IssuesUntypedEvent } from './untyped.d.ts';

export type IssuesEvent =
  | IssuesAssignedEvent
  | IssuesClosedEvent
  | IssuesDeletedEvent
  | IssuesDemilestonedEvent
  | IssuesEditedEvent
  | IssuesLabeledEvent
  | IssuesLockedEvent
  | IssuesMilestonedEvent
  | IssuesOpenedEvent
  | IssuesPinnedEvent
  | IssuesReopenedEvent
  | IssuesTransferredEvent
  | IssuesTypedEvent
  | IssuesUnassignedEvent
  | IssuesUnlabeledEvent
  | IssuesUnlockedEvent
  | IssuesUnpinnedEvent
  | IssuesUntypedEvent;
