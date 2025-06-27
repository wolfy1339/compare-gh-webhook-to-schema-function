export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';
export type * from './prereleased.d.ts';
export type * from './published.d.ts';
export type * from './released.d.ts';
export type * from './unpublished.d.ts';

import type { ReleaseCreatedEvent } from './created.d.ts';
import type { ReleaseDeletedEvent } from './deleted.d.ts';
import type { ReleaseEditedEvent } from './edited.d.ts';
import type { ReleasePrereleasedEvent } from './prereleased.d.ts';
import type { ReleasePublishedEvent } from './published.d.ts';
import type { ReleaseReleasedEvent } from './released.d.ts';
import type { ReleaseUnpublishedEvent } from './unpublished.d.ts';

export type ReleaseEvent =
  | ReleaseCreatedEvent
  | ReleaseDeletedEvent
  | ReleaseEditedEvent
  | ReleasePrereleasedEvent
  | ReleasePublishedEvent
  | ReleaseReleasedEvent
  | ReleaseUnpublishedEvent;
