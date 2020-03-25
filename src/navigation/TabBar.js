import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MedicationStack from './MedicationStack';
import HomeIcon from '../icons/tabBar/HomeIcon';
import MedicationIcon from '../icons/tabBar/MedicationIcon';
import CalendarIcon from '../icons/tabBar/CalendarIcon';

import { palette } from '../core/styleguide';
import DashboardStack from './DashboardStack';
import CalendarStack from './CalendarStack';

const Tab = createBottomTabNavigator();

const TabBar = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: palette.darkgray,
    }}
  >
    <Tab.Screen
      name="Home"
      component={DashboardStack}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color }) => (
          <HomeIcon color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Medication"
      component={MedicationStack}
      options={{
        tabBarLabel: 'Medication',
        tabBarIcon: ({ color }) => (
          <MedicationIcon color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={CalendarStack}
      options={{
        tabBarLabel: 'Calendar',
        tabBarIcon: ({ color }) => (
          <CalendarIcon color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabBar;
