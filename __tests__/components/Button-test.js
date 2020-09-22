import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../src/components/Button';

describe('components/Button.js', () => {
  it('Should renders the default button correctly', () => {
    const label = 'Button label';
    const onPress = jest.fn();

    const tree = renderer
      .create(<Button label={label} onPress={onPress} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should renders the flat button correctly', () => {
    const label = 'Button label';
    const onPress = jest.fn();

    const tree = renderer
      .create(<Button label={label} onPres={onPress} flat />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should renders the outlined button correctly', () => {
    const label = 'Button label';
    const onPress = jest.fn();

    const tree = renderer
      .create(<Button label={label} onPress={onPress} outlined />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
