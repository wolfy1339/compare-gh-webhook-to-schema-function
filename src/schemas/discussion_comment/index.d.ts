export * from './created.d'
export * from './deleted.d'
export * from './edited.d'

import { DiscussionCommentCreatedEvent } from './created.d'
import { DiscussionCommentDeletedEvent } from './deleted.d'
import { DiscussionCommentEditedEvent } from './edited.d'

export type DiscussionCommentEvent =
  | DiscussionCommentCreatedEvent
  | DiscussionCommentDeletedEvent
  | DiscussionCommentEditedEvent;
