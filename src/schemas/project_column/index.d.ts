export * from './created.d'
export * from './deleted.d'
export * from './edited.d'
export * from './moved.d'

import { ProjectColumnCreatedEvent } from './created.d'
import { ProjectColumnDeletedEvent } from './deleted.d'
import { ProjectColumnEditedEvent } from './edited.d'
import { ProjectColumnMovedEvent } from './moved.d'

export type ProjectColumnEvent =
  | ProjectColumnCreatedEvent
  | ProjectColumnDeletedEvent
  | ProjectColumnEditedEvent
  | ProjectColumnMovedEvent;
