export * from './completed.d'
export * from './requested.d'
export * from './rerequested.d'

import { CheckSuiteCompletedEvent } from './completed.d'
import { CheckSuiteRequestedEvent } from './requested.d'
import { CheckSuiteRerequestedEvent } from './rerequested.d'

export type CheckSuiteEvent =
  | CheckSuiteCompletedEvent
  | CheckSuiteRequestedEvent
  | CheckSuiteRerequestedEvent;
