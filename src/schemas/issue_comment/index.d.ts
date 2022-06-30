export * from './created.d';
export * from './deleted.d';
export * from './edited.d';

import { IssueCommentCreatedEvent } from './created.d';
import { IssueCommentDeletedEvent } from './deleted.d';
import { IssueCommentEditedEvent } from './edited.d';

export type IssueCommentEvent =
  | IssueCommentCreatedEvent
  | IssueCommentDeletedEvent
  | IssueCommentEditedEvent;
