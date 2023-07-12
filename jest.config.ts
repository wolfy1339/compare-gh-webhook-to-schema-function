import { Config } from '@jest/types';
import 'ts-jest';

const config: Config.InitialOptions = {
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    './test/setupExpectEachTestHasAssertions.ts',
    './test/setupMockFs.ts'
  ],
  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  transform: {
    '\\.tsx?': ['ts-jest', { isolatedModules: true }]
  }
};

export default config;
