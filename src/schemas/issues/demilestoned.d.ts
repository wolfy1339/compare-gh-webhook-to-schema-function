/* tslint:disable */
import {
  InstallationLite,
  Issue,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IssuesDemilestonedEvent {
  action: 'demilestoned';
  /**
   * The [issue](https://docs.github.com/en/rest/reference/issues) itself.
   */
  issue: Issue;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
