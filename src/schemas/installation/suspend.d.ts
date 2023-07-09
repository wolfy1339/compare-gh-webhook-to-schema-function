import type { Installation, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface InstallationSuspendEvent {
  action: 'suspend';
  installation: Installation & {
    suspended_by: User;
    suspended_at: string;
  };
  /**
   * An array of repository objects that the installation can access.
   */
  repositories?: {
    /**
     * Unique identifier of the repository
     */
    id: number;
    node_id: string;
    /**
     * The name of the repository.
     */
    name: string;
    full_name: string;
    /**
     * Whether the repository is private or public.
     */
    private: boolean;
  }[];
  requester?: null;
  sender: User;
}
