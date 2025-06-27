export type * from './created.d.ts';
export type * from './deleted.d.ts';
export type * from './promote_to_enterprise.d.ts';
export type * from './updated.d.ts';

import type { CustomPropertyCreatedEvent } from './created.d.ts';
import type { CustomPropertyDeletedEvent } from './deleted.d.ts';
import type { CustomPropertyPromoteToEnterpriseEvent } from './promote_to_enterprise.d.ts';
import type { CustomPropertyUpdatedEvent } from './updated.d.ts';

export type CustomPropertyEvent =
  | CustomPropertyCreatedEvent
  | CustomPropertyDeletedEvent
  | CustomPropertyPromoteToEnterpriseEvent
  | CustomPropertyUpdatedEvent;
