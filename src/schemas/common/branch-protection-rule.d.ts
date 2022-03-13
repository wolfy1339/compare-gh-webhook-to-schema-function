/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The branch protection rule. Includes a `name` and all the [branch protection settings](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings) applied to branches that match the name. Binary settings are boolean. Multi-level configurations are one of `off`, `non_admins`, or `everyone`. Actor and build lists are arrays of strings.
 */
export interface BranchProtectionRule {
  id: number;
  repository_id: number;
  name: string;
  created_at: string;
  updated_at: string;
  pull_request_reviews_enforcement_level: 'off' | 'non_admins' | 'everyone';
  required_approving_review_count: number;
  dismiss_stale_reviews_on_push: boolean;
  require_code_owner_review: boolean;
  authorized_dismissal_actors_only: boolean;
  ignore_approvals_from_contributors: boolean;
  required_status_checks: string[];
  required_status_checks_enforcement_level: 'off' | 'non_admins' | 'everyone';
  strict_required_status_checks_policy: boolean;
  signature_requirement_enforcement_level: 'off' | 'non_admins' | 'everyone';
  linear_history_requirement_enforcement_level:
    | 'off'
    | 'non_admins'
    | 'everyone';
  admin_enforced: boolean;
  allow_force_pushes_enforcement_level: 'off' | 'non_admins' | 'everyone';
  allow_deletions_enforcement_level: 'off' | 'non_admins' | 'everyone';
  merge_queue_enforcement_level: 'off' | 'non_admins' | 'everyone';
  required_deployments_enforcement_level: 'off' | 'non_admins' | 'everyone';
  required_conversation_resolution_level: 'off' | 'non_admins' | 'everyone';
  authorized_actors_only: boolean;
  authorized_actor_names: string[];
}
