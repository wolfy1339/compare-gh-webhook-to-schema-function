import type {
  ReferencedWorkflow,
  RepoRef,
  RepositoryLite,
  SimpleCommit,
  User
} from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WorkflowRun {
  /**
   * The URL to the artifacts for the workflow run.
   */
  artifacts_url: string;
  /**
   * The URL to cancel the workflow run.
   */
  cancel_url: string;
  /**
   * The URL to the associated check suite.
   */
  check_suite_url: string;
  /**
   * The ID of the associated check suite.
   */
  check_suite_id: number;
  /**
   * The node ID of the associated check suite.
   */
  check_suite_node_id: string;
  conclusion:
    | 'action_required'
    | 'cancelled'
    | 'failure'
    | 'neutral'
    | 'skipped'
    | 'stale'
    | 'success'
    | 'timed_out'
    | null;
  created_at: string;
  event: string;
  head_branch: string;
  head_commit: SimpleCommit;
  head_repository: RepositoryLite;
  /**
   * The SHA of the head commit that points to the version of the workflow being run.
   */
  head_sha: string;
  /**
   * The full path of the workflow
   */
  path: string;
  display_title: string;
  html_url: string;
  /**
   * The ID of the workflow run.
   */
  id: number;
  /**
   * The URL to the jobs for the workflow run.
   */
  jobs_url: string;
  /**
   * The URL to download the logs for the workflow run.
   */
  logs_url: string;
  node_id: string;
  /**
   * The name of the workflow run.
   */
  name: string;
  pull_requests: {
    url: string,
    id: number,
    number: number,
    head: {
      ref: string,
      sha: string,
      repo: RepoRef
    },
    base: {
      ref: string,
      sha: string,
      repo: RepoRef
    }
  }[];
  repository: RepositoryLite;
  /**
   * The URL to rerun the workflow run.
   */
  rerun_url: string;
  /**
   * The auto incrementing run number for the workflow run.
   */
  run_number: number;
  status: 'completed' | 'in_progress' | 'queued' | 'requested' | 'waiting';
  updated_at: string;
  /**
   * The URL to the workflow run.
   */
  url: string;
  /**
   * The ID of the parent workflow.
   */
  workflow_id: number;
  /**
   * The URL to the workflow.
   */
  workflow_url: string;
  /**
   * Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.
   */
  run_attempt: number;
  referenced_workflows?: ReferencedWorkflow[];
  /**
   * The start time of the latest run. Resets on re-run.
   */
  run_started_at: string;
  /**
   * The URL to the previous attempted run of this workflow, if one exists.
   */
  previous_attempt_url: string | null;
  actor: User;
  triggering_actor: User;
}
