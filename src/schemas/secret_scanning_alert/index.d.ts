export type * from './created.d.ts';
export type * from './publicly_leaked.d.ts';
export type * from './reopened.d.ts';
export type * from './resolved.d.ts';
export type * from './validated.d.ts';

import type { SecretScanningAlertCreatedEvent } from './created.d.ts';
import type { SecretScanningAlertPubliclyLeakedEvent } from './publicly_leaked.d.ts';
import type { SecretScanningAlertReopenedEvent } from './reopened.d.ts';
import type { SecretScanningAlertResolvedEvent } from './resolved.d.ts';
import type { SecretScanningAlertValidatedEvent } from './validated.d.ts';

export type SecretScanningAlertEvent =
  | SecretScanningAlertCreatedEvent
  | SecretScanningAlertPubliclyLeakedEvent
  | SecretScanningAlertReopenedEvent
  | SecretScanningAlertResolvedEvent
  | SecretScanningAlertValidatedEvent;
