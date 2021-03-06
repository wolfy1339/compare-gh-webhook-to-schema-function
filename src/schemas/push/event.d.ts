/* tslint:disable */
import {
  Commit,
  Committer,
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

export interface PushEvent {
  /**
   * The full git ref that was pushed. Example: `refs/heads/main`.
   */
  ref: string;
  /**
   * The SHA of the most recent commit on `ref` before the push.
   */
  before: string;
  /**
   * The SHA of the most recent commit on `ref` after the push.
   */
  after: string;
  created: boolean;
  deleted: boolean;
  forced: boolean;
  base_ref: null;
  compare: string;
  /**
   * An array of commit objects describing the pushed commits.
   */
  commits: Commit[];
  head_commit: Commit | null;
  repository: Repository;
  pusher: Committer;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
