export type * from './created.d.ts';
export type * from './deleted.d.ts';

import type { StarCreatedEvent } from './created.d.ts';
import type { StarDeletedEvent } from './deleted.d.ts';

export type StarEvent = StarCreatedEvent | StarDeletedEvent;
