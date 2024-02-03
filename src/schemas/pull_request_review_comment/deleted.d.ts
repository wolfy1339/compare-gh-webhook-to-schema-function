import type {
  AuthorAssociation,
  InstallationLite,
  Label,
  Link,
  Milestone,
  Organization,
  PullRequestAutoMerge,
  PullRequestReviewComment,
  Repository,
  Team,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PullRequestReviewCommentDeletedEvent {
  action: 'deleted';
  comment: PullRequestReviewComment;
  pull_request: {
    url: string;
    id: number;
    node_id: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    number: number;
    state: 'open' | 'closed';
    locked: boolean;
    title: string;
    user: User;
    body: string | null;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    merged_at: string | null;
    merge_commit_sha: string | null;
    assignee: User | null;
    assignees: User[];
    requested_reviewers: (User | Team)[];
    requested_teams: Team[];
    labels: Label[];
    milestone: Milestone | null;
    draft?: boolean;
    commits_url: string;
    review_comments_url: string;
    review_comment_url: string;
    comments_url: string;
    statuses_url: string;
    head: {
      label: string;
      ref: string;
      sha: string;
      user: User;
      repo: Repository;
    };
    base: {
      label: string;
      ref: string;
      sha: string;
      user: User;
      repo: Repository;
    };
    _links: {
      self: Link;
      html: Link;
      issue: Link;
      comments: Link;
      review_comments: Link;
      review_comment: Link;
      commits: Link;
      statuses: Link;
    };
    auto_merge?: PullRequestAutoMerge | null;
    author_association: AuthorAssociation;
    active_lock_reason: 'resolved' | 'off-topic' | 'too heated' | 'spam' | null;
  };
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
