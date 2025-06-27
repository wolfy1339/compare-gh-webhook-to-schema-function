export type * from './added_to_repository.d.ts';
export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './removed_from_repository.d.ts';

import type { TeamAddedToRepositoryEvent } from './added_to_repository.d.ts';
import type { TeamCreatedEvent } from './created.d.ts';
import type { TeamDeletedEvent } from './deleted.d.ts';
import type { TeamEditedEvent } from './edited.d.ts';
import type { TeamRemovedFromRepositoryEvent } from './removed_from_repository.d.ts';

export type TeamEvent =
  | TeamAddedToRepositoryEvent
  | TeamCreatedEvent
  | TeamDeletedEvent
  | TeamEditedEvent
  | TeamRemovedFromRepositoryEvent;
