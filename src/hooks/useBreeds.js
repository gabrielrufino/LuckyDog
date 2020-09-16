import {useState, useEffect} from 'react';

import DogAPI from '../services/DogAPI';

export default function useBreeds() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    DogAPI.get('/breeds/list/all')
      .then(function ({data: {message}}) {
        const processedBreeds = Object.keys(message).map(function (breed) {
          return breed
            .split(' ')
            .map(([first, ...rest]) =>
              [first.toLocaleUpperCase(), ...rest].join(''),
            )
            .join(' ');
        });

        setBreeds(processedBreeds);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  return {
    breeds,
    loading,
  };
}
