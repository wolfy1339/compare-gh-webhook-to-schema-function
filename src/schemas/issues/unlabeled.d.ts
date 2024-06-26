import type {
  InstallationLite,
  Issue,
  Label,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IssuesUnlabeledEvent {
  action: 'unlabeled';
  issue: Issue;
  /**
   * The label that was removed from the issue.
   */
  label?: Label;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
