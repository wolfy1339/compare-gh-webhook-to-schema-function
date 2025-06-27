export type * from './approved.d.ts';
export type * from './rejected.d.ts';
export type * from './requested.d.ts';

import type { DeploymentReviewApprovedEvent } from './approved.d.ts';
import type { DeploymentReviewRejectedEvent } from './rejected.d.ts';
import type { DeploymentReviewRequestedEvent } from './requested.d.ts';

export type DeploymentReviewEvent =
  | DeploymentReviewApprovedEvent
  | DeploymentReviewRejectedEvent
  | DeploymentReviewRequestedEvent;
