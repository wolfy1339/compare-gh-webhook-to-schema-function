export type * from './added.d.ts';
export type * from './removed.d.ts';

import type { InstallationRepositoriesAddedEvent } from './added.d.ts';
import type { InstallationRepositoriesRemovedEvent } from './removed.d.ts';

export type InstallationRepositoriesEvent =
  | InstallationRepositoriesAddedEvent
  | InstallationRepositoriesRemovedEvent;
