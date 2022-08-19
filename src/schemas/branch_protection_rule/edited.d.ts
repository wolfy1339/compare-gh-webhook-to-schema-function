import {
  BranchProtectionRule,
  BranchProtectionRuleArray,
  BranchProtectionRuleBoolean,
  BranchProtectionRuleEnforcementLevel,
  BranchProtectionRuleNumber,
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
 * Activity related to a branch protection rule. For more information, see "[About branch protection rules](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)."
 */
export interface BranchProtectionRuleEditedEvent {
  action: 'edited';
  rule: BranchProtectionRule;
  /**
   * If the action was `edited`, the changes to the rule.
   */
  changes?: {
    admin_enforced?: {
      from: BranchProtectionRuleBoolean;
    };
    allow_deletions_enforcement_level?: {
      from: BranchProtectionRuleEnforcementLevel | null;
    };
    allow_force_pushes_enforcement_level?: {
      from: BranchProtectionRuleEnforcementLevel;
    };
    authorized_actors_only?: {
      from: BranchProtectionRuleBoolean;
    };
    authorized_actor_names?: {
      from: BranchProtectionRuleArray;
    };
    authorized_dismissal_actors_only?: {
      from: BranchProtectionRuleBoolean | null;
    };
    dismiss_stale_reviews_on_push?: {
      from: BranchProtectionRuleBoolean;
    };
    pull_request_reviews_enforcement_level?: {
      from: BranchProtectionRuleEnforcementLevel;
    };
    require_code_owner_review?: {
      from: BranchProtectionRuleBoolean;
    };
    required_approving_review_count?: {
      from: BranchProtectionRuleNumber;
    };
    required_conversation_resolution_level?: {
      from: BranchProtectionRuleEnforcementLevel;
    };
    required_deployments_enforcement_level?: {
      from: BranchProtectionRuleEnforcementLevel;
    };
    required_status_checks?: {
      from: BranchProtectionRuleArray;
    };
    required_status_checks_enforcement_level?: {
      from: BranchProtectionRuleEnforcementLevel;
    };
    signature_requirement_enforcement_level?: {
      from: BranchProtectionRuleEnforcementLevel;
    };
    linear_history_requirement_enforcement_level?: {
      from: BranchProtectionRuleEnforcementLevel;
    };
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
