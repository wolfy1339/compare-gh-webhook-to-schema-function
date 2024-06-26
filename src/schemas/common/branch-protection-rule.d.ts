import type {
  BranchProtectionRuleArray,
  BranchProtectionRuleBoolean,
  BranchProtectionRuleEnforcementLevel,
  BranchProtectionRuleNumber
} from '.';
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
  pull_request_reviews_enforcement_level: BranchProtectionRuleEnforcementLevel;
  required_approving_review_count: BranchProtectionRuleNumber;
  dismiss_stale_reviews_on_push: BranchProtectionRuleBoolean;
  require_code_owner_review: BranchProtectionRuleBoolean;
  authorized_dismissal_actors_only: BranchProtectionRuleBoolean;
  ignore_approvals_from_contributors: BranchProtectionRuleBoolean;
  require_last_push_approval?: BranchProtectionRuleBoolean;
  required_status_checks: BranchProtectionRuleArray;
  required_status_checks_enforcement_level: BranchProtectionRuleEnforcementLevel;
  strict_required_status_checks_policy: BranchProtectionRuleBoolean;
  signature_requirement_enforcement_level: BranchProtectionRuleEnforcementLevel;
  linear_history_requirement_enforcement_level: BranchProtectionRuleEnforcementLevel;
  admin_enforced: BranchProtectionRuleBoolean;
  create_protected?: BranchProtectionRuleBoolean;
  allow_force_pushes_enforcement_level: BranchProtectionRuleEnforcementLevel;
  allow_deletions_enforcement_level: BranchProtectionRuleEnforcementLevel;
  merge_queue_enforcement_level: BranchProtectionRuleEnforcementLevel;
  required_deployments_enforcement_level: BranchProtectionRuleEnforcementLevel;
  required_conversation_resolution_level: BranchProtectionRuleEnforcementLevel;
  authorized_actors_only: BranchProtectionRuleBoolean;
  authorized_actor_names: BranchProtectionRuleArray;
}
