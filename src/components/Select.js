import React from 'react';
import {Picker} from '@react-native-community/picker';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#CACAAA',
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
  },
});

export default function Select({selected, options, onSelect}) {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={selected}
        onValueChange={onSelect}>
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
}
