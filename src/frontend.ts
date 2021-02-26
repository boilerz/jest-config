import type { Config } from '@jest/types';

import base from './base';

const config: Config.InitialOptions = {
  ...base,
  testEnvironment: 'jsdom',
};

export = config;
