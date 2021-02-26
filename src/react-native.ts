import type { Config } from '@jest/types';
import omit from 'lodash.omit';

import base from './base';

const config: Config.InitialOptions = {
  preset: 'react-native',
  ...omit(base, 'transform'),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export = config;
