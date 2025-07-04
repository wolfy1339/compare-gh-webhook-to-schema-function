import type {
  EnterpriseWebhooks, OrganizationSimple, RepositoryWebhooks, SimpleInstallation, SimpleUser, WebhooksUser 
} from '../common/index.d.ts';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MemberAddedEvent {
  action: 'added';
  changes?: {
    /**
     * This field is included for legacy purposes; use the `role_name` field instead. The `maintain`
     * role is mapped to `write` and the `triage` role is mapped to `read`. To determine the role
     * assigned to the collaborator, use the `role_name` field instead, which will provide the full
     * role name, including custom roles.
     */
    permission?: {
      to: 'write' | 'admin' | 'read'
    },
    /**
     * The role assigned to the collaborator.
     */
    role_name?: {
      to: string
    }
  };
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  member: WebhooksUser;
  organization?: OrganizationSimple;
  repository: RepositoryWebhooks;
  sender: SimpleUser;
}
