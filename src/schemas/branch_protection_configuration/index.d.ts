export type * from './disabled.d.ts';
export type * from './enabled.d.ts';

import type { BranchProtectionConfigurationDisabledEvent } from './disabled.d.ts';
import type { BranchProtectionConfigurationEnabledEvent } from './enabled.d.ts';

export type BranchProtectionConfigurationEvent =
  | BranchProtectionConfigurationDisabledEvent
  | BranchProtectionConfigurationEnabledEvent;
