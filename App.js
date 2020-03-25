import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import TabBar from './src/navigation/TabBar';
import store from './src/core/flux/configureStore';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  </Provider>
);

export default App;
