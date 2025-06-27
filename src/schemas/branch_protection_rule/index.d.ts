export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './edited.d.ts';

import type { BranchProtectionRuleCreatedEvent } from './created.d.ts';
import type { BranchProtectionRuleDeletedEvent } from './deleted.d.ts';
import type { BranchProtectionRuleEditedEvent } from './edited.d.ts';

export type BranchProtectionRuleEvent =
  | BranchProtectionRuleCreatedEvent
  | BranchProtectionRuleDeletedEvent
  | BranchProtectionRuleEditedEvent;
