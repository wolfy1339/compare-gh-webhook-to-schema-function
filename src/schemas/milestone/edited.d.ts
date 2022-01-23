/* tslint:disable */
import {
  InstallationLite,
  Milestone,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MilestoneEditedEvent {
  action: 'edited';
  /**
   * The changes to the milestone if the action was `edited`.
   */
  changes: {
    description?: {
      /**
       * The previous version of the description if the action was `edited`.
       */
      from: string;
    };
    due_on?: {
      /**
       * The previous version of the due date if the action was `edited`.
       */
      from: string;
    };
    title?: {
      /**
       * The previous version of the title if the action was `edited`.
       */
      from: string;
    };
  };
  milestone: Milestone;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
