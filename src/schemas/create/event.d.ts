import type {
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

/**
 * A Git branch or tag is created.
 */
export interface CreateEvent {
  /**
   * The [`git ref`](https://docs.github.com/en/rest/reference/git#get-a-reference) resource.
   */
  ref: string;
  /**
   * The type of Git ref object created in the repository. Can be either `branch` or `tag`.
   */
  ref_type: 'branch' | 'tag';
  /**
   * The name of the repository's default branch (usually `main`).
   */
  master_branch: string;
  /**
   * The repository's current description.
   */
  description: string | null;
  /**
   * The pusher type for the event. Can be either `user` or a deploy key.
   */
  pusher_type: string;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
