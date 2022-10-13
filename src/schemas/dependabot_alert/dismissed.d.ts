import {
  DependabotAlert,
  InstallationLite,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DependabotAlertDismissedEvent {
  action: 'dismissed';
  alert: DependabotAlert & {
    state: 'dismissed';
    dismissed_at: string;
    dismissed_by: User;
    dismissed_reason:
      | 'fix_started'
      | 'inaccurate'
      | 'no_bandwidth'
      | 'not_used'
      | 'tolerable_risk';
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
