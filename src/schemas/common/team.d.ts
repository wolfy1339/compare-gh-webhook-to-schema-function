/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export interface Team {
  /**
   * Name of the team
   */
  name: string;
  /**
   * Unique identifier of the team
   */
  id: number;
  node_id: string;
  slug: string;
  /**
   * Description of the team
   */
  description: string | null;
  privacy: 'closed' | 'open' | 'secret';
  /**
   * URL for the team
   */
  url: string;
  html_url: string;
  members_url: string;
  repositories_url: string;
  /**
   * Permission that the team will have for its repositories
   */
  permission: string;
  parent?: {
    /**
     * Name of the team
     */
    name: string,
    /**
     * Unique identifier of the team
     */
    id: number,
    node_id: string,
    slug: string,
    /**
     * Description of the team
     */
    description: string | null,
    privacy: 'closed' | 'open' | 'secret',
    /**
     * URL for the team
     */
    url: string,
    html_url: string,
    members_url: string,
    repositories_url: string,
    /**
     * Permission that the team will have for its repositories
     */
    permission: string,
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    notification_setting?: 'notifications_disabled' | 'notifications_enabled'
  } | null;
  /**
   * Whether team members will receive notifications when their team is @mentioned
   */
  notification_setting?: 'notifications_disabled' | 'notifications_enabled';
}
