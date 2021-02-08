import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainStack from './src/navigation';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <MainStack />
    </Provider>
  </NavigationContainer>
);

export default App;
