/* tslint:disable */
import {
  AuthorAssociation,
  Discussion,
  InstallationLite,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DiscussionUnansweredEvent {
  action: 'unanswered';
  discussion: Discussion & {
    category: {
      is_answerable: true;
    };
    answer_html_url: null;
    answer_chosen_at: null;
    answer_chosen_by: null;
  };
  old_answer: {
    id: number;
    node_id: string;
    html_url: string;
    parent_id: null;
    child_comment_count: number;
    repository_url: string;
    discussion_id: number;
    author_association: AuthorAssociation;
    user: User;
    created_at: string;
    updated_at: string;
    body: string;
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}