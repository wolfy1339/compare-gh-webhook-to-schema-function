export type * from './published.d.ts';
export type * from './reported.d.ts';

import type { RepositoryAdvisoryPublishedEvent } from './published.d.ts';
import type { RepositoryAdvisoryReportedEvent } from './reported.d.ts';

export type RepositoryAdvisoryEvent =
  | RepositoryAdvisoryPublishedEvent
  | RepositoryAdvisoryReportedEvent;
