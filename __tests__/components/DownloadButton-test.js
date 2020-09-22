import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import DownloadButton from '../../src/components/DownloadButton';

describe('components/DownloadButton.js', () => {
  it('Should renders the download button correctly', () => {
    const onPress = jest.fn();

    const tree = renderer.create(<DownloadButton onPress={onPress} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
