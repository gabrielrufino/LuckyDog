jest.mock('react-native-gesture-handler');

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

describe('App.js', () => {
  it('Should renders the app correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
