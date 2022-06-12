export * from './closed.d'
export * from './created.d'
export * from './deleted.d'
export * from './edited.d'
export * from './opened.d'

import { MilestoneClosedEvent } from './closed.d'
import { MilestoneCreatedEvent } from './created.d'
import { MilestoneDeletedEvent } from './deleted.d'
import { MilestoneEditedEvent } from './edited.d'
import { MilestoneOpenedEvent } from './opened.d'

export type MilestoneEvent =
  | MilestoneClosedEvent
  | MilestoneCreatedEvent
  | MilestoneDeletedEvent
  | MilestoneEditedEvent
  | MilestoneOpenedEvent;
