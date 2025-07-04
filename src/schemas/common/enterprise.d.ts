/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An enterprise on GitHub.
 */
export interface Enterprise {
  /**
   * A short description of the enterprise.
   */
  description?: string | null;
  html_url: string;
  /**
   * The enterprise's website URL.
   */
  website_url?: string | null;
  /**
   * Unique identifier of the enterprise
   */
  id: number;
  node_id: string;
  /**
   * The name of the enterprise.
   */
  name: string;
  /**
   * The slug url identifier for the enterprise.
   */
  slug: string;
  created_at: string | null;
  updated_at: string | null;
  avatar_url: string;
}
