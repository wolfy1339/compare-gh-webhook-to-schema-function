import type { InstallationLite, Organization, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CustomPropertyDeletedEvent {
  action: 'deleted';
  definition: {
    /**
     * The name of the property that was deleted.
     */
    property_name: string;
  };
  installation?: InstallationLite;
  organization: Organization;
  sender?: User;
}