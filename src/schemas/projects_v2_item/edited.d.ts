/* tslint:disable */
import {
  InstallationLite,
  Organization,
  ProjectsV2Item,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ProjectsV2ItemEditedEvent {
  changes: {
    field_value: {
      field_type: 'single_select' | 'date' | 'number' | 'text' | 'iteration';
      field_node_id: string;
    };
  };
  action: 'edited';
  projects_v2_item: ProjectsV2Item;
  sender: User;
  organization?: Organization;
  installation?: InstallationLite;
}
