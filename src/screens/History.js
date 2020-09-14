import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  warning: {
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default function History() {
  return (
    <View style={styles.container}>
      <Header title="Histórico" />

      <Text style={styles.warning}>
        Histórico ainda não desenvolvido :( Mas não desanime, não vamos
        desenvolver!
      </Text>
    </View>
  );
}
