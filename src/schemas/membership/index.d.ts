export * from './added.d'
export * from './removed.d'

import { MembershipAddedEvent } from './added.d'
import { MembershipRemovedEvent } from './removed.d'

export type MembershipEvent = MembershipAddedEvent | MembershipRemovedEvent;
