import type {
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

export interface PullRequestClosedEvent {
  action: 'closed';
  /**
   * The pull request number.
   */
  number: number;
  pull_request: PullRequest & {
    /**
     * State of this Pull Request. Either `open` or `closed`.
     */
    state: 'closed';
    closed_at: string;
    merged: boolean;
  };
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
