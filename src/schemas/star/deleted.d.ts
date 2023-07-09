import type {
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

export interface StarDeletedEvent {
  action: 'deleted';
  /**
   * The time the star was created. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. Will be `null` for the `deleted` action.
   */
  starred_at: null;
  repository: Repository;
  sender: User;
  organization?: Organization;
  installation?: InstallationLite;
}
