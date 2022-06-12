export * from './cancelled.d';
export * from './changed.d';
export * from './pending_change.d';
export * from './pending_change_cancelled.d';
export * from './purchased.d';

import { MarketplacePurchaseCancelledEvent } from './cancelled.d';
import { MarketplacePurchaseChangedEvent } from './changed.d';
import { MarketplacePurchasePendingChangeEvent } from './pending_change.d';
import { MarketplacePurchasePendingChangeCancelledEvent } from './pending_change_cancelled.d';
import { MarketplacePurchasePurchasedEvent } from './purchased.d';

export type MarketplacePurchaseEvent =
  | MarketplacePurchaseCancelledEvent
  | MarketplacePurchaseChangedEvent
  | MarketplacePurchasePendingChangeEvent
  | MarketplacePurchasePendingChangeCancelledEvent
  | MarketplacePurchasePurchasedEvent;
