/* tslint:disable */
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
    actions?: 'read' | 'write';
    administration?: 'read' | 'write';
    checks?: 'read' | 'write';
    content_references?: 'read' | 'write';
    contents?: 'read' | 'write';
    deployments?: 'read' | 'write';
    discussions?: 'read' | 'write';
    emails?: 'read' | 'write';
    environments?: 'read' | 'write';
    issues?: 'read' | 'write';
    members?: 'read' | 'write';
    metadata?: 'read' | 'write';
    organization_administration?: 'read' | 'write';
    organization_hooks?: 'read' | 'write';
    organization_packages?: 'read' | 'write';
    organization_plan?: 'read' | 'write';
    organization_projects?: 'read' | 'write';
    organization_secrets?: 'read' | 'write';
    organization_self_hosted_runners?: 'read' | 'write';
    organization_user_blocking?: 'read' | 'write';
    packages?: 'read' | 'write';
    pages?: 'read' | 'write';
    pull_requests?: 'read' | 'write';
    repository_hooks?: 'read' | 'write';
    repository_projects?: 'read' | 'write';
    secret_scanning_alerts?: 'read' | 'write';
    secrets?: 'read' | 'write';
    security_events?: 'read' | 'write';
    security_scanning_alert?: 'read' | 'write';
    single_file?: 'read' | 'write';
    statuses?: 'read' | 'write';
    team_discussions?: 'read' | 'write';
    vulnerability_alerts?: 'read' | 'write';
    workflows?: 'read' | 'write';
  };
  events: (
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
    | 'milestone'
    | 'organization'
    | 'org_block'
    | 'page_build'
    | 'project'
    | 'project_card'
    | 'project_column'
    | 'public'
    | 'pull_request'
    | 'pull_request_review'
    | 'pull_request_review_comment'
    | 'push'
    | 'registry_package'
    | 'release'
    | 'repository'
    | 'repository_dispatch'
    | 'secret_scanning_alert'
    | 'star'
    | 'status'
    | 'team'
    | 'team_add'
    | 'watch'
    | 'workflow_dispatch'
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
