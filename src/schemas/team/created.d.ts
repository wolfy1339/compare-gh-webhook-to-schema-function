import type {
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

export interface TeamCreatedEvent {
  action: 'created';
  team: Team;
  repository?: Repository;
  sender: User;
  organization: Organization;
  installation?: InstallationLite;
}
