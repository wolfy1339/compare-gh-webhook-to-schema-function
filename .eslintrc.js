/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: { node: true },
  extends: ['./.eslintrc/javascript', './.eslintrc/typescript'],
  ignorePatterns: ['.build/', '.serverless/', '.tmp/', 'gh-schemas'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off'
      }
    },
    {
      files: ['test/**'],
      extends: ['./.eslintrc/jest'],
      rules: { 'jest/prefer-expect-assertions': 'off' }
    },
    {
      files: ['src/schemas/**/**.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/ban-types': 'off'
      }
    }
  ],
  rules: {}
};

module.exports = config;
