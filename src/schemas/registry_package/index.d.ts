export type * from './published.d.ts';
export type * from './updated.d.ts';

import type { RegistryPackagePublishedEvent } from './published.d.ts';
import type { RegistryPackageUpdatedEvent } from './updated.d.ts';

export type RegistryPackageEvent =
  | RegistryPackagePublishedEvent
  | RegistryPackageUpdatedEvent;
