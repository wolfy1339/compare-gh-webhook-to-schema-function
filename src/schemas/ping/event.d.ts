import { Organization, Repository, User, WebhookEvents } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PingEvent {
  zen: string;
  /**
   * The ID of the webhook that triggered the ping.
   */
  hook_id: number;
  /**
   * The [webhook configuration](https://docs.github.com/en/rest/reference/repos#get-a-repository-webhook).
   */
  hook: {
    type: 'Repository' | 'Organization' | 'App';
    id: number;
    name: string;
    active: boolean;
    /**
     * When you register a new GitHub App, GitHub sends a ping event to the **webhook URL** you specified during registration. The event contains the `app_id`, which is required for [authenticating](https://docs.github.com/en/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps) an app.
     */
    app_id?: number;
    events: WebhookEvents;
    config: {
      content_type: 'json' | 'form';
      secret?: string;
      url: string;
      insecure_ssl: string;
    };
    updated_at: string;
    created_at: string;
    url: string;
    test_url?: string;
    ping_url: string;
    deliveries_url: string;
    last_response?: {
      code: null;
      status: string;
      message: null;
    };
  };
  repository?: Repository;
  sender?: User;
  organization?: Organization;
}
