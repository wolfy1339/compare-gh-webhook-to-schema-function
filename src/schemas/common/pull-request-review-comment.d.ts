import type { AuthorAssociation, Link, Reactions, User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The [comment](https://docs.github.com/en/rest/reference/pulls#comments) itself.
 */
export interface PullRequestReviewComment {
  /**
   * URL for the pull request review comment
   */
  url: string;
  /**
   * The ID of the pull request review to which the comment belongs.
   */
  pull_request_review_id: number;
  /**
   * The ID of the pull request review comment.
   */
  id: number;
  /**
   * The node ID of the pull request review comment.
   */
  node_id: string;
  /**
   * The diff of the line that the comment refers to.
   */
  diff_hunk: string;
  /**
   * The relative path of the file to which the comment applies.
   */
  path: string;
  /**
   * The line index in the diff to which the comment applies.
   */
  position: number | null;
  /**
   * The index of the original line in the diff to which the comment applies.
   */
  original_position: number;
  /**
   * The SHA of the commit to which the comment applies.
   */
  commit_id: string;
  /**
   * The SHA of the original commit to which the comment applies.
   */
  original_commit_id: string;
  user: User;
  /**
   * The text of the comment.
   */
  body: string;
  created_at: string;
  updated_at: string;
  /**
   * HTML URL for the pull request review comment.
   */
  html_url: string;
  /**
   * URL for the pull request that the review comment belongs to.
   */
  pull_request_url: string;
  author_association: AuthorAssociation;
  _links: {
    self: Link,
    html: Link,
    pull_request: Link
  };
  reactions: Reactions;
  /**
   * The first line of the range for a multi-line comment.
   */
  start_line: number | null;
  /**
   * The first line of the range for a multi-line comment.
   */
  original_start_line: number | null;
  /**
   * The side of the first line of the range for a multi-line comment.
   */
  start_side: 'LEFT' | 'RIGHT' | null;
  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  line: number | null;
  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  original_line: number;
  /**
   * The side of the first line of the range for a multi-line comment.
   */
  side: 'LEFT' | 'RIGHT';
  /**
   * The comment ID to reply to.
   */
  in_reply_to_id?: number;
  /**
   * The level at which the comment is targeted, can be a diff line or a file.
   */
  subject_type?: 'file' | 'line';
}
