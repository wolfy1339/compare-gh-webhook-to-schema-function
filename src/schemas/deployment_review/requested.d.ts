import type {
  InstallationLite,
  Organization,
  Repository,
  Team,
  User,
  WorkflowRun
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DeploymentReviewRequestedEvent {
  action: 'requested';
  workflow_run: WorkflowRun | null;
  since: string;
  workflow_job_run: {
    id: number;
    name: string;
    status: 'completed' | 'in_progress' | 'queued' | 'waiting';
    conclusion: 'cancelled' | 'failure' | 'skipped' | 'success' | null;
    html_url: string;
    created_at: string;
    updated_at: string;
    environment: string;
  };
  environment: string;
  reviewers: (
    | {
        type: 'Team';
        reviewer: Team;
      }
    | {
        type: 'User';
        reviewer: User;
      }
  )[];
  requestor: User;
  repository: Repository;
  organization: Organization;
  sender: User;
  installation?: InstallationLite;
}
