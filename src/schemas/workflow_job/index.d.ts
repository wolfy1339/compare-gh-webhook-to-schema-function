export type * from './completed.d.ts';
export type * from './in_progress.d.ts';
export type * from './queued.d.ts';
export type * from './waiting.d.ts';

import type { WorkflowJobCompletedEvent } from './completed.d.ts';
import type { WorkflowJobInProgressEvent } from './in_progress.d.ts';
import type { WorkflowJobQueuedEvent } from './queued.d.ts';
import type { WorkflowJobWaitingEvent } from './waiting.d.ts';

export type WorkflowJobEvent =
  | WorkflowJobCompletedEvent
  | WorkflowJobInProgressEvent
  | WorkflowJobQueuedEvent
  | WorkflowJobWaitingEvent;
