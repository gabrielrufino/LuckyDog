import axios from 'axios';

const DogAPI = axios.create({
  baseURL: 'https://dog.ceo/api',
});

export default DogAPI;
