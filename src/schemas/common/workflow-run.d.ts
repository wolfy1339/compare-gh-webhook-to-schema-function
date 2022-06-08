/* tslint:disable */
import { RepoRef, RepositoryLite, SimpleCommit, User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WorkflowRun {
  artifacts_url: string;
  cancel_url: string;
  check_suite_url: string;
  check_suite_id: number;
  check_suite_node_id: string;
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
  created_at: string;
  event: string;
  head_branch: string;
  head_commit: SimpleCommit;
  head_repository: RepositoryLite;
  head_sha: string;
  html_url: string;
  id: number;
  jobs_url: string;
  logs_url: string;
  node_id: string;
  name: string;
  pull_requests: {
    url: string;
    id: number;
    number: number;
    head: {
      ref: string;
      sha: string;
      repo: RepoRef;
    };
    base: {
      ref: string;
      sha: string;
      repo: RepoRef;
    };
  }[];
  repository: RepositoryLite;
  rerun_url: string;
  run_number: number;
  status: 'requested' | 'in_progress' | 'completed' | 'queued' | 'waiting';
  updated_at: string;
  url: string;
  workflow_id: number;
  workflow_url: string;
  run_attempt: number;
  run_started_at: string;
  previous_attempt_url: string | null;
  actor: User;
  triggering_actor: User;
}
