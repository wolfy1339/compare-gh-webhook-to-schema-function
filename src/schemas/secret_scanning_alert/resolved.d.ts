/* tslint:disable */
import { InstallationLite, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SecretScanningAlertResolvedEvent {
  action: 'resolved';
  /**
   * The secret scanning alert involved in the event.
   */
  alert: {
    number: number;
    secret_type: string;
    resolution: 'false_positive' | 'wontfix' | 'revoked' | 'used_in_tests';
    resolved_by: User;
    resolved_at: string;
  };
  repository: Repository;
  organization?: Organization;
  installation?: InstallationLite;
  sender: User;
}
