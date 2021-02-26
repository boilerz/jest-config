import frontendConfig from '../frontend';
import config from '../index';
import reactNativeConfig from '../react-native';

describe('jest config', () => {
  it('should return default jest config', () => {
    expect(config).toMatchSnapshot();
  });

  it('should return frontend jest config', () => {
    expect(frontendConfig).toMatchSnapshot();
  });

  it('should return react-native jest config', () => {
    expect(reactNativeConfig).toMatchSnapshot();
  });
});
