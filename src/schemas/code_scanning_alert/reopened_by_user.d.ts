import {
  AlertInstance,
  InstallationLite,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CodeScanningAlertReopenedByUserEvent {
  action: 'reopened_by_user';
  /**
   * The code scanning alert involved in the event.
   */
  alert: {
    /**
     * The code scanning alert number.
     */
    number: number;
    /**
     * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ.`
     */
    created_at: string;
    /**
     * The REST API URL of the alert resource.
     */
    url: string;
    /**
     * The GitHub URL of the alert resource.
     */
    html_url: string;
    instances: (AlertInstance & {
      state: 'open';
    })[];
    most_recent_instance?: AlertInstance;
    /**
     * State of a code scanning alert.
     */
    state: 'open';
    dismissed_by: null;
    /**
     * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    dismissed_at: null;
    /**
     * The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.
     */
    dismissed_reason: null;
    rule: {
      /**
       * A unique identifier for the rule used to detect the alert.
       */
      id: string;
      /**
       * The severity of the alert.
       */
      severity: 'none' | 'note' | 'warning' | 'error' | null;
      /**
       * A short description of the rule used to detect the alert.
       */
      description: string;
    };
    tool: {
      /**
       * The name of the tool used to generate the code scanning analysis alert.
       */
      name: string;
      /**
       * The version of the tool used to detect the alert.
       */
      version: string | null;
    };
  };
  /**
   * The Git reference of the code scanning alert. When the action is `reopened_by_user` or `closed_by_user`, the event was triggered by the `sender` and this value will be empty.
   */
  ref: string;
  /**
   * The commit SHA of the code scanning alert. When the action is `reopened_by_user` or `closed_by_user`, the event was triggered by the `sender` and this value will be empty.
   */
  commit_oid: string;
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
