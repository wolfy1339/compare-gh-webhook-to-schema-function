export type * from './archived.d.ts';
export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './privatized.d.ts';
export type * from './publicized.d.ts';
export type * from './renamed.d.ts';
export type * from './transferred.d.ts';
export type * from './unarchived.d.ts';

import type { RepositoryArchivedEvent } from './archived.d.ts';
import type { RepositoryCreatedEvent } from './created.d.ts';
import type { RepositoryDeletedEvent } from './deleted.d.ts';
import type { RepositoryEditedEvent } from './edited.d.ts';
import type { RepositoryPrivatizedEvent } from './privatized.d.ts';
import type { RepositoryPublicizedEvent } from './publicized.d.ts';
import type { RepositoryRenamedEvent } from './renamed.d.ts';
import type { RepositoryTransferredEvent } from './transferred.d.ts';
import type { RepositoryUnarchivedEvent } from './unarchived.d.ts';

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
