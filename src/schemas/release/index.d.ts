export * from './created.d';
export * from './deleted.d';
export * from './edited.d';
export * from './prereleased.d';
export * from './published.d';
export * from './released.d';
export * from './unpublished.d';

import { ReleaseCreatedEvent } from './created.d';
import { ReleaseDeletedEvent } from './deleted.d';
import { ReleaseEditedEvent } from './edited.d';
import { ReleasePrereleasedEvent } from './prereleased.d';
import { ReleasePublishedEvent } from './published.d';
import { ReleaseReleasedEvent } from './released.d';
import { ReleaseUnpublishedEvent } from './unpublished.d';

export type ReleaseEvent =
  | ReleaseCreatedEvent
  | ReleaseDeletedEvent
  | ReleaseEditedEvent
  | ReleasePrereleasedEvent
  | ReleasePublishedEvent
  | ReleaseReleasedEvent
  | ReleaseUnpublishedEvent;
