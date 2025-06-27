export type * from './archived.d.ts';
export type * from './converted.d.ts';
export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './reordered.d.ts';
export type * from './restored.d.ts';

import type { ProjectsV2ItemArchivedEvent } from './archived.d.ts';
import type { ProjectsV2ItemConvertedEvent } from './converted.d.ts';
import type { ProjectsV2ItemCreatedEvent } from './created.d.ts';
import type { ProjectsV2ItemDeletedEvent } from './deleted.d.ts';
import type { ProjectsV2ItemEditedEvent } from './edited.d.ts';
import type { ProjectsV2ItemReorderedEvent } from './reordered.d.ts';
import type { ProjectsV2ItemRestoredEvent } from './restored.d.ts';

export type ProjectsV2ItemEvent =
  | ProjectsV2ItemArchivedEvent
  | ProjectsV2ItemConvertedEvent
  | ProjectsV2ItemCreatedEvent
  | ProjectsV2ItemDeletedEvent
  | ProjectsV2ItemEditedEvent
  | ProjectsV2ItemReorderedEvent
  | ProjectsV2ItemRestoredEvent;
