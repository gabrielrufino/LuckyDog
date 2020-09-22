import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Searcher from '../../src/screens/Searcher';

describe('screens/Searcher.js', () => {
  it('Should renders the search screen correctly', () => {
    const tree = renderer.create(<Searcher />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
