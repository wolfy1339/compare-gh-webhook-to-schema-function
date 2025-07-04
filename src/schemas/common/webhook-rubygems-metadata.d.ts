/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RubyGemsMetadata {
  name?: string;
  description?: string;
  readme?: string;
  homepage?: string;
  version_info?: {
    version?: string
  };
  platform?: string;
  metadata?: {
    [k: string]: string | undefined
  };
  repo?: string;
  dependencies?: {
    [k: string]: string | undefined
  }[];
  commit_oid?: string;
}
