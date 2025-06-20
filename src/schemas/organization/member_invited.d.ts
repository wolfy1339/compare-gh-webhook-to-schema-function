import type { InstallationLite, Organization, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface OrganizationMemberInvitedEvent {
  action: 'member_invited';
  /**
   * The invitation for the user or email if the action is `member_invited`.
   */
  invitation: {
    id: number,
    node_id: string,
    login: string,
    email: string | null,
    role: string,
    created_at: string,
    failed_at: string | null,
    failed_reason: string | null,
    inviter: User,
    team_count: number,
    invitation_teams_url: string
  };
  user: User;
  sender: User;
  installation?: InstallationLite;
  organization: Organization;
}
