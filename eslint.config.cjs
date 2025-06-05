// @ts-nocheck
const { defineConfig, globalIgnores } = require('eslint/config');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');
const wolfy1339 = require('@hellomouse/eslint-config-wolfy1339');
const typescript = require('@hellomouse/eslint-config-typescript');
const jest = require('eslint-plugin-jest');

/**
 * Generates a config for `jest/no-restricted-matchers` that bans all variations
 * of the given base matchers
 *
 * @param {Record<string, string>} matchers
 *
 * @return {Record<string, string>}
 */
const banMatchers = matchers => {
  return Object.fromEntries(
    Object.entries(matchers).flatMap(([matcher, message]) => [
      [matcher, message],
      [`resolves.${matcher}`, message],
      [`resolves.not.${matcher}`, message],
      [`rejects.not.${matcher}`, message],
      [`not.${matcher}`, message]
    ])
  );
};

module.exports = defineConfig([
  globalIgnores(['**/.build/', '**/.serverless/', '**/.tmp/', '**/gh-schemas']),
  {
    extends: [js.configs.recommended, typescript, wolfy1339],
    plugins: {
      '@typescript-eslint': typescriptEslint
    },

    languageOptions: {
      globals: {
        ...globals.node
      },
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: 'tsconfig.json'
      }
    },

    rules: {}
  },
  {
    files: ['scripts/*.mts'],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: 'scripts/tsconfig.json'
      }
    }
  },
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  {
    files: ['src/schemas/**/**.d.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  },
  {
    files: ['**/index.js'],

    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off'
    }
  }
]);
