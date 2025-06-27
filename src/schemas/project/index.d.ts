export type * from './closed.d.ts';
export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './reopened.d.ts';

import type { ProjectClosedEvent } from './closed.d.ts';
import type { ProjectCreatedEvent } from './created.d.ts';
import type { ProjectDeletedEvent } from './deleted.d.ts';
import type { ProjectEditedEvent } from './edited.d.ts';
import type { ProjectReopenedEvent } from './reopened.d.ts';

export type ProjectEvent =
  | ProjectClosedEvent
  | ProjectCreatedEvent
  | ProjectDeletedEvent
  | ProjectEditedEvent
  | ProjectReopenedEvent;
