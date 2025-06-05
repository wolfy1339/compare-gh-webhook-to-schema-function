#!/usr/bin/env ts-node-transpile-only

/* eslint-disable n/no-sync */

import { schemas } from '@octokit/openapi-webhooks';
import { JSONSchema7 } from 'json-schema';
import fs from 'node:fs';
import { convertToJSONSchema } from './openapi.mjs';

const dotComOpenApiSchema = schemas['api.github.com'];
const outDir = 'src/schemas';
const webhooksSchema = convertToJSONSchema(dotComOpenApiSchema);

fs.mkdirSync(`${outDir}/common`, { recursive: true });

// splits the schema.json in @octokit/webhooks-definitions into
// the schema-per-event file format that the source repo has,
// as that's whats expected by the other scripts (for now)

const getFolderAndSchemaName = (
  key: string
): [folderName: string, schemaName: string] => {
  const [folderName, schemaName] = key.replace('#/definitions/', '').split('$');

  if (folderName && !schemaName) {
    return ['common', folderName];
  }

  return [folderName, schemaName];
};

Object.entries(
  webhooksSchema.definitions as unknown as Record<string, JSONSchema7>
).forEach(([key, definition]) => {
  if (key.includes('_event')) {
    return;
  }

  const [folderName, schemaName] = getFolderAndSchemaName(key);

  // restore $id that is removed when compiling the schemas
  definition.$id =
    folderName === 'common'
      ? `${folderName}/${schemaName}.schema.json`
      : `${folderName}$${schemaName}`;
  fs.mkdirSync(`${outDir}/${folderName}`, { recursive: true });

  const contents = JSON.parse(
    JSON.stringify(
      { $schema: definition.$schema, $id: definition.$id, ...definition },
      (prop, value: unknown) => {
        if (typeof value === 'string' && value.startsWith('#/definitions/')) {
          const ref = value.substring('#/definitions/'.length);

          const fileName = `${ref}.schema.json`;

          // restore $refs back to pointing at common schemas
          return folderName !== 'common' || prop === '$id'
            ? `common/${fileName}`
            : fileName;
        }

        return value;
      }
    )
  ) as JSONSchema7;

  fs.writeFileSync(
    `${outDir}/${folderName}/${schemaName}.schema.json`,
    `${JSON.stringify(contents, null, 2)}\n`
  );
});
