export * from './disabled';
export * from './enabled';

import type { BranchProtectionConfigurationDisabledEvent } from './disabled';
import type { BranchProtectionConfigurationEnabledEvent } from './enabled';

export type BranchProtectionConfigurationEvent =
  | BranchProtectionConfigurationDisabledEvent
  | BranchProtectionConfigurationEnabledEvent;
