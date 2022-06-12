export * from './added_to_repository.d'
export * from './created.d'
export * from './deleted.d'
export * from './edited.d'
export * from './removed_from_repository.d'

import { TeamAddedToRepositoryEvent } from './added_to_repository.d'
import { TeamCreatedEvent } from './created.d'
import { TeamDeletedEvent } from './deleted.d'
import { TeamEditedEvent } from './edited.d'
import { TeamRemovedFromRepositoryEvent } from './removed_from_repository.d'

export type TeamEvent =
  | TeamAddedToRepositoryEvent
  | TeamCreatedEvent
  | TeamDeletedEvent
  | TeamEditedEvent
  | TeamRemovedFromRepositoryEvent;
