/* tslint:disable */
import {
  InstallationLite,
  Organization,
  Project,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ProjectReopenedEvent {
  action: 'reopened';
  project: Project;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
