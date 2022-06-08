export * from './appeared_in_branch.d';
export * from './closed_by_user.d';
export * from './created.d';
export * from './fixed.d';
export * from './reopened.d';
export * from './reopened_by_user.d';

import { CodeScanningAlertAppearedInBranchEvent } from './appeared_in_branch.d';
import { CodeScanningAlertClosedByUserEvent } from './closed_by_user.d';
import { CodeScanningAlertCreatedEvent } from './created.d';
import { CodeScanningAlertFixedEvent } from './fixed.d';
import { CodeScanningAlertReopenedEvent } from './reopened.d';
import { CodeScanningAlertReopenedByUserEvent } from './reopened_by_user.d';

export type CodeScanningAlertEvent =
  | CodeScanningAlertAppearedInBranchEvent
  | CodeScanningAlertClosedByUserEvent
  | CodeScanningAlertCreatedEvent
  | CodeScanningAlertFixedEvent
  | CodeScanningAlertReopenedEvent
  | CodeScanningAlertReopenedByUserEvent;
