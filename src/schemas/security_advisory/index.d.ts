export type * from './published.d.ts';
export type * from './updated.d.ts';
export type * from './withdrawn.d.ts';

import type { SecurityAdvisoryPublishedEvent } from './published.d.ts';
import type { SecurityAdvisoryUpdatedEvent } from './updated.d.ts';
import type { SecurityAdvisoryWithdrawnEvent } from './withdrawn.d.ts';

export type SecurityAdvisoryEvent =
  | SecurityAdvisoryPublishedEvent
  | SecurityAdvisoryUpdatedEvent
  | SecurityAdvisoryWithdrawnEvent;
