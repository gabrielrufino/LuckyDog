import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Select from '../../src/components/Select';

describe('components/Select.js', () => {
  it('Should renders the select correctly', () => {
    const selected = 'Option 1';
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const onSelect = jest.fn();

    const tree = renderer
      .create(
        <Select selected={selected} options={options} onSelect={onSelect} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
