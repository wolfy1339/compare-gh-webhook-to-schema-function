/* tslint:disable */
import {
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

export interface DiscussionCreatedEvent {
  action: 'created';
  discussion: Discussion & {
    state: 'open' | 'converting';
    locked: false;
    answer_html_url: null;
    answer_chosen_at: null;
    answer_chosen_by: null;
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
