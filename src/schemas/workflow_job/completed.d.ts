/* tslint:disable */
import { Organization, Repository, User, WorkflowJob } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WorkflowJobCompletedEvent {
  action: 'completed';
  organization?: Organization;
  repository: Repository;
  sender: User;
  workflow_job: WorkflowJob & {
    conclusion: 'success' | 'failure';
  };
}