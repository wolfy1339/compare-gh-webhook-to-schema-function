import {
  InstallationLite,
  Organization,
  PackageNPMMetadata,
  PackageNugetMetadata,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PackageUpdatedEvent {
  action: 'updated';
  /**
   * Information about the package.
   */
  package: {
    /**
     * Unique identifier of the package.
     */
    id: number;
    /**
     * The name of the package.
     */
    name: string;
    namespace: string;
    description: string | null;
    ecosystem: string;
    package_type:
      | 'npm'
      | 'maven'
      | 'rubygems'
      | 'docker'
      | 'nuget'
      | 'CONTAINER';
    html_url: string;
    created_at: string;
    updated_at: string;
    owner: User;
    /**
     * A version of a software package
     */
    package_version: {
      /**
       * Unique identifier of the package version.
       */
      id: number;
      version: string;
      summary: string;
      /**
       * The name of the package version.
       */
      name: string;
      description: string;
      body?:
        | string
        | {
            repository: {
              repository: Repository;
            };
            info: {
              type: string;
              oid: string;
              mode: number;
              name: string;
              path: string;
              size: number | null;
              collection: boolean;
            };
            attributes: {};
            _formatted: boolean;
          };
      body_html?: string;
      release?: {
        url: string;
        html_url: string;
        id: number;
        tag_name: string;
        target_commitish: string;
        name: string;
        draft: boolean;
        author: User;
        prerelease: boolean;
        created_at: string;
        published_at: string;
      };
      manifest?: string;
      html_url: string;
      tag_name?: string;
      target_commitish?: string;
      target_oid?: string;
      draft?: boolean;
      prerelease?: boolean;
      created_at?: string;
      updated_at?: string;
      /**
       * Package Version Metadata
       */
      metadata: unknown[];
      container_metadata?: {
        labels?: {
          [k: string]: unknown;
        } | null;
        manifest?: {
          [k: string]: unknown;
        } | null;
        tag?: {
          digest?: string;
          name?: string;
        };
      } | null;
      docker_metadata?: unknown[];
      npm_metadata?: PackageNPMMetadata | null;
      nuget_metadata?: PackageNugetMetadata[] | null;
      rubygems_metadata?: unknown[];
      package_files: {
        download_url: string;
        id: number;
        name: string;
        sha256: string;
        sha1: string;
        md5: string;
        content_type: string;
        state: string;
        size: number;
        created_at: string;
        updated_at: string;
      }[];
      package_url?: string;
      author?: User;
      source_url?: string;
      installation_command: string;
    } | null;
    registry: {
      about_url: string;
      name: string;
      type: string;
      url: string;
      vendor: string;
    };
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
