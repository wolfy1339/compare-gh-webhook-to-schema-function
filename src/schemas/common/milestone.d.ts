import type { User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A collection of related issues and pull requests.
 */
export interface Milestone {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  /**
   * The number of the milestone.
   */
  number: number;
  /**
   * The title of the milestone.
   */
  title: string;
  description: string | null;
  creator: User;
  open_issues: number;
  closed_issues: number;
  /**
   * The state of the milestone.
   */
  state: 'closed' | 'open';
  created_at: string;
  updated_at: string;
  due_on: string | null;
  closed_at: string | null;
}
