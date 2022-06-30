/* tslint:disable */
import {
  InstallationLite,
  Organization,
  Repository,
  Team,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface TeamAddEvent {
  team: Team;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization: Organization;
}
