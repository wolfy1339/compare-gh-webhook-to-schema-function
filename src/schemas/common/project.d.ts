/* tslint:disable */
import { User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Project {
  owner_url: string;
  url: string;
  html_url: string;
  columns_url: string;
  id: number;
  node_id: string;
  /**
   * Name of the project
   */
  name: string;
  /**
   * Body of the project
   */
  body: string | null;
  number: number;
  /**
   * State of the project; either 'open' or 'closed'
   */
  state: 'open' | 'closed';
  creator: User;
  created_at: string;
  updated_at: string;
}
