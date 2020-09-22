import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Divider from '../../src/components/Divider';

describe('components/Divider.js', () => {
  it('Should renders the default divider correctly', () => {
    const tree = renderer.create(<Divider />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should renders the divider with vertical direction correctly', () => {
    const tree = renderer.create(<Divider direction="vertical" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
