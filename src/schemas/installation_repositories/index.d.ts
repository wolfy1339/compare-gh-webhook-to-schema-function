export * from './added.d';
export * from './removed.d';

import { InstallationRepositoriesAddedEvent } from './added.d';
import { InstallationRepositoriesRemovedEvent } from './removed.d';

export type InstallationRepositoriesEvent =
  | InstallationRepositoriesAddedEvent
  | InstallationRepositoriesRemovedEvent;
