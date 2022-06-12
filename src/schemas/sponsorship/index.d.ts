export * from './cancelled.d';
export * from './created.d';
export * from './edited.d';
export * from './pending_cancellation.d';
export * from './pending_tier_change.d';
export * from './tier_changed.d';

import { SponsorshipCancelledEvent } from './cancelled.d';
import { SponsorshipCreatedEvent } from './created.d';
import { SponsorshipEditedEvent } from './edited.d';
import { SponsorshipPendingCancellationEvent } from './pending_cancellation.d';
import { SponsorshipPendingTierChangeEvent } from './pending_tier_change.d';
import { SponsorshipTierChangedEvent } from './tier_changed.d';

export type SponsorshipEvent =
  | SponsorshipCancelledEvent
  | SponsorshipCreatedEvent
  | SponsorshipEditedEvent
  | SponsorshipPendingCancellationEvent
  | SponsorshipPendingTierChangeEvent
  | SponsorshipTierChangedEvent;
