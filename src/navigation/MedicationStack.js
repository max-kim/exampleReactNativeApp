import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screens from './index';
import Medication from '../containers/Medication/Medication';
import MedicationDetails from '../presentations/Medication/MedicationDetails/MedicationDetails';

const Stack = createStackNavigator();

const MedicationStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen
      name={screens.medicationMain}
      component={Medication}
      options={{ title: 'Medication' }}
    />
    <Stack.Screen
      name={screens.medicationDetails}
      component={MedicationDetails}
      options={{ title: 'Medication details' }}
    />
  </Stack.Navigator>
);

export default MedicationStack;
