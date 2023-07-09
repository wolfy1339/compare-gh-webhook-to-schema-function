import type {
  InstallationLite,
  Organization,
  Project,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ProjectEditedEvent {
  action: 'edited';
  /**
   * The changes to the project if the action was `edited`.
   */
  changes?: {
    name?: {
      /**
       * The changes to the project if the action was `edited`.
       */
      from: string;
    };
    body?: {
      /**
       * The previous version of the body if the action was `edited`.
       */
      from: string;
    };
  };
  project: Project;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
