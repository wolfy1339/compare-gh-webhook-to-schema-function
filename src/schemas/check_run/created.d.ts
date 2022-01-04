import {
  App,
  CheckRunDeployment,
  CheckRunPullRequest,
  InstallationLite,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CheckRunCreatedEvent {
  action: 'created';
  /**
   * The [check_run](https://docs.github.com/en/rest/reference/checks#get-a-check-run).
   */
  check_run: {
    /**
     * The id of the check.
     */
    id: number;
    node_id?: string;
    /**
     * The SHA of the commit that is being checked.
     */
    head_sha: string;
    external_id: string;
    url: string;
    html_url: string;
    details_url?: string;
    /**
     * The current status of the check run. Can be `queued`, `in_progress`, or `completed`.
     */
    status: 'queued' | 'in_progress' | 'completed';
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
    /**
     * The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    started_at: string;
    /**
     * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    completed_at: string | null;
    output: {
      title?: string | null;
      summary: string | null;
      text: string | null;
      annotations_count: number;
      annotations_url: string;
    };
    /**
     * The name of the check run.
     */
    name: string;
    check_suite: {
      /**
       * The id of the check suite that this check run is part of.
       */
      id: number;
      node_id?: string;
      head_branch: string | null;
      /**
       * The SHA of the head commit that is being checked.
       */
      head_sha: string;
      status: 'queued' | 'in_progress' | 'completed';
      conclusion:
        | 'success'
        | 'failure'
        | 'neutral'
        | 'cancelled'
        | 'timed_out'
        | 'action_required'
        | 'stale'
        | null;
      url: string;
      before: string | null;
      after: string | null;
      /**
       * An array of pull requests that match this check suite. A pull request matches a check suite if they have the same `head_sha` and `head_branch`. When the check suite's `head_branch` is in a forked repository it will be `null` and the `pull_requests` array will be empty.
       */
      pull_requests: CheckRunPullRequest[];
      deployment?: CheckRunDeployment;
      app: App;
      created_at: string;
      updated_at: string;
    };
    app: App;
    pull_requests: CheckRunPullRequest[];
  };
  /**
   * The action requested by the user.
   */
  requested_action?: {
    /**
     * The integrator reference of the action requested by the user.
     */
    identifier?: string;
  } | null;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
