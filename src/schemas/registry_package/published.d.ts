import type {
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

export interface RegistryPackagePublishedEvent {
  action: 'published';
  /**
   * Information about the package.
   */
  registry_package: {
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
    /**
     * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     */
    package_type:
      | 'CONTAINER'
      | 'docker'
      | 'maven'
      | 'npm'
      | 'nuget'
      | 'rubygems';
    html_url: string;
    created_at: string;
    updated_at: string | null;
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
              collection: boolean | null;
            };
            attributes?: Record<string, unknown>;
            _formatted?: boolean;
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
      docker_metadata?: unknown[];
      container_metadata?: {
        labels?: {
          description?: string;
          source?: string;
          revision?: string;
          image_url?: string;
          licenses?: string;
          all_labels?: Record<string, string>;
        } | null;
        manifest?: {
          digest?: string;
          media_type?: string;
          uri?: string;
          size?: number;
          config?: {
            digest?: string;
            media_type?: string;
            size?: number;
          };
          layers?: {
            digest?: string;
            media_type?: string;
            size?: number;
          }[];
        } | null;
        tag?: {
          digest?: string;
          name?: string;
        };
      };
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
      author?: {
        avatar_url: string;
        events_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        html_url: string;
        id: number;
        login: string;
        node_id: string;
        organizations_url: string;
        received_events_url: string;
        repos_url: string;
        site_admin: boolean;
        starred_url: string;
        subscriptions_url: string;
        type: string;
        url: string;
      };
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
