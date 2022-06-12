export * from './published.d';
export * from './updated.d';

import { PackagePublishedEvent } from './published.d';
import { PackageUpdatedEvent } from './updated.d';

export type PackageEvent = PackagePublishedEvent | PackageUpdatedEvent;
