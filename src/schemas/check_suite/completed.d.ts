import {
  App,
  CheckRunPullRequest,
  InstallationLite,
  Organization,
  Repository,
  SimpleCommit,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CheckSuiteCompletedEvent {
  action: 'completed';
  /**
   * The [check_suite](https://docs.github.com/en/rest/reference/checks#suites).
   */
  check_suite: {
    id: number;
    node_id: string;
    /**
     * The head branch name the changes are on.
     */
    head_branch: string | null;
    /**
     * The SHA of the head commit that is being checked.
     */
    head_sha: string;
    /**
     * The summary status for all check runs that are part of the check suite. Can be `requested`, `in_progress`, or `completed`.
     */
    status: 'requested' | 'in_progress' | 'completed' | 'queued' | null;
    /**
     * The summary conclusion for all check runs that are part of the check suite. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` or `stale`. This value will be `null` until the check run has `completed`.
     */
    conclusion:
      | 'success'
      | 'failure'
      | 'neutral'
      | 'cancelled'
      | 'timed_out'
      | 'action_required'
      | 'stale'
      | null;
    /**
     * URL that points to the check suite API resource.
     */
    url: string;
    before: string | null;
    after: string | null;
    /**
     * An array of pull requests that match this check suite. A pull request matches a check suite if they have the same `head_sha` and `head_branch`. When the check suite's `head_branch` is in a forked repository it will be `null` and the `pull_requests` array will be empty.
     */
    pull_requests: CheckRunPullRequest[];
    app: App;
    created_at: string;
    updated_at: string;
    rerequestable?: boolean;
    latest_check_runs_count: number;
    check_runs_url: string;
    head_commit: SimpleCommit;
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
