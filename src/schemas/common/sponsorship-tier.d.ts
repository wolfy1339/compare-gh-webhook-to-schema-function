/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The `tier_changed` and `pending_tier_change` will include the original tier before the change or pending change. For more information, see the pending tier change payload.
 */
export interface SponsorshipTier {
  node_id: string;
  created_at: string;
  description: string;
  monthly_price_in_cents: number;
  monthly_price_in_dollars: number;
  name: string;
  is_one_time: boolean;
  is_custom_ammount: boolean;
}
