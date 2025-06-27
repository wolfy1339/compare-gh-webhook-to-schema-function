export type * from './created.d.ts';
export type * from './deleted.d.ts';

import type { DeployKeyCreatedEvent } from './created.d.ts';
import type { DeployKeyDeletedEvent } from './deleted.d.ts';

export type DeployKeyEvent = DeployKeyCreatedEvent | DeployKeyDeletedEvent;
