import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import DogImage from '../components/DogImage';
import DownloadButton from '../components/DownloadButton';
import FavoriteRepository from '../repositories/Favorite';
import FavoriteButton from '../components/FavoriteButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    backgroundColor: '#CACAAA',
    borderRadius: 4,
    flex: 1,
  },
  image: {
    borderRadius: 4,
    height: '100%',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  action: {
    marginRight: 10,
  },
});

export default function Dog({route, navigation}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(
    function () {
      FavoriteRepository.getByUri(route.params.image).then(function (favorite) {
        if (favorite) {
          setIsFavorite(true);
        }
      });
    },
    [route.params.image],
  );

  const onFavorite = useCallback(
    function () {
      if (!isFavorite) {
        FavoriteRepository.insertOne({
          uri: route.params.image,
        }).then(function () {
          setIsFavorite(true);
        });
      } else {
        FavoriteRepository.removeByUri(route.params.image).then(function () {
          setIsFavorite(false);
        });
      }
    },
    [isFavorite, route.params.image],
  );

  const onDownload = useCallback(function () {}, []);

  return (
    <View style={styles.container}>
      <DogImage source={{uri: route.params.image}} />
      <View style={styles.actions}>
        <View style={styles.action}>
          <FavoriteButton isFavorite={isFavorite} onPress={onFavorite} />
        </View>
        <View style={styles.action}>
          <DownloadButton onPress={onDownload} />
        </View>
      </View>
    </View>
  );
}
