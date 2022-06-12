export * from './archived.d'
export * from './created.d'
export * from './deleted.d'
export * from './edited.d'
export * from './privatized.d'
export * from './publicized.d'
export * from './renamed.d'
export * from './transferred.d'
export * from './unarchived.d'

import { RepositoryArchivedEvent } from './archived.d'
import { RepositoryCreatedEvent } from './created.d'
import { RepositoryDeletedEvent } from './deleted.d'
import { RepositoryEditedEvent } from './edited.d'
import { RepositoryPrivatizedEvent } from './privatized.d'
import { RepositoryPublicizedEvent } from './publicized.d'
import { RepositoryRenamedEvent } from './renamed.d'
import { RepositoryTransferredEvent } from './transferred.d'
import { RepositoryUnarchivedEvent } from './unarchived.d'

export type RepositoryEvent =
  | RepositoryArchivedEvent
  | RepositoryCreatedEvent
  | RepositoryDeletedEvent
  | RepositoryEditedEvent
  | RepositoryPrivatizedEvent
  | RepositoryPublicizedEvent
  | RepositoryRenamedEvent
  | RepositoryTransferredEvent
  | RepositoryUnarchivedEvent;
