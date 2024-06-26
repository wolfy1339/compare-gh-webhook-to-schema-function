/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Label {
  id: number;
  node_id: string;
  /**
   * URL for the label
   */
  url: string;
  /**
   * The name of the label.
   */
  name: string;
  description: string | null;
  /**
   * 6-character hex code, without the leading #, identifying the color
   */
  color: string;
  default: boolean;
}
