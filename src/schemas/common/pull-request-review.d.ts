import { AuthorAssociation, Link, User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The review that was affected.
 */
export interface PullRequestReview {
  /**
   * Unique identifier of the review
   */
  id: number;
  node_id: string;
  user: User;
  /**
   * The text of the review.
   */
  body: string | null;
  /**
   * A commit SHA for the review.
   */
  commit_id: string;
  submitted_at: string | null;
  state: 'commented' | 'changes_requested' | 'approved' | 'dismissed';
  html_url: string;
  pull_request_url: string;
  author_association: AuthorAssociation;
  _links: {
    html: Link;
    pull_request: Link;
  };
}
