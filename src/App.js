import 'react-native-gesture-handler';

import React, {StrictMode, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';

import Navigator from './Navigator';

export default function App() {
  useEffect(function () {
    SplashScreen.hide();
  }, []);

  return (
    <StrictMode>
      <StatusBar backgroundColor="#C8AB83" />

      <Navigator />
    </StrictMode>
  );
}
