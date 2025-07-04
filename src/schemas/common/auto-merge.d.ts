import type { SimpleUser } from './index.d.ts';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface AutoMerge {
  enabled_by: SimpleUser;
  /**
   * The merge method to use.
   */
  merge_method: 'merge' | 'squash' | 'rebase';
  /**
   * Title for the merge commit message.
   */
  commit_title: string;
  /**
   * Commit message for the merge commit.
   */
  commit_message: string;
}
