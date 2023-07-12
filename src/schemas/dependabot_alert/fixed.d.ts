import type {
  DependabotAlert,
  GitHubOrg,
  InstallationLite,
  Organization,
  Repository
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DependabotAlertFixedEvent {
  action: 'fixed';
  alert: DependabotAlert & {
    state: 'fixed';
    fixed_at: string;
  };
  repository: Repository;
  sender: GitHubOrg;
  installation?: InstallationLite;
  organization?: Organization;
}
