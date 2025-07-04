import type { Enterprise, SimpleUser } from './index.d.ts';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface GitHubApp {
  /**
   * Unique identifier of the GitHub app
   */
  id: number;
  /**
   * The slug name of the GitHub app
   */
  slug?: string;
  node_id: string;
  client_id?: string;
  owner: SimpleUser | Enterprise;
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
  permissions: {
    issues?: string,
    checks?: string,
    metadata?: string,
    contents?: string,
    deployments?: string,
    [k: string]: string | undefined
  };
  /**
   * The list of events for the GitHub app. Note that the `installation_target`, `security_advisory`, and `meta` events are not included because they are global events and not specific to an installation.
   */
  events: string[];
  /**
   * The number of installations associated with the GitHub app. Only returned when the integration is requesting details about itself.
   */
  installations_count?: number;
}
