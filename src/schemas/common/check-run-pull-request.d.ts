/* tslint:disable */
import { RepoRef } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CheckRunPullRequest {
  url: string;
  id: number;
  number: number;
  head: {
    ref: string;
    sha: string;
    repo: RepoRef;
  };
  base: {
    ref: string;
    sha: string;
    repo: RepoRef;
  };
}