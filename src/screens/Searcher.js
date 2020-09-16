import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Button from '../components/Button';
import Divider from '../components/Divider';
import DogAPI from '../services/DogAPI';
import Logo from '../assets/images/logo-500px.png';
import Select from '../components/Select';
import useBreeds from '../hooks/useBreeds';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 20,
  },
  spacer: {
    paddingVertical: 5,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default function Searcher({navigation}) {
  const [selectedBreed, setSelectedBreed] = useState('');
  const {breeds} = useBreeds();

  const onRiffle = useCallback(
    function () {
      DogAPI.get(
        `/breed/${selectedBreed.toLocaleLowerCase()}/images/random`,
      ).then(function ({data: {message}}) {
        navigation.navigate('Dog', {image: message});
      });
    },
    [navigation, selectedBreed],
  );

  const onImFeelingLucky = useCallback(
    function () {
      setSelectedBreed('');

      DogAPI.get('/breeds/image/random').then(function ({data: {message}}) {
        navigation.navigate('Dog', {image: message});
      });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.spacer} />
        <Select
          options={breeds}
          onSelect={setSelectedBreed}
          selected={selectedBreed}
        />
        <View style={styles.spacer} />
        <Button label="Sortear" onPress={onRiffle} />
        <Button flat label="Estou com sorte" onPress={onImFeelingLucky} />
      </View>

      <Divider />

      <Button
        flat
        label="Favoritos"
        onPress={() => navigation.navigate('Favorites')}
      />
      <Button
        flat
        label="Histórico"
        onPress={() => navigation.navigate('History')}
      />
    </View>
  );
}
