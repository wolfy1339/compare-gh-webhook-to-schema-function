export * from './converted.d';
export * from './created.d';
export * from './deleted.d';
export * from './edited.d';
export * from './moved.d';

import { ProjectCardConvertedEvent } from './converted.d';
import { ProjectCardCreatedEvent } from './created.d';
import { ProjectCardDeletedEvent } from './deleted.d';
import { ProjectCardEditedEvent } from './edited.d';
import { ProjectCardMovedEvent } from './moved.d';

export type ProjectCardEvent =
  | ProjectCardConvertedEvent
  | ProjectCardCreatedEvent
  | ProjectCardDeletedEvent
  | ProjectCardEditedEvent
  | ProjectCardMovedEvent;
