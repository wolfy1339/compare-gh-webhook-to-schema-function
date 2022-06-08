/* tslint:disable */
import {
  InstallationLite,
  Milestone,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MilestoneOpenedEvent {
  action: 'opened';
  milestone: Milestone & {
    state: 'open';
    closed_at: null;
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
