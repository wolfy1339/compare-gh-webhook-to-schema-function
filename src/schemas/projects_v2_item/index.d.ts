export * from './archived.d';
export * from './converted.d';
export * from './created.d';
export * from './deleted.d';
export * from './edited.d';
export * from './reordered.d';
export * from './restored.d';

import { ProjectsV2ItemArchivedEvent } from './archived.d';
import { ProjectsV2ItemConvertedEvent } from './converted.d';
import { ProjectsV2ItemCreatedEvent } from './created.d';
import { ProjectsV2ItemDeletedEvent } from './deleted.d';
import { ProjectsV2ItemEditedEvent } from './edited.d';
import { ProjectsV2ItemReorderedEvent } from './reordered.d';
import { ProjectsV2ItemRestoredEvent } from './restored.d';

export type ProjectsV2ItemEvent =
  | ProjectsV2ItemArchivedEvent
  | ProjectsV2ItemConvertedEvent
  | ProjectsV2ItemCreatedEvent
  | ProjectsV2ItemDeletedEvent
  | ProjectsV2ItemEditedEvent
  | ProjectsV2ItemReorderedEvent
  | ProjectsV2ItemRestoredEvent;
