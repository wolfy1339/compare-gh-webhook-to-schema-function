export * from './completed.d';
export * from './requested.d';

import { WorkflowRunCompletedEvent } from './completed.d';
import { WorkflowRunRequestedEvent } from './requested.d';

export type WorkflowRunEvent =
  | WorkflowRunCompletedEvent
  | WorkflowRunRequestedEvent;
