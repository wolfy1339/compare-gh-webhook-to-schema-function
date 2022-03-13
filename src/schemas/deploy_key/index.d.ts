export * from './created.d';
export * from './deleted.d';

import { DeployKeyCreatedEvent } from './created.d';
import { DeployKeyDeletedEvent } from './deleted.d';

export type DeployKeyEvent = DeployKeyCreatedEvent | DeployKeyDeletedEvent;
