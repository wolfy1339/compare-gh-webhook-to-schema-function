import { User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The GitHub App installation.
 */
export interface Installation {
  /**
   * The ID of the installation.
   */
  id: number;
  account: User;
  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  repository_selection: 'all' | 'selected';
  access_tokens_url: string;
  repositories_url: string;
  html_url: string;
  app_id: number;
  app_slug?: string;
  /**
   * The ID of the user or organization this token is being scoped to.
   */
  target_id: number;
  target_type: 'User' | 'Organization';
  permissions: {
    /**
     * The level of permission granted to the access token for GitHub Actions workflows, workflow runs, and artifacts.
     */
    actions?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for repository creation, deletion, settings, teams, and collaborators creation.
     */
    administration?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for checks on code.
     */
    checks?: 'read' | 'write';
    content_references?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for repository contents, commits, branches, downloads, releases, and merges.
     */
    contents?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for deployments and deployment statuses.
     */
    deployments?: 'read' | 'write';
    discussions?: 'read' | 'write';
    emails?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for managing repository environments.
     */
    environments?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for issues and related comments, assignees, labels, and milestones.
     */
    issues?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for organization teams and members.
     */
    members?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to search repositories, list collaborators, and access repository metadata.
     */
    metadata?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage access to an organization.
     */
    organization_administration?: 'read' | 'write';
    organization_events?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage the post-receive hooks for an organization.
     */
    organization_hooks?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for organization packages published to GitHub Packages.
     */
    organization_packages?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for viewing an organization's plan.
     */
    organization_plan?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage organization projects and projects beta (where available).
     */
    organization_projects?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage organization secrets.
     */
    organization_secrets?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to view and manage GitHub Actions self-hosted runners available to an organization.
     */
    organization_self_hosted_runners?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to view and manage users blocked by the organization.
     */
    organization_user_blocking?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for packages published to GitHub Packages.
     */
    packages?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.
     */
    pages?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for pull requests and related comments, assignees, labels, milestones, and merges.
     */
    pull_requests?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage the post-receive hooks for a repository.
     */
    repository_hooks?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage repository projects, columns, and cards.
     */
    repository_projects?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to view and manage secret scanning alerts.
     */
    secret_scanning_alerts?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage repository secrets.
     */
    secrets?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to view and manage security events like code scanning alerts.
     */
    security_events?: 'read' | 'write';
    security_scanning_alert?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage just a single file.
     */
    single_file?: 'read' | 'write';
    /**
     * The level of permission granted to the access token for commit statuses.
     */
    statuses?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage team discussions and related comments.
     */
    team_discussions?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to manage Dependabot alerts.
     */
    vulnerability_alerts?: 'read' | 'write';
    /**
     * The level of permission granted to the access token to update GitHub Actions workflow files.
     */
    workflows?: 'read' | 'write';
  };
  events: (
    | 'branch_protection_rule'
    | 'check_run'
    | 'check_suite'
    | 'code_scanning_alert'
    | 'commit_comment'
    | 'content_reference'
    | 'create'
    | 'delete'
    | 'deployment'
    | 'deployment_review'
    | 'deployment_status'
    | 'deploy_key'
    | 'discussion'
    | 'discussion_comment'
    | 'fork'
    | 'gollum'
    | 'issues'
    | 'issue_comment'
    | 'label'
    | 'member'
    | 'membership'
    | 'merge_queue_entry'
    | 'milestone'
    | 'organization'
    | 'org_block'
    | 'page_build'
    | 'project'
    | 'projects_v2_item'
    | 'project_card'
    | 'project_column'
    | 'public'
    | 'pull_request'
    | 'pull_request_review'
    | 'pull_request_review_comment'
    | 'pull_request_review_thread'
    | 'push'
    | 'registry_package'
    | 'release'
    | 'repository'
    | 'repository_dispatch'
    | 'secret_scanning_alert'
    | 'secret_scanning_alert_location'
    | 'star'
    | 'status'
    | 'team'
    | 'team_add'
    | 'watch'
    | 'workflow_dispatch'
    | 'workflow_job'
    | 'workflow_run'
  )[];
  created_at: string | number;
  updated_at: string | number;
  single_file_name: string | null;
  has_multiple_single_files?: boolean;
  single_file_paths?: string[];
  suspended_by: User | null;
  suspended_at: string | null;
}
