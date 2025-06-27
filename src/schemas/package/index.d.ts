export type * from './published.d.ts';
export type * from './updated.d.ts';

import type { PackagePublishedEvent } from './published.d.ts';
import type { PackageUpdatedEvent } from './updated.d.ts';

export type PackageEvent = PackagePublishedEvent | PackageUpdatedEvent;
