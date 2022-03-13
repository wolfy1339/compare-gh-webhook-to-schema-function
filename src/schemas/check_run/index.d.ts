export * from './completed.d';
export * from './created.d';
export * from './requested_action.d';
export * from './rerequested.d';

import { CheckRunCompletedEvent } from './completed.d';
import { CheckRunCreatedEvent } from './created.d';
import { CheckRunRequestedActionEvent } from './requested_action.d';
import { CheckRunRerequestedEvent } from './rerequested.d';

export type CheckRunEvent =
  | CheckRunCompletedEvent
  | CheckRunCreatedEvent
  | CheckRunRequestedActionEvent
  | CheckRunRerequestedEvent;
