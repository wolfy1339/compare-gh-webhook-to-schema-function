export * from './created.d';
export * from './deleted.d';
export * from './new_permissions_accepted.d';
export * from './suspend.d';
export * from './unsuspend.d';

import { InstallationCreatedEvent } from './created.d';
import { InstallationDeletedEvent } from './deleted.d';
import { InstallationNewPermissionsAcceptedEvent } from './new_permissions_accepted.d';
import { InstallationSuspendEvent } from './suspend.d';
import { InstallationUnsuspendEvent } from './unsuspend.d';

export type InstallationEvent =
  | InstallationCreatedEvent
  | InstallationDeletedEvent
  | InstallationNewPermissionsAcceptedEvent
  | InstallationSuspendEvent
  | InstallationUnsuspendEvent;
