import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import DogAPI from '../services/DogAPI';

export default function Searcher() {
  const [breeds, setBreeds] = useState([]);
  const [loadingBreeds, setLoadingBreeds] = useState(true);

  useEffect(() => {
    DogAPI.get('/breeds/list/all')
      .then(({data: {message}}) => {
        setBreeds(Object.keys(message));
      })
      .finally(() => {
        setLoadingBreeds(false);
      });
  }, []);

  return (
    <View>
      <Text>Searcher</Text>
    </View>
  );
}
