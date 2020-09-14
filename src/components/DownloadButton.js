import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function DownloadButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="download" size={30} color="#CACAAA" />
    </TouchableOpacity>
  );
}
