/* tslint:disable */
import { InstallationLite, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MemberEditedEvent {
  action: 'edited';
  /**
   * The user who's permissions are changed.
   */
  member: User;
  /**
   * The changes to the collaborator permissions
   */
  changes: {
    old_permission: {
      /**
       * The previous permissions of the collaborator if the action was edited.
       */
      from: string;
    };
  };
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
