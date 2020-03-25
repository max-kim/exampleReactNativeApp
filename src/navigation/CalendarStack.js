import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screens from './index';
import Calendar from '../containers/Calendar/Calendar';

const Stack = createStackNavigator();

function CalendarStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name={screens.calendar} component={Calendar} />
    </Stack.Navigator>
  );
}

export default CalendarStack;
