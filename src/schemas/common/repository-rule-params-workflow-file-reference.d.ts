/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A workflow that must run for this rule to pass
 */
export interface WorkflowFileReference {
  /**
   * The path to the workflow file
   */
  path: string;
  /**
   * The ref (branch or tag) of the workflow file to use
   */
  ref?: string;
  /**
   * The ID of the repository where the workflow is defined
   */
  repository_id: number;
  /**
   * The commit SHA of the workflow file to use
   */
  sha?: string;
}
