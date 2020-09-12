import React, {useCallback} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    backgroundColor: '#CACAAA',
    borderRadius: 4,
    flex: 1,
  },
  image: {
    borderRadius: 4,
    height: '100%',
  },
});

export default function Searcher({route, navigation}) {
  const onRiffleAnotherDog = useCallback(
    function () {
      navigation.navigate('Searcher');
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: route.params.image}} style={styles.image} />
      </View>
      <Button
        flat
        label="Sortear outro cachorro"
        onPress={onRiffleAnotherDog}
      />
    </View>
  );
}
