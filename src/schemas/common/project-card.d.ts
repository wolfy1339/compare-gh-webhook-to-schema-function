/* tslint:disable */
import { User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ProjectCard {
  url: string;
  project_url: string;
  column_url: string;
  column_id: number;
  /**
   * The project card's ID
   */
  id: number;
  node_id: string;
  note: string;
  /**
   * Whether or not the card is archived
   */
  archived: boolean;
  creator: User;
  created_at: string;
  updated_at: string;
  content_url: string;
}
