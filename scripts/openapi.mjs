// @ts-nocheck
/**
 * @license MIT
 * @author @wolfy1339
 * Simple script to convert the GitHub OpenAPI webhooks spec to JSON Schema in the same format as octokit/webhooks
 * Written in ES2022 using ES Modules
 */

/**
 *
 * @param oasWebhooks
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
    let [webhookEvent, action] = defn.operationId
        .replaceAll('-', '_')
        .split('/');


    if (webhookEvent === 'repository_dispatch') {
      action = undefined;
    }

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
      $schema: 'http://json-schema.org/draft-07/schema',
      ...oasWebhookDefn,
      // Add the `$id` and `title` properties so the type generation script can guess the proper name for the generated interface
      title: typeof action !== 'undefined' ?
          `${webhookEvent} ${action} event` :
          `${webhookEvent} event`,
      $id: JSONSchemaName,
      additionalProperties: false
    });
  }

  // Check all instances of `$ref` in the JSON Schema and replace them with the correct path, and add them to the definitions
  // Repleace `anyOf` with `oneOf` if it contains a `null` type
  /**
   *
   * @param obj
   * @param key
   * @param currentKey
   */
  function processSchema(obj, currentKey) {
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
            const description = obj.description;

            delete obj.type;
            delete obj.description;
            obj = {
              description,
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
    if ('format' in obj) {
      obj.type = obj.type || 'string';
    }

    // obj.additionalProperties ??= false;

    for (const key in obj) {
      if (key === '$ref') {
        const refName = obj[key].split('/').pop();

        if (!JSONSchema.definitions[refName]) {
          JSONSchema.definitions[refName] =
            oasWebhooks.components.schemas[refName];

          processSchema(JSONSchema.definitions[refName], refName);
        }

        obj[key] = `#/definitions/${refName}`;
      } else if (key === 'anyOf') {
        // If the property is 'anyOf' and contains null, change it to 'oneOf'
        if (obj[key].some(entry => entry?.type === 'null')) {
          obj.oneOf = obj.anyOf.map(processSchema);
          delete obj.anyOf;
        } else {
          // Recursively process each item in the anyOf array
          obj[key] = obj[key].map(e => processSchema(e, key));
        }
      } else {
        obj[key] = processSchema(obj[key], key);
      }
    }

    return obj;
  }
  /**
   *
   * @param obj
   */
  function removeTitle(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    if ('title' in obj) {
      delete obj.title;
    }

    for (const key of Object.keys(obj)) {
      obj[key] = removeTitle(obj[key]);
    }

    return obj;
  }

  /**
   *
   * @param schema
   */
  function replaceExampleWithExamples(schema) {
    if (Array.isArray(schema)) {
      return schema.map(replaceExampleWithExamples);
    } else if (schema && typeof schema === 'object') {
      const result = {};

      for (const [key, value] of Object.entries(schema)) {
        if (key === 'example') {
          // Replace with `examples` and wrap in array if not already an array
          result.examples = Array.isArray(value) ? value : [value];
        } else if (key === 'examples') {
          // Preserve existing `examples`
          result.examples = Array.isArray(value) ? value : [value];
        } else {
          result[key] = replaceExampleWithExamples(value);
        }
      }

      return result;
    }

    return schema; // primitive value
  }

  JSONSchema.definitions = Object.fromEntries(JSONSchema.definitions);
  JSONSchema.oneOf = Array.from(JSONSchema.oneOf).map(ref => ({ $ref: ref }));
  processSchema(JSONSchema.definitions);
  for (const key of Object.keys(JSONSchema.definitions)) {
    const schema = JSONSchema.definitions[key];

    JSONSchema.definitions[key] = processSchema(JSONSchema.definitions[key], key);
    JSONSchema.definitions[key] = replaceExampleWithExamples(JSONSchema.definitions[key]);
    if (typeof schema !== 'object' || schema === null) {
      continue;
    }
    if (!('oneOf' in schema) && !('anyOf' in schema)) {
      JSONSchema.definitions[key].title ??= key.split(/-_/).join(' ');
    }

    if (key === 'deployment-simple') {
      JSONSchema.definitions[key].title = 'Deployment Simple';
    }
    if (key === 'enterprise-webhooks') {
      JSONSchema.definitions[key].title = 'Enterprise Webhooks';
    }
    if (key === 'repository-webhooks') {
      JSONSchema.definitions[key].title = 'Repository Webhooks';
    }
    if (key === 'webhooks_workflow') {
      JSONSchema.definitions[key].title = 'Webhooks Workflow';
    }
    if (key === 'webhooks_issue_comment') {
      JSONSchema.definitions[key].title = 'Webhooks Issue Comment';
    }
    if (key === 'webhooks_label') {
      JSONSchema.definitions[key].title = 'Webhooks Label';
    }
    if (key === 'webhooks_milestone') {
      JSONSchema.definitions[key].title = 'Webhooks Milestone';
    }
    if (key === 'webhooks_project') {
      JSONSchema.definitions[key].title = 'Webhooks Project';
    }
    if (key === 'webhooks_release') {
      JSONSchema.definitions[key].title = 'Webhooks Release';
    }
    if (key === 'repository-rule-pull-request') {
      JSONSchema.definitions[key].title = 'Repository Rule Pull Request';
    }
    if (key === 'webhooks_issue') {
      JSONSchema.definitions[key].title = 'Webhooks Issue';
    }
    if (key === 'webhooks_issue_2') {
      JSONSchema.definitions[key].title = 'Webhooks Issue 2';
    }
    if (key === 'webhooks_project_card') {
      JSONSchema.definitions[key].title = 'Webhooks Project Card';
    }
    if (key === 'webhooks_user') {
      JSONSchema.definitions[key].title = 'Webhooks User';
    }
    if (key === 'webhooks_user_mannequin') {
      JSONSchema.definitions[key].title = 'Webhooks User Mannequin';
    }
    if (key === 'webhooks_team') {
      JSONSchema.definitions[key].title = 'Webhooks Team';
    }
    if (key === 'webhooks_membership') {
      JSONSchema.definitions[key].title = 'Webhooks Membership';
    }
    if (key === 'webhooks_previous_marketplace_purchase') {
      JSONSchema.definitions[key].title = 'Webhooks Previous Marketplace Purchase';
    }
    if (key === 'webhooks_marketplace_purchase') {
      JSONSchema.definitions[key].title = 'Webhooks Marketplace Purchase';
    }
    if (key === 'webhooks_project_column') {
      JSONSchema.definitions[key].title = 'Webhooks Project Column';
    }
    if (key === 'webhooks_changes_8') {
      JSONSchema.definitions[key].title = 'Webhooks Tier Changes';
    }
    if (key === 'webhooks_pull_request') {
      JSONSchema.definitions[key].title = 'Webhooks Pull Request';
    }
    if (key === 'webhooks_pull_request_5') {
      JSONSchema.definitions[key].title = 'Webhooks Pull Request';
    }
    if (key === 'webhooks_team_1') {
      JSONSchema.definitions[key].title = 'Webhooks Team 1';
    }
    if (key === 'webhook-config-insecure-ssl') {
      JSONSchema.definitions[key].title = 'Webhook Config Insecure SSL';
    }
    if (key === 'webhooks_ref_0') {
      JSONSchema.definitions[key].title = 'Webhooks Ref';
    }
    if (key === 'webhooks_nullable_string') {
      JSONSchema.definitions[key].oneOf = [
        { type: 'string' },
        { type: 'null' }
      ];
    }

    for (const prop of Object.keys(JSONSchema.definitions[key])) {
      removeTitle(JSONSchema.definitions[key][prop]);
    }
    if (!('oneOf' in JSONSchema.definitions[key]) &&
        !('anyOf' in JSONSchema.definitions[key])) {
      JSONSchema.definitions[key].type = JSONSchema.definitions[key].type || 'object';
    }
  }

  return JSONSchema;
}
