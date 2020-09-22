import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import DogImage from '../../src/components/DogImage';

describe('components/DogImage.js', () => {
  it('Should render the DogImage correctly', () => {
    const source = {
      uri: 'https://images.dog.ceo//breeds//terrier-toy//n02087046_4455.jpg',
    };

    const tree = renderer.create(<DogImage source={source} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
