export type * from './completed.d.ts';
export type * from './in_progress.d.ts';
export type * from './requested.d.ts';

import type { WorkflowRunCompletedEvent } from './completed.d.ts';
import type { WorkflowRunInProgressEvent } from './in_progress.d.ts';
import type { WorkflowRunRequestedEvent } from './requested.d.ts';

export type WorkflowRunEvent =
  | WorkflowRunCompletedEvent
  | WorkflowRunInProgressEvent
  | WorkflowRunRequestedEvent;
