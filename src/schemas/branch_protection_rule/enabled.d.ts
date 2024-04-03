import type {
  InstallationLite,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface BranchProtectionConfigurationEnabledEvent {
  action: 'enabled';
  installation?: InstallationLite;
  organization?: Organization;
  repository: Repository;
  sender: User;
}
