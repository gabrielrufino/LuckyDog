import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

export default function FavoriteButton({isFavorite, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon
        name="star"
        size={30}
        regular={!isFavorite}
        solid={isFavorite}
        color="#EEC584"
      />
    </TouchableWithoutFeedback>
  );
}
