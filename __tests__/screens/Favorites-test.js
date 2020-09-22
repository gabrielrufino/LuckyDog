jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    goBack: jest.fn(),
  })),
}));

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Favorites from '../../src/screens/Favorites';

describe('screens/Favorites', () => {
  it('Should renders the favorites screen correctly', () => {
    const tree = renderer.create(<Favorites />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
