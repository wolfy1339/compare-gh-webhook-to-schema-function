export type * from './appeared_in_branch.d.ts';
export type * from './closed_by_user.d.ts';
export type * from './created.d.ts';
export type * from './fixed.d.ts';
export type * from './reopened.d.ts';
export type * from './reopened_by_user.d.ts';

import type { CodeScanningAlertAppearedInBranchEvent } from './appeared_in_branch.d.ts';
import type { CodeScanningAlertClosedByUserEvent } from './closed_by_user.d.ts';
import type { CodeScanningAlertCreatedEvent } from './created.d.ts';
import type { CodeScanningAlertFixedEvent } from './fixed.d.ts';
import type { CodeScanningAlertReopenedEvent } from './reopened.d.ts';
import type { CodeScanningAlertReopenedByUserEvent } from './reopened_by_user.d.ts';

export type CodeScanningAlertEvent =
  | CodeScanningAlertAppearedInBranchEvent
  | CodeScanningAlertClosedByUserEvent
  | CodeScanningAlertCreatedEvent
  | CodeScanningAlertFixedEvent
  | CodeScanningAlertReopenedEvent
  | CodeScanningAlertReopenedByUserEvent;
