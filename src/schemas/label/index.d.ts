export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';

import type { LabelCreatedEvent } from './created.d.ts';
import type { LabelDeletedEvent } from './deleted.d.ts';
import type { LabelEditedEvent } from './edited.d.ts';

export type LabelEvent =
  | LabelCreatedEvent
  | LabelDeletedEvent
  | LabelEditedEvent;
