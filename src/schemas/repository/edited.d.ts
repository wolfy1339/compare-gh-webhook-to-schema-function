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

export interface RepositoryEditedEvent {
  action: 'edited';
  changes: {
    description?: {
      from: string | null
    },
    default_branch?: {
      from: string
    },
    homepage?: {
      from: string | null
    },
    topics?: {
      from: string[]
    }
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
