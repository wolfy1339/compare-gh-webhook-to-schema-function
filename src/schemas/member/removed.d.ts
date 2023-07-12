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

export interface MemberRemovedEvent {
  action: 'removed';
  /**
   * The user that was removed.
   */
  member: User;
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
