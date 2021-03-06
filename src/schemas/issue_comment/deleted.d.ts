/* tslint:disable */
import {
  AuthorAssociation,
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

export interface IssueCommentDeletedEvent {
  action: 'deleted';
  /**
   * The [issue](https://docs.github.com/en/rest/reference/issues) the comment belongs to.
   */
  issue: Issue & {
    assignee: User | null;
    /**
     * State of the issue; either 'open' or 'closed'
     */
    state: 'open' | 'closed';
    closed_at: null;
    locked: boolean;
    labels: Label[];
    pull_request?: {
      url: string;
      html_url: string;
      diff_url: string;
      patch_url: string;
    };
  };
  /**
   * The [comment](https://docs.github.com/en/rest/reference/issues#comments) itself.
   */
  comment: {
    /**
     * URL for the issue comment
     */
    url: string;
    html_url: string;
    issue_url: string;
    /**
     * Unique identifier of the issue comment
     */
    id: number;
    node_id: string;
    user: User;
    created_at: string;
    updated_at: string;
    author_association: AuthorAssociation;
    /**
     * Contents of the issue comment
     */
    body: string;
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
