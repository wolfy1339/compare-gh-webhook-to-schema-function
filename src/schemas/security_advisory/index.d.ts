export * from './performed.d'
export * from './published.d'
export * from './updated.d'
export * from './withdrawn.d'

import { SecurityAdvisoryPerformedEvent } from './performed.d'
import { SecurityAdvisoryPublishedEvent } from './published.d'
import { SecurityAdvisoryUpdatedEvent } from './updated.d'
import { SecurityAdvisoryWithdrawnEvent } from './withdrawn.d'

export type SecurityAdvisoryEvent =
  | SecurityAdvisoryPerformedEvent
  | SecurityAdvisoryPublishedEvent
  | SecurityAdvisoryUpdatedEvent
  | SecurityAdvisoryWithdrawnEvent;
