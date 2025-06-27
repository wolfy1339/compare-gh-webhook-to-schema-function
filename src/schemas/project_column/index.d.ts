export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './moved.d.ts';

import type { ProjectColumnCreatedEvent } from './created.d.ts';
import type { ProjectColumnDeletedEvent } from './deleted.d.ts';
import type { ProjectColumnEditedEvent } from './edited.d.ts';
import type { ProjectColumnMovedEvent } from './moved.d.ts';

export type ProjectColumnEvent =
  | ProjectColumnCreatedEvent
  | ProjectColumnDeletedEvent
  | ProjectColumnEditedEvent
  | ProjectColumnMovedEvent;
