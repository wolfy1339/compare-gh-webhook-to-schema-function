export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';

import type { RepositoryRulesetCreatedEvent } from './created.d.ts';
import type { RepositoryRulesetDeletedEvent } from './deleted.d.ts';
import type { RepositoryRulesetEditedEvent } from './edited.d.ts';

export type RepositoryRulesetEvent =
  | RepositoryRulesetCreatedEvent
  | RepositoryRulesetDeletedEvent
  | RepositoryRulesetEditedEvent;
