export type * from './completed.d.ts';
export type * from './created.d.ts';
export type * from './requested_action.d.ts';
export type * from './rerequested.d.ts';

import type { CheckRunCompletedEvent } from './completed.d.ts';
import type { CheckRunCreatedEvent } from './created.d.ts';
import type { CheckRunRequestedActionEvent } from './requested_action.d.ts';
import type { CheckRunRerequestedEvent } from './rerequested.d.ts';

export type CheckRunEvent =
  | CheckRunCompletedEvent
  | CheckRunCreatedEvent
  | CheckRunRequestedActionEvent
  | CheckRunRerequestedEvent;
