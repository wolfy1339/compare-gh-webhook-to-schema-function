export * from './closed.d';
export * from './created.d';
export * from './deleted.d';
export * from './edited.d';
export * from './reopened.d';

import { ProjectClosedEvent } from './closed.d';
import { ProjectCreatedEvent } from './created.d';
import { ProjectDeletedEvent } from './deleted.d';
import { ProjectEditedEvent } from './edited.d';
import { ProjectReopenedEvent } from './reopened.d';

export type ProjectEvent =
  | ProjectClosedEvent
  | ProjectCreatedEvent
  | ProjectDeletedEvent
  | ProjectEditedEvent
  | ProjectReopenedEvent;
