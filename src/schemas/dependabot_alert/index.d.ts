export type * from './auto_dismissed.d.ts';
export type * from './auto_reopened.d.ts';
export type * from './created.d.ts';
export type * from './dismissed.d.ts';
export type * from './fixed.d.ts';
export type * from './reintroduced.d.ts';
export type * from './reopened.d.ts';

import type { DependabotAlertAutoDismissedEvent } from './auto_dismissed.d.ts';
import type { DependabotAlertAutoReopenedEvent } from './auto_reopened.d.ts';
import type { DependabotAlertCreatedEvent } from './created.d.ts';
import type { DependabotAlertDismissedEvent } from './dismissed.d.ts';
import type { DependabotAlertFixedEvent } from './fixed.d.ts';
import type { DependabotAlertReintroducedEvent } from './reintroduced.d.ts';
import type { DependabotAlertReopenedEvent } from './reopened.d.ts';

export type DependabotAlertEvent =
  | DependabotAlertAutoDismissedEvent
  | DependabotAlertAutoReopenedEvent
  | DependabotAlertCreatedEvent
  | DependabotAlertDismissedEvent
  | DependabotAlertFixedEvent
  | DependabotAlertReintroducedEvent
  | DependabotAlertReopenedEvent;
