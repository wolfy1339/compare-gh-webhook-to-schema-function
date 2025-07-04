import type {
  EnterpriseWebhooks, OrganizationSimple, RepositoryWebhooks, SimpleInstallation, SimpleUser, WebhooksIssue, WebhooksUserMannequin 
} from '../common/index.d.ts';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IssuesUnassignedEvent {
  /**
   * The action that was performed.
   */
  action: 'unassigned';
  assignee?: WebhooksUserMannequin;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  issue: WebhooksIssue;
  organization?: OrganizationSimple;
  repository: RepositoryWebhooks;
  sender: SimpleUser;
}
