/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MarketplacePurchasePendingChangeCancelledEvent {
  action: 'pending_change_cancelled';
  effective_date: string;
  sender: {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    email: string;
  };
  marketplace_purchase: {
    account: {
      type: string;
      id: number;
      login: string;
      organization_billing_email: string;
    };
    billing_cycle: string;
    unit_count: number;
    on_free_trial: boolean;
    free_trial_ends_on: null;
    next_billing_date: string;
    plan: {
      id: number;
      name: string;
      description: string;
      monthly_price_in_cents: number;
      yearly_price_in_cents: number;
      price_model: string;
      has_free_trial: boolean;
      unit_name: string | null;
      bullets: string[];
    };
  };
  previous_marketplace_purchase?: {
    account: {
      type: string;
      id: number;
      login: string;
      organization_billing_email: string;
    };
    billing_cycle: string;
    unit_count: number;
    on_free_trial: boolean;
    free_trial_ends_on: null;
    next_billing_date?: string;
    plan: {
      id: number;
      name: string;
      description: string;
      monthly_price_in_cents: number;
      yearly_price_in_cents: number;
      price_model: string;
      has_free_trial: boolean;
      unit_name: string | null;
      bullets: string[];
    };
  };
}
