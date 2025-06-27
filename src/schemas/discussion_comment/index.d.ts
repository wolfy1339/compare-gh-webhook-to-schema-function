export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';

import type { DiscussionCommentCreatedEvent } from './created.d.ts';
import type { DiscussionCommentDeletedEvent } from './deleted.d.ts';
import type { DiscussionCommentEditedEvent } from './edited.d.ts';

export type DiscussionCommentEvent =
  | DiscussionCommentCreatedEvent
  | DiscussionCommentDeletedEvent
  | DiscussionCommentEditedEvent;
