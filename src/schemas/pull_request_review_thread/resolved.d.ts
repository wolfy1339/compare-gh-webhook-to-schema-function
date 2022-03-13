import {
  InstallationLite,
  Organization,
  PullRequestReviewComment,
  Repository,
  SimplePullRequest,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PullRequestReviewThreadResolvedEvent {
  action: 'resolved';
  thread: {
    node_id: string;
    comments: PullRequestReviewComment[];
  };
  pull_request: SimplePullRequest;
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
