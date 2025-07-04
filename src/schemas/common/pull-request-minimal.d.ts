/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PullRequestMinimal {
  id: number;
  number: number;
  url: string;
  head: {
    ref: string,
    sha: string,
    repo: {
      id: number,
      url: string,
      name: string
    }
  };
  base: {
    ref: string,
    sha: string,
    repo: {
      id: number,
      url: string,
      name: string
    }
  };
}
