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

export interface PullRequestAutoMergeEnabledEvent {
  action: 'auto_merge_enabled';
  number: number;
  pull_request: PullRequest;
  reason: string;
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
