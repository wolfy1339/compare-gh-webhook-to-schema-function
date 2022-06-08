/* tslint:disable */
import {
  InstallationLite,
  Organization,
  PullRequest,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PullRequestSynchronizeEvent {
  action: 'synchronize';
  /**
   * The pull request number.
   */
  number: number;
  before: string;
  after: string;
  pull_request: PullRequest;
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
