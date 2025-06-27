export type * from './cancelled.d.ts';
export type * from './changed.d.ts';
export type * from './pending_change.d.ts';
export type * from './pending_change_cancelled.d.ts';
export type * from './purchased.d.ts';

import type { MarketplacePurchaseCancelledEvent } from './cancelled.d.ts';
import type { MarketplacePurchaseChangedEvent } from './changed.d.ts';
import type { MarketplacePurchasePendingChangeEvent } from './pending_change.d.ts';
import type { MarketplacePurchasePendingChangeCancelledEvent } from './pending_change_cancelled.d.ts';
import type { MarketplacePurchasePurchasedEvent } from './purchased.d.ts';

export type MarketplacePurchaseEvent =
  | MarketplacePurchaseCancelledEvent
  | MarketplacePurchaseChangedEvent
  | MarketplacePurchasePendingChangeEvent
  | MarketplacePurchasePendingChangeCancelledEvent
  | MarketplacePurchasePurchasedEvent;
