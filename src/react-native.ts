import type { Config } from '@jest/types';

import base from './base';

const config: Config.InitialOptions = {
  preset: 'react-native',
  ...base,
};

export default config;
