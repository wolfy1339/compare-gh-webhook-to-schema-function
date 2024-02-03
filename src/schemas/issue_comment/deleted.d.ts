import type {
  InstallationLite,
  Issue,
  IssueComment,
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
    locked: boolean;
    labels: Label[];
  };
  comment: IssueComment;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
