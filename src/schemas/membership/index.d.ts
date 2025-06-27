export type * from './added.d.ts';
export type * from './removed.d.ts';

import type { MembershipAddedEvent } from './added.d.ts';
import type { MembershipRemovedEvent } from './removed.d.ts';

export type MembershipEvent = MembershipAddedEvent | MembershipRemovedEvent;
