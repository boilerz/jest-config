import type { Config } from '@jest/types';
import { defaults } from 'jest-config';
import tsJestPreset from 'ts-jest/presets';

const config: Config.InitialOptions = {
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  transform: {
    ...tsJestPreset.defaults.transform,
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  modulePathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/lib',
    '<rootDir>/coverage',
  ],
  restoreMocks: true,
  resetMocks: true,
};

export default config;
