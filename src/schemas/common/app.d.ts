import { User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
export interface App {
  /**
   * Unique identifier of the GitHub app
   */
  id: number;
  /**
   * The slug name of the GitHub app
   */
  slug?: string;
  node_id: string;
  owner: User;
  /**
   * The name of the GitHub app
   */
  name: string;
  description: string | null;
  external_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  /**
   * The set of permissions for the GitHub app
   */
  permissions?: {
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
    keys?: 'read' | 'write';
    members?: 'read' | 'write';
    merge_queues?: 'read' | 'write';
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
  /**
   * The list of events for the GitHub app
   */
  events?: (
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
    | 'merge_group'
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
    | 'push'
    | 'registry_package'
    | 'release'
    | 'repository'
    | 'repository_dispatch'
    | 'secret_scanning_alert'
    | 'secret_scanning_alert_location'
    | 'security_and_analysis'
    | 'star'
    | 'status'
    | 'team'
    | 'team_add'
    | 'watch'
    | 'workflow_dispatch'
    | 'workflow_run'
    | 'workflow_job'
  )[];
}
