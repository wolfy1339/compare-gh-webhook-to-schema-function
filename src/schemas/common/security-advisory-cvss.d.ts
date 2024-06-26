/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Details for the advisory pertaining to the Common Vulnerability Scoring System.
 */
export interface SecurityAdvisoryCvss {
  /**
   * The overall CVSS score of the advisory.
   */
  score: number;
  /**
   * The full CVSS vector string for the advisory.
   */
  vector_string: string | null;
}
