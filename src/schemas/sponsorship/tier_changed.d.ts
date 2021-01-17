/* tslint:disable */
import { SponsorshipTier, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SponsorshipTierChangedEvent {
  action: 'tier_changed';
  sponsorship: {
    node_id: string;
    created_at: string;
    sponsorable: User;
    sponsor: User;
    privacy_level: string;
    tier: SponsorshipTier;
  };
  changes: {
    tier: {
      from: SponsorshipTier;
    };
  };
  sender: User;
}