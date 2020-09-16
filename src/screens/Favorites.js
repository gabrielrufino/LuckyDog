import React, {useCallback, useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '../components/Button';
import DogImage from '../components/DogImage';
import FavoriteRepository from '../repositories/Favorite';
import Header from '../components/Header';
import useBreeds from '../hooks/useBreeds';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  scrollView: {
    marginTop: 10,
    justifyContent: 'center',
  },
  dogImageContainer: {
    height: '95%',
    paddingHorizontal: 10,
    width: 320,
  },
  emptyWarning: {
    textAlign: 'center',
  },
});

export default function Favorites({navigation}) {
  const [favorites, setFavorites] = useState([]);
  const {breeds} = useBreeds();

  useEffect(
    function () {
      console.log(breeds);
    },
    [breeds],
  );

  useEffect(function () {
    FavoriteRepository.getAll().then(function (data) {
      setFavorites(data);
    });
  }, []);

  const onExpand = useCallback(
    function (favorite) {
      navigation.navigate('Dog', {image: favorite.uri});
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Header title="Favoritos" />

      {!favorites.length && (
        <Text style={styles.emptyWarning}>
          Você ainda não tem dogs favoritos
        </Text>
      )}

      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        {favorites.map((favorite) => (
          <TouchableOpacity
            key={favorite.uri}
            style={styles.dogImageContainer}
            onPress={() => onExpand(favorite)}>
            <DogImage source={{uri: favorite.uri}} />
            <Button label="Expandir" flat onPress={() => onExpand(favorite)} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
