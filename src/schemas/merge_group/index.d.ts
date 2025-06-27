export type * from './checks_requested.d.ts';
export type * from './destroyed.d.ts';

import type { MergeGroupChecksRequestedEvent } from './checks_requested.d.ts';
import type { MergeGroupDestroyedEvent } from './destroyed.d.ts';

export type MergeGroupEvent =
  | MergeGroupChecksRequestedEvent
  | MergeGroupDestroyedEvent;
