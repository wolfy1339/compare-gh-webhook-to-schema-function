import { WorkflowStep } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The workflow job. Many `workflow_job` keys, such as `head_sha`, `conclusion`, and `started_at` are the same as those in a [`check_run`](#check_run) object.
 */
export interface WorkflowJob {
  id: number;
  run_id: number;
  run_attempt: number;
  run_url: string;
  head_sha: string;
  node_id: string;
  name: string;
  check_run_url: string;
  html_url: string;
  url: string;
  /**
   * The current status of the job. Can be `queued`, `in_progress`, or `completed`.
   */
  status: 'queued' | 'in_progress' | 'completed';
  steps: WorkflowStep[];
  conclusion: 'success' | 'failure' | 'cancelled' | 'skipped' | null;
  /**
   * Custom labels for the job. Specified by the [`"runs-on"` attribute](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) in the workflow YAML.
   */
  labels: string[];
  /**
   * The ID of the runner that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
   */
  runner_id: number | null;
  /**
   * The name of the runner that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
   */
  runner_name: string | null;
  /**
   * The ID of the runner group that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
   */
  runner_group_id: number | null;
  /**
   * The name of the runner group that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
   */
  runner_group_name: string | null;
  started_at: string;
  completed_at: string | null;
  /**
   * The name of the workflow.
   */
  workflow_name: string | null;
  /**
   * The name of the current branch.
   */
  head_branch: string | null;
  created_at: string;
}
