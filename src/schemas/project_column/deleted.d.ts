/* tslint:disable */
import {
  InstallationLite,
  Organization,
  ProjectColumn,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ProjectColumnDeletedEvent {
  action: 'deleted';
  project_column: ProjectColumn;
  repository?: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
