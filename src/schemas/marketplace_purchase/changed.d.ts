import type { MarketplacePurchase } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MarketplacePurchaseChangedEvent {
  action: 'changed';
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
  marketplace_purchase: MarketplacePurchase & {
    next_billing_date: string;
  };
  previous_marketplace_purchase?: MarketplacePurchase;
}
