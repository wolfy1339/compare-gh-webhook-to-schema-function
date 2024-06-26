import type { InstallationLite, Organization, Team, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MembershipAddedEvent {
  action: 'added';
  /**
   * The scope of the membership. Currently, can only be `team`.
   */
  scope: 'team';
  /**
   * The [user](https://docs.github.com/en/rest/reference/users) that was added or removed.
   */
  member: User;
  sender: User;
  /**
   * The [team](https://docs.github.com/en/rest/reference/teams) for the membership.
   */
  team: Team;
  organization: Organization;
  installation?: InstallationLite;
}
