import type {
  EnterpriseWebhooks, OrganizationSimple, RepositoryWebhooks, SimpleInstallation, SimpleUser 
} from '../common/index.d.ts';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RepositoryDispatchEvent {
  /**
   * The `event_type` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
   */
  action: string;
  branch: string;
  /**
   * The `client_payload` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
   */
  client_payload: {
    [k: string]: unknown | undefined
  } | null;
  enterprise?: EnterpriseWebhooks;
  installation: SimpleInstallation;
  organization?: OrganizationSimple;
  repository: RepositoryWebhooks;
  sender: SimpleUser;
}
