import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screens from './index';
import Dashboard from '../containers/Dashboard/Dashboard';


const Stack = createStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name={screens.dashboard} component={Dashboard} />
  </Stack.Navigator>
);

export default DashboardStack;
