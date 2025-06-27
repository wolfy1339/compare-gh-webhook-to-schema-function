export type * from './deleted.d.ts';
export type * from './member_added.d.ts';
export type * from './member_invited.d.ts';
export type * from './member_removed.d.ts';
export type * from './renamed.d.ts';

import type { OrganizationDeletedEvent } from './deleted.d.ts';
import type { OrganizationMemberAddedEvent } from './member_added.d.ts';
import type { OrganizationMemberInvitedEvent } from './member_invited.d.ts';
import type { OrganizationMemberRemovedEvent } from './member_removed.d.ts';
import type { OrganizationRenamedEvent } from './renamed.d.ts';

export type OrganizationEvent =
  | OrganizationDeletedEvent
  | OrganizationMemberAddedEvent
  | OrganizationMemberInvitedEvent
  | OrganizationMemberRemovedEvent
  | OrganizationRenamedEvent;
