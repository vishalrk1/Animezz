import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {BottomNavTab, StackNavigation} from './Navigation/Navigation';
import {store} from './redux/store';

const AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    yelloColor: '#FFC107',
    card: '#121212',
    onSurfaceVariant: 'rgb(74, 69, 78)',
  },
  dark: true,
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        {/* <BottomNavTab /> */}
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
