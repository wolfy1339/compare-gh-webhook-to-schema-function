export * from './added.d';
export * from './edited.d';
export * from './removed.d';

import { MemberAddedEvent } from './added.d';
import { MemberEditedEvent } from './edited.d';
import { MemberRemovedEvent } from './removed.d';

export type MemberEvent =
  | MemberAddedEvent
  | MemberEditedEvent
  | MemberRemovedEvent;
