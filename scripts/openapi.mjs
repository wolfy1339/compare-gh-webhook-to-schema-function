/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/**
 * @license MIT
 * @author: @wolfy1339
 * Simple script to convert the GitHub OpenAPI webhooks spec to JSON Schema in the same format as octokit/webhooks
 * Written in ES2022 using ES Modules
 */

export function convertToJSONSchema(oasWebhooks) {
  const JSONSchema = {
    $schema: 'http://json-schema.org/draft-07/schema',
    definitions: new Map(),
    oneOf: new Set()
  };

  for (const [, { post: defn }] of Object.entries(oasWebhooks.webhooks)) {
    // Get the name of the component holding the webhook event schema
    const $ref = defn.requestBody.content['application/json'].schema.$ref
      .split('/')
      .at(-1);
    const oasWebhookDefn = oasWebhooks.components.schemas[$ref];
    const [webhookEvent, action] = defn.operationId
      .replaceAll('-', '_')
      .split('/');
    // Create the proper id for the webhook event action (eg: `issue.opened`) schema
    const JSONSchemaName = `${webhookEvent}$${action || 'event'}`;

    // Create the id for the webhook event, eg: `issue`
    const webhookEvent$ref =
      typeof action !== 'undefined' ? `${webhookEvent}_event` : JSONSchemaName;

    // Add the webhook event (eg: issue) to the global `oneOf`
    JSONSchema.oneOf.add(`#/definitions/${webhookEvent$ref}`);

    // Create the webhook event `oneOf` containing all the schemas for the different actions
    if (typeof action !== 'undefined') {
      const eventDefinition = JSONSchema.definitions.get(webhookEvent$ref) || {
        oneOf: []
      };

      eventDefinition.oneOf.push({
        $ref: `#/definitions/${JSONSchemaName}`
      });
      JSONSchema.definitions.set(webhookEvent$ref, eventDefinition);
    }

    JSONSchema.definitions.set(JSONSchemaName, {
      "$schema": "http://json-schema.org/draft-07/schema",
      ...oasWebhookDefn,
      // Add the `$id` and `title` properties so the type generation script can guess the proper name for the generated interface
      title:
        typeof action !== 'undefined'
          ? `${webhookEvent} ${action} event`
          : `${webhookEvent} event`,
      $id: JSONSchemaName,
      additionalProperties: false
    });
  }

  // Check all instances of `$ref` in the JSON Schema and replace them with the correct path, and add them to the definitions
  // Repleace `anyOf` with `oneOf` if it contains a `null` type
  function processSchema(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    if ('type' in obj) {
      if ('anyOf' in obj && obj.anyOf.some(entry => entry?.type === 'null')) {
        const orig = obj.anyOf;

        obj.anyOf = [];
        for (const item of orig) {
          obj.anyOf.push({ oneOf: [item, { type: 'null' }] });
        }
        delete obj.type;
      }
      if (Array.isArray(obj.type)) {
        if (obj.type.length === 1) {
          obj.type = obj.type[0];
        } else if (obj.type.includes('null')) {
          if (obj.type.length === 2) {
            const type = obj.type.find(t => t !== 'null');

            delete obj.type;
            obj = {
              oneOf: [{ type, ...obj }, { type: 'null' }]
            };
          } else {
            const types = obj.type.sort();
            const typesInOneOf = obj.oneOf.map(item => item.type).sort();

            if (types === typesInOneOf) {
              delete obj.type;
            } else {
              for (const type of types) {
                if (!typesInOneOf.includes(type)) {
                  obj.oneOf.push({ type });
                }
              }
              delete obj.type;
            }
          }
        }
      }
    }

    for (const key in obj) {
      if (key === '$ref') {
        const refName = obj[key].split('/').pop();

        if (!JSONSchema.definitions[refName]) {
          JSONSchema.definitions[refName] =
            oasWebhooks.components.schemas[refName];

          processSchema(JSONSchema.definitions[refName]);
        }

        obj[key] = `#/definitions/${refName}`;
      } else if (key === 'anyOf') {
        // If the property is 'anyOf' and contains null, change it to 'oneOf'
        if (obj[key].some(entry => entry?.type === 'null')) {
          obj.oneOf = obj.anyOf.map(processSchema);
          delete obj.anyOf;
        } else {
          // Recursively process each item in the anyOf array
          obj[key] = obj[key].map(processSchema);
        }
      } else {
        obj[key] = processSchema(obj[key]);
      }
    }

    return obj;
  }

  JSONSchema.definitions = Object.fromEntries(JSONSchema.definitions);
  JSONSchema.oneOf = Array.from(JSONSchema.oneOf).map(ref => ({ $ref: ref }));
  processSchema(JSONSchema.definitions);

  return JSONSchema;
}
