/* tslint:disable */
import { InstallationLite, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Page Build
 */
export interface PageBuildEvent {
  id: number;
  /**
   * The [List GitHub Pages builds](https://docs.github.com/en/rest/reference/repos#list-github-pages-builds) itself.
   */
  build: {
    url: string;
    status: string;
    error: {
      message: string | null;
    };
    pusher: User;
    commit: string;
    duration: number;
    created_at: string;
    updated_at: string;
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
