export type * from './converted.d.ts';
export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './moved.d.ts';

import type { ProjectCardConvertedEvent } from './converted.d.ts';
import type { ProjectCardCreatedEvent } from './created.d.ts';
import type { ProjectCardDeletedEvent } from './deleted.d.ts';
import type { ProjectCardEditedEvent } from './edited.d.ts';
import type { ProjectCardMovedEvent } from './moved.d.ts';

export type ProjectCardEvent =
  | ProjectCardConvertedEvent
  | ProjectCardCreatedEvent
  | ProjectCardDeletedEvent
  | ProjectCardEditedEvent
  | ProjectCardMovedEvent;
