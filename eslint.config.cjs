// @ts-nocheck
const { defineConfig, globalIgnores } = require('eslint/config');
const globals = require('globals');
const ts = require('typescript-eslint');
// const stylistic = require('@stylistic/eslint-plugin');
const js = require('@eslint/js');
const wolfy1339 = require('@hellomouse/eslint-config-wolfy1339');
const typescript = require('@hellomouse/eslint-config-typescript');

module.exports = defineConfig([
  globalIgnores(['**/.build/', '**/.serverless/', '**/.tmp/', '**/gh-schemas', 'lib/**']),
  {
    extends: [js.configs.recommended, typescript, wolfy1339],
    plugins: {
      '@typescript-eslint': ts.plugin
      // '@stylistic': stylistic
    },

    languageOptions: {
      globals: {
        ...globals.node
      },
      parser: ts.parser,
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        project: true
      }
    },

    rules: {
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
        TSTypeLiteral: { multiline: true, consistent: true },
        // TSEnumBody: { multiline: true, consistent: true },
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: { minProperties: 3 }
      }],
      'import/extensions': 'off'
    }
  },
  {
    files: ['**/*.ts', '**/*.cts', '**/*.mts'],
    rules: {
      'no-undef': 'off'
    }
  },
  {
    files: ['scripts/*.mts'],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
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
