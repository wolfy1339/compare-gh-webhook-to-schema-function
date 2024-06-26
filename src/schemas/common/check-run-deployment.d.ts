/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A deployment to a repository environment. This will only be populated if the check run was created by a GitHub Actions workflow job that references an environment.
 */
export interface CheckRunDeployment {
  url: string;
  id: number;
  node_id: string;
  task: string;
  original_environment: string;
  environment: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  statuses_url: string;
  repository_url: string;
}
