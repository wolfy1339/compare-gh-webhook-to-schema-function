import type {
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

/**
 * When a private repository is made public.
 */
export interface PublicEvent {
  repository: Repository & {
    private: false
  };
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
