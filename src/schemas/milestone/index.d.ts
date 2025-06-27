export type * from './closed.d.ts';
export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './opened.d.ts';

import type { MilestoneClosedEvent } from './closed.d.ts';
import type { MilestoneCreatedEvent } from './created.d.ts';
import type { MilestoneDeletedEvent } from './deleted.d.ts';
import type { MilestoneEditedEvent } from './edited.d.ts';
import type { MilestoneOpenedEvent } from './opened.d.ts';

export type MilestoneEvent =
  | MilestoneClosedEvent
  | MilestoneCreatedEvent
  | MilestoneDeletedEvent
  | MilestoneEditedEvent
  | MilestoneOpenedEvent;
