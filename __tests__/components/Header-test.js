jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    goBack: jest.fn(),
  })),
}));

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../src/components/Header';

describe('components/Header.js', () => {
  it('Should renders the header correctly', () => {
    const title = 'Header title';

    const tree = renderer.create(<Header title={title} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
