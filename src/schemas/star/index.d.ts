export * from './created.d';
export * from './deleted.d';

import { StarCreatedEvent } from './created.d';
import { StarDeletedEvent } from './deleted.d';

export type StarEvent = StarCreatedEvent | StarDeletedEvent;
