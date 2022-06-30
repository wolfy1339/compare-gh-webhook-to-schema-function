export * from './deleted.d';
export * from './member_added.d';
export * from './member_invited.d';
export * from './member_removed.d';
export * from './renamed.d';

import { OrganizationDeletedEvent } from './deleted.d';
import { OrganizationMemberAddedEvent } from './member_added.d';
import { OrganizationMemberInvitedEvent } from './member_invited.d';
import { OrganizationMemberRemovedEvent } from './member_removed.d';
import { OrganizationRenamedEvent } from './renamed.d';

export type OrganizationEvent =
  | OrganizationDeletedEvent
  | OrganizationMemberAddedEvent
  | OrganizationMemberInvitedEvent
  | OrganizationMemberRemovedEvent
  | OrganizationRenamedEvent;
