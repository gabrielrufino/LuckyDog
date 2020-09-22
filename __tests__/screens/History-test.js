jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    goBack: jest.fn(),
  })),
}));

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import History from '../../src/screens/History';

describe('screens/History', () => {
  it('Should renders the history screen correctly', () => {
    const tree = renderer.create(<History />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
