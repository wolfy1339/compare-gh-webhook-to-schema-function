export type * from './completed.d.ts';
export type * from './requested.d.ts';
export type * from './rerequested.d.ts';

import type { CheckSuiteCompletedEvent } from './completed.d.ts';
import type { CheckSuiteRequestedEvent } from './requested.d.ts';
import type { CheckSuiteRerequestedEvent } from './rerequested.d.ts';

export type CheckSuiteEvent =
  | CheckSuiteCompletedEvent
  | CheckSuiteRequestedEvent
  | CheckSuiteRerequestedEvent;
