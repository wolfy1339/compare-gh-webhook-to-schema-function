export type * from './blocked.d.ts';
export type * from './unblocked.d.ts';

import type { OrgBlockBlockedEvent } from './blocked.d.ts';
import type { OrgBlockUnblockedEvent } from './unblocked.d.ts';

export type OrgBlockEvent = OrgBlockBlockedEvent | OrgBlockUnblockedEvent;
