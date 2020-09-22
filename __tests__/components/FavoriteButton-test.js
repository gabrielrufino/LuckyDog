import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import FavoriteButton from '../../src/components/FavoriteButton';

describe('components/FavoriteButton.js', () => {
  it('Should renders the favorite-button correctly', () => {
    const onPress = jest.fn();

    const tree = renderer.create(<FavoriteButton onPress={onPress} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
