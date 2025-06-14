import type {
  InstallationLite,
  Organization,
  ProjectCard,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ProjectCardConvertedEvent {
  action: 'converted';
  changes: {
    note: {
      from: string
    }
  };
  project_card: ProjectCard;
  repository?: Repository;
  sender: User;
  organization?: Organization;
  installation?: InstallationLite;
}
