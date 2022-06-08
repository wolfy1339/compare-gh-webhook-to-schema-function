export * from './completed.d';
export * from './in_progress.d';
export * from './queued.d';

import { WorkflowJobCompletedEvent } from './completed.d';
import { WorkflowJobInProgressEvent } from './in_progress.d';
import { WorkflowJobQueuedEvent } from './queued.d';

export type WorkflowJobEvent =
  | WorkflowJobCompletedEvent
  | WorkflowJobInProgressEvent
  | WorkflowJobQueuedEvent;
