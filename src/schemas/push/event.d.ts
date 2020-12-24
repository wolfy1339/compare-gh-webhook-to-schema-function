/* tslint:disable */
import { Installation, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PushEvent {
  ref: string;
  before: string;
  after: string;
  created: boolean;
  deleted: boolean;
  forced: boolean;
  base_ref: null;
  compare: string;
  commits: unknown[];
  head_commit: null;
  repository: Repository;
  pusher: {
    name: string;
    email: string;
  };
  sender: User;
  installation?: Installation;
  organization?: Organization;
}
