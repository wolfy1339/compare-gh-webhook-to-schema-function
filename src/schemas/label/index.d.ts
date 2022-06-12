export * from './created.d'
export * from './deleted.d'
export * from './edited.d'

import { LabelCreatedEvent } from './created.d'
import { LabelDeletedEvent } from './deleted.d'
import { LabelEditedEvent } from './edited.d'

export type LabelEvent =
  | LabelCreatedEvent
  | LabelDeletedEvent
  | LabelEditedEvent;
