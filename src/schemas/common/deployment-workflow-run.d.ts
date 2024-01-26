import type { CheckRunPullRequest, ReferencedWorkflow, User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DeploymentWorkflowRun {
  id: number;
  name: string;
  path?: string;
  display_title?: string;
  node_id: string;
  head_branch: string;
  head_sha: string;
  run_number: number;
  event: string;
  status: 'completed' | 'in_progress' | 'queued' | 'requested';
  conclusion:
    | 'action_required'
    | 'cancelled'
    | 'failure'
    | 'neutral'
    | 'stale'
    | 'success'
    | 'timed_out'
    | null;
  workflow_id: number;
  check_suite_id: number;
  check_suite_node_id: string;
  url: string;
  html_url: string;
  pull_requests: CheckRunPullRequest[];
  created_at: string;
  updated_at: string;
  actor: User;
  triggering_actor: User;
  run_attempt: number;
  run_started_at: string;
  referenced_workflows?: ReferencedWorkflow[];
}
