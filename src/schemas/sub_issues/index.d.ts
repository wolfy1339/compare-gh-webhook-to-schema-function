export type * from './parent_issue_added.d.ts';
export type * from './parent_issue_removed.d.ts';
export type * from './sub_issue_added.d.ts';
export type * from './sub_issue_removed.d.ts';

import type { SubIssuesParentIssueAddedEvent } from './parent_issue_added.d.ts';
import type { SubIssuesParentIssueRemovedEvent } from './parent_issue_removed.d.ts';
import type { SubIssuesSubIssueAddedEvent } from './sub_issue_added.d.ts';
import type { SubIssuesSubIssueRemovedEvent } from './sub_issue_removed.d.ts';

export type SubIssuesEvent =
  | SubIssuesParentIssueAddedEvent
  | SubIssuesParentIssueRemovedEvent
  | SubIssuesSubIssueAddedEvent
  | SubIssuesSubIssueRemovedEvent;
