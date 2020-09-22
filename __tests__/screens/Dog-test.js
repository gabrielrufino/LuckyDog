import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Dog from '../../src/screens/Dog';

describe('screens/Dog.js', () => {
  it('Should renders the dog screen correctly', () => {
    const route = {
      params: {
        image: '',
      },
    };

    const tree = renderer.create(<Dog route={route} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
