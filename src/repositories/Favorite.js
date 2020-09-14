import AsyncStorage from '@react-native-community/async-storage';

import Repository from './Repository';

class Favorite extends Repository {
  constructor() {
    super();

    this._initRepository();
  }

  async getAll() {
    try {
      const item = await AsyncStorage.getItem('@favorites');

      return JSON.parse(item);
    } catch (error) {
      throw error;
    }
  }

  async getByUri(uri) {
    try {
      const favorites = await this.getAll();

      return favorites.find((favorite) => favorite.uri === uri);
    } catch (error) {
      throw error;
    }
  }

  async insertOne({uri}) {
    try {
      const favorites = await this.getAll();

      favorites.unshift({
        uri,
      });

      await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
    } catch (error) {
      throw error;
    }
  }

  async removeByUri(uri) {
    try {
      const favorites = await this.getAll();

      const filteredFavorites = favorites.filter(
        (favorite) => favorite.uri !== uri,
      );

      await AsyncStorage.setItem(
        '@favorites',
        JSON.stringify(filteredFavorites),
      );
    } catch (error) {
      throw error;
    }
  }

  async _initRepository() {
    try {
      const item = await AsyncStorage.getItem('@favorites');

      if (!item) {
        const favorites = [];

        await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new Favorite();
