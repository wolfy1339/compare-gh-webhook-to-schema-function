/* tslint:disable */
import { Installation, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ProjectColumnMovedEvent {
  action: 'moved';
  project_column: {
    url: string;
    project_url: string;
    cards_url: string;
    id: number;
    node_id: string;
    name: string;
    created_at: string;
    updated_at: string;
  };
  repository: Repository;
  sender: User;
  installation?: Installation;
  organization?: Organization;
}
