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

/**
 * Activity related to repository collaborators. The type of activity is specified in the action property.
 */
export interface MemberAddedEvent {
  action: 'added';
  changes?: {
    permission?: {
      to: 'admin' | 'write'
    }
  };
  /**
   * The user that was added.
   */
  member: User;
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
