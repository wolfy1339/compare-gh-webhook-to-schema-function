export type * from './cancelled.d.ts';
export type * from './created.d.ts';
export type * from './edited.d.ts';
export type * from './pending_cancellation.d.ts';
export type * from './pending_tier_change.d.ts';
export type * from './tier_changed.d.ts';

import type { SponsorshipCancelledEvent } from './cancelled.d.ts';
import type { SponsorshipCreatedEvent } from './created.d.ts';
import type { SponsorshipEditedEvent } from './edited.d.ts';
import type { SponsorshipPendingCancellationEvent } from './pending_cancellation.d.ts';
import type { SponsorshipPendingTierChangeEvent } from './pending_tier_change.d.ts';
import type { SponsorshipTierChangedEvent } from './tier_changed.d.ts';

export type SponsorshipEvent =
  | SponsorshipCancelledEvent
  | SponsorshipCreatedEvent
  | SponsorshipEditedEvent
  | SponsorshipPendingCancellationEvent
  | SponsorshipPendingTierChangeEvent
  | SponsorshipTierChangedEvent;
