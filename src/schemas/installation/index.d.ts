export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './new_permissions_accepted.d.ts';
export type * from './suspend.d.ts';
export type * from './unsuspend.d.ts';

import type { InstallationCreatedEvent } from './created.d.ts';
import type { InstallationDeletedEvent } from './deleted.d.ts';
import type { InstallationNewPermissionsAcceptedEvent } from './new_permissions_accepted.d.ts';
import type { InstallationSuspendEvent } from './suspend.d.ts';
import type { InstallationUnsuspendEvent } from './unsuspend.d.ts';

export type InstallationEvent =
  | InstallationCreatedEvent
  | InstallationDeletedEvent
  | InstallationNewPermissionsAcceptedEvent
  | InstallationSuspendEvent
  | InstallationUnsuspendEvent;
