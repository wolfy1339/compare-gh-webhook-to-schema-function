export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';

import type { IssueCommentCreatedEvent } from './created.d.ts';
import type { IssueCommentDeletedEvent } from './deleted.d.ts';
import type { IssueCommentEditedEvent } from './edited.d.ts';

export type IssueCommentEvent =
  | IssueCommentCreatedEvent
  | IssueCommentDeletedEvent
  | IssueCommentEditedEvent;
