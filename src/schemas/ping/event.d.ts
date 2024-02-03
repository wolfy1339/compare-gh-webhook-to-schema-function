import type { Organization, Repository, User, WebhookEvents } from '../common';
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
    /**
     * Configuration object of the webhook
     */
    config: {
      /**
       * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
       */
      content_type: 'json' | 'form';
      /**
       * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
       */
      secret?: string;
      /**
       * The URL to which the payloads will be delivered.
       */
      url: string;
      /**
       * Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`.
       */
      insecure_ssl: '0' | '1';
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
