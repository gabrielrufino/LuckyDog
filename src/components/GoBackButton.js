import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';

export default function GoBackButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon size={25} name="arrow-left" color="#C8AB83" />
    </TouchableOpacity>
  );
}
