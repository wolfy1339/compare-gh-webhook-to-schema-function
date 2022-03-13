export * from './created.d';
export * from './reopened.d';
export * from './resolved.d';

import { SecretScanningAlertCreatedEvent } from './created.d';
import { SecretScanningAlertReopenedEvent } from './reopened.d';
import { SecretScanningAlertResolvedEvent } from './resolved.d';

export type SecretScanningAlertEvent =
  | SecretScanningAlertCreatedEvent
  | SecretScanningAlertReopenedEvent
  | SecretScanningAlertResolvedEvent;
