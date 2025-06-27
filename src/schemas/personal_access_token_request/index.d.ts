export type * from './approved.d.ts';
export type * from './cancelled.d.ts';
export type * from './created.d.ts';
export type * from './denied.d.ts';

import type { PersonalAccessTokenRequestApprovedEvent } from './approved.d.ts';
import type { PersonalAccessTokenRequestCancelledEvent } from './cancelled.d.ts';
import type { PersonalAccessTokenRequestCreatedEvent } from './created.d.ts';
import type { PersonalAccessTokenRequestDeniedEvent } from './denied.d.ts';

export type PersonalAccessTokenRequestEvent =
  | PersonalAccessTokenRequestApprovedEvent
  | PersonalAccessTokenRequestCancelledEvent
  | PersonalAccessTokenRequestCreatedEvent
  | PersonalAccessTokenRequestDeniedEvent;
