export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';

import type { ProjectsV2StatusUpdateCreatedEvent } from './created.d.ts';
import type { ProjectsV2StatusUpdateDeletedEvent } from './deleted.d.ts';
import type { ProjectsV2StatusUpdateEditedEvent } from './edited.d.ts';

export type ProjectsV2StatusUpdateEvent =
  | ProjectsV2StatusUpdateCreatedEvent
  | ProjectsV2StatusUpdateDeletedEvent
  | ProjectsV2StatusUpdateEditedEvent;
