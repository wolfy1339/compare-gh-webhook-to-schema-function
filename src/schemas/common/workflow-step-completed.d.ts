/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WorkflowStepCompleted {
  name: string;
  status: 'completed';
  conclusion: 'failure' | 'skipped' | 'success';
  number: number;
  started_at: string;
  completed_at: string;
}
