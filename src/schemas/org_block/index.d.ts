export * from './blocked.d';
export * from './unblocked.d';

import { OrgBlockBlockedEvent } from './blocked.d';
import { OrgBlockUnblockedEvent } from './unblocked.d';

export type OrgBlockEvent = OrgBlockBlockedEvent | OrgBlockUnblockedEvent;
