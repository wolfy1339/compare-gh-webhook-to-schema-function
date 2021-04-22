/* tslint:disable */
import { PullRequest, RepositoryLite, SimpleCommit } from '.';
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
  conclusion: string | null;
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
  pull_requests: PullRequest[];
  repository: RepositoryLite;
  rerun_url: string;
  run_number: number;
  status: string;
  updated_at: string;
  url: string;
  workflow_id: number;
  workflow_url: string;
}
