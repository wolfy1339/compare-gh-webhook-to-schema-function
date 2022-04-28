/* tslint:disable */
import {
  App,
  Deployment,
  DeploymentWorkflowRun,
  InstallationLite,
  Organization,
  Repository,
  User,
  Workflow
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DeploymentStatusCreatedEvent {
  action: 'created';
  /**
   * The [deployment status](https://docs.github.com/en/rest/reference/deployments#list-deployment-statuses).
   */
  deployment_status: {
    url: string;
    id: number;
    node_id: string;
    /**
     * The new state. Can be `pending`, `success`, `failure`, or `error`.
     */
    state: string;
    creator: User;
    /**
     * The optional human-readable description added to the status.
     */
    description: string;
    environment: string;
    environment_url?: string | '';
    log_url?: string;
    /**
     * The optional link added to the status.
     */
    target_url: string;
    created_at: string;
    updated_at: string;
    deployment_url: string;
    repository_url: string;
    performed_via_github_app?: App | null;
  };
  deployment: Deployment;
  check_run?: {
    /**
     * The id of the check.
     */
    id: number;
    /**
     * The name of the check run.
     */
    name: string;
    node_id: string;
    /**
     * The SHA of the commit that is being checked.
     */
    head_sha: string;
    external_id: string;
    url: string;
    html_url: string;
    details_url: string;
    /**
     * The current status of the check run. Can be `queued`, `in_progress`, or `completed`.
     */
    status: 'queued' | 'in_progress' | 'completed' | 'waiting';
    /**
     * The result of the completed check run. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` or `stale`. This value will be `null` until the check run has completed.
     */
    conclusion:
      | 'success'
      | 'failure'
      | 'neutral'
      | 'cancelled'
      | 'timed_out'
      | 'action_required'
      | 'stale'
      | 'skipped'
      | null;
    started_at: string;
    completed_at: string | null;
  };
  workflow_run?: DeploymentWorkflowRun;
  workflow?: Workflow;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
