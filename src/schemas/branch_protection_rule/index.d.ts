export * from './created.d';
export * from './deleted.d';
export * from './edited.d';

import { BranchProtectionRuleCreatedEvent } from './created.d';
import { BranchProtectionRuleDeletedEvent } from './deleted.d';
import { BranchProtectionRuleEditedEvent } from './edited.d';

export type BranchProtectionRuleEvent =
  | BranchProtectionRuleCreatedEvent
  | BranchProtectionRuleDeletedEvent
  | BranchProtectionRuleEditedEvent;
