import axios from 'axios';
import {Alert} from 'react-native';

const DogAPI = axios.create({
  baseURL: 'https://dog.ceo/api',
});

DogAPI.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    Alert.alert('Ops!', 'Ocorreu um erro inesperado');
    return Promise.reject(error);
  },
);

export default DogAPI;
