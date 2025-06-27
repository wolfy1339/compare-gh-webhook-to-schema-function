export type * from './added.d.ts';
export type * from './edited.d.ts';
export type * from './removed.d.ts';

import type { MemberAddedEvent } from './added.d.ts';
import type { MemberEditedEvent } from './edited.d.ts';
import type { MemberRemovedEvent } from './removed.d.ts';

export type MemberEvent =
  | MemberAddedEvent
  | MemberEditedEvent
  | MemberRemovedEvent;
