import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import GoBackButton from '../../src/components/GoBackButton';

describe('components/GoBackButton.js', () => {
  it('Should renders the go back button correctly', () => {
    const onPress = jest.fn();

    const tree = renderer.create(<GoBackButton onPress={onPress} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
