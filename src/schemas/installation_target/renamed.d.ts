import type {
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

/**
 * Somebody renamed the user or organization account that a GitHub App is installed on.
 */
export interface InstallationTargetRenamedEvent {
  changes: {
    login?: {
      from: string;
    };
    slug?: {
      from: string;
    };
  };
  action: 'renamed';
  account: {
    avatar_url: string;
    created_at?: string;
    description?: null;
    events_url?: string;
    followers?: number;
    followers_url?: string;
    following?: number;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    has_organization_projects?: boolean;
    has_repository_projects?: boolean;
    hooks_url?: string;
    html_url: string;
    id: number;
    is_verified?: boolean;
    issues_url?: string;
    login?: string;
    members_url?: string;
    name?: string;
    node_id: string;
    organizations_url?: string;
    public_gists?: number;
    public_members_url?: string;
    public_repos?: number;
    received_events_url?: string;
    repos_url?: string;
    site_admin?: boolean;
    slug?: string;
    starred_url?: string;
    subscriptions_url?: string;
    type?: 'Bot' | 'User' | 'Organization';
    updated_at?: string;
    url?: string;
    website_url?: null;
  };
  repository?: Repository;
  sender?: User;
  installation: InstallationLite;
  organization?: Organization;
  target_type: string;
}
