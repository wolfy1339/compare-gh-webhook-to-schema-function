export type * from './closed.d.ts';
export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './reopened.d.ts';

import type { ProjectsV2ClosedEvent } from './closed.d.ts';
import type { ProjectsV2CreatedEvent } from './created.d.ts';
import type { ProjectsV2DeletedEvent } from './deleted.d.ts';
import type { ProjectsV2EditedEvent } from './edited.d.ts';
import type { ProjectsV2ReopenedEvent } from './reopened.d.ts';

export type ProjectsV2Event =
  | ProjectsV2ClosedEvent
  | ProjectsV2CreatedEvent
  | ProjectsV2DeletedEvent
  | ProjectsV2EditedEvent
  | ProjectsV2ReopenedEvent;
