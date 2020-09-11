import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#C8AB83',
    borderRadius: 5,
    justifyContent: 'center',
    paddingVertical: 14,
    width: '100%',
  },
  label: {
    color: '#FFFFFF',
  },
});

export default function Button({label, onPress}) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#CACAAA"
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  );
}
