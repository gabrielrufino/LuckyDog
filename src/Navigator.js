import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dog from './screens/Dog';
import History from './screens/History';
import Searcher from './screens/Searcher';
import Favorites from './screens/Favorites';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Searcher" headerMode="none">
        <Stack.Screen name="Searcher" component={Searcher} />
        <Stack.Screen name="Dog" component={Dog} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
