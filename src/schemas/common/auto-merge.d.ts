import type { User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The status of auto merging a pull request.
 */
export interface PullRequestAutoMerge {
  enabled_by: User | null;
  /**
   * The merge method to use.
   */
  merge_method: 'merge' | 'rebase' | 'squash';
  /**
   * Title for the merge commit message.
   */
  commit_title: string | null;
  /**
   * Commit message for the merge commit.
   */
  commit_message: string | null;
}
