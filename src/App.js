import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from './Navigator';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#C8AB83" />

      <Navigator />
    </>
  );
}
