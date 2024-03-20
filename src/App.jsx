/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {BottomNavTab} from './Navigation/Navigation';
import {store} from './redux/store';

const AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    yelloColor: '#FFC107',
    card: '#121212',
  },
  dark: true,
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        <BottomNavTab />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
