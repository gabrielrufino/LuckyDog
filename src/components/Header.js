import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import GoBackButton from './GoBackButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  horizontalSpace: {
    paddingHorizontal: 5,
  },
  title: {
    color: '#C8AB83',
    fontSize: 25,
  },
});

export default function Header({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GoBackButton onPress={navigation.goBack} />
      <View style={styles.horizontalSpace} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
