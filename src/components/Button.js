import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

export default function Button({flat, label, onPress, outlined}) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          alignItems: 'center',
          borderRadius: 5,
          justifyContent: 'center',
          paddingVertical: 14,
          width: '100%',
          backgroundColor: '#C8AB83',
          ...(outlined
            ? {
                backgroundColor: '#FFFFFF',
                borderColor: '#C8AB83',
                borderWidth: 2,
              }
            : {}),
          ...(flat
            ? {
                backgroundColor: '#FFFFFF',
              }
            : {}),
        },
        label: {
          fontWeight: 'bold',
          color: outlined || flat ? '#C8AB83' : '#FFFFFF',
        },
      }),
    [flat, outlined],
  );

  const underlayColor = useMemo(
    () => (outlined || flat ? '#FFFFFF' : '#CACAAA'),
    [flat, outlined],
  );

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={underlayColor}
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  );
}
