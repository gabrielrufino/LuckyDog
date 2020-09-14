import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CACAAA',
    borderColor: '#C8AB83',
    borderRadius: 4,
    borderWidth: 4,
    flex: 1,
  },
  image: {
    borderRadius: 4,
    height: '100%',
  },
});

export default function DogImage({source}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
    </View>
  );
}
