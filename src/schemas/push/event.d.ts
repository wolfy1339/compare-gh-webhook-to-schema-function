import type {
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
   * The full git ref that was pushed. Example: `refs/heads/main` or `refs/tags/v3.14.1`.
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
  /**
   * Whether this push created the `ref`.
   */
  created: boolean;
  /**
   * Whether this push deleted the `ref`.
   */
  deleted: boolean;
  /**
   * Whether this push was a force push of the `ref`.
   */
  forced: boolean;
  base_ref: string | null;
  /**
   * URL that shows the changes in this `ref` update, from the `before` commit to the `after` commit. For a newly created `ref` that is directly based on the default branch, this is the comparison between the head of the default branch and the `after` commit. Otherwise, this shows all commits until the `after` commit.
   */
  compare: string;
  /**
   * An array of commit objects describing the pushed commits. (Pushed commits are all commits that are included in the `compare` between the `before` commit and the `after` commit.) The array includes a maximum of 20 commits. If necessary, you can use the [Commits API](https://docs.github.com/en/rest/reference/repos#commits) to fetch additional commits. This limit is applied to timeline events only and isn't applied to webhook deliveries.
   */
  commits: Commit[];
  /**
   * For pushes where `after` is or points to a commit object, an expanded representation of that commit. For pushes where `after` refers to an annotated tag object, an expanded representation of the commit pointed to by the annotated tag.
   */
  head_commit: Commit | null;
  repository: Repository;
  pusher: Committer;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
