export * from './assigned.d';
export * from './closed.d';
export * from './deleted.d';
export * from './demilestoned.d';
export * from './edited.d';
export * from './labeled.d';
export * from './locked.d';
export * from './milestoned.d';
export * from './opened.d';
export * from './pinned.d';
export * from './reopened.d';
export * from './transferred.d';
export * from './unassigned.d';
export * from './unlabeled.d';
export * from './unlocked.d';
export * from './unpinned.d';

import { IssuesAssignedEvent } from './assigned.d';
import { IssuesClosedEvent } from './closed.d';
import { IssuesDeletedEvent } from './deleted.d';
import { IssuesDemilestonedEvent } from './demilestoned.d';
import { IssuesEditedEvent } from './edited.d';
import { IssuesLabeledEvent } from './labeled.d';
import { IssuesLockedEvent } from './locked.d';
import { IssuesMilestonedEvent } from './milestoned.d';
import { IssuesOpenedEvent } from './opened.d';
import { IssuesPinnedEvent } from './pinned.d';
import { IssuesReopenedEvent } from './reopened.d';
import { IssuesTransferredEvent } from './transferred.d';
import { IssuesUnassignedEvent } from './unassigned.d';
import { IssuesUnlabeledEvent } from './unlabeled.d';
import { IssuesUnlockedEvent } from './unlocked.d';
import { IssuesUnpinnedEvent } from './unpinned.d';

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
  | IssuesUnassignedEvent
  | IssuesUnlabeledEvent
  | IssuesUnlockedEvent
  | IssuesUnpinnedEvent;
