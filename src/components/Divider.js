import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Divider({direction = 'horizontal'}) {
  const styles = StyleSheet.create({
    container: {
      borderColor: '#CACAAA',
      borderBottomWidth: direction === 'horizontal' ? 1 : 0,
      borderRightWidth: direction === 'vertical' ? 1 : 0,
    },
  });

  return <View style={styles.container} />;
}
