/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SecurityAdvisoryPublishedEvent {
  action: 'published';
  /**
   * The details of the security advisory, including summary, description, and severity.
   */
  security_advisory: {
    cvss: {
      vector_string: string | null;
      score: number;
    };
    cwes: {
      cwe_id: string;
      name: string;
    }[];
    ghsa_id: string;
    summary: string;
    description: string;
    severity: string;
    identifiers: {
      value: string;
      type: string;
    }[];
    references: {
      url: string;
    }[];
    published_at: string;
    updated_at: string;
    withdrawn_at: string | null;
    vulnerabilities: {
      package: {
        ecosystem: string;
        name: string;
      };
      severity: string;
      vulnerable_version_range: string;
      first_patched_version: {
        identifier: string;
      } | null;
    }[];
  };
}
