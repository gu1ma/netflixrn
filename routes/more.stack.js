import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import More from '../screen/More';
import ProfileToEdit from '../screen/ProfileToEdit';
import ChooseIcon from '../screen/ChooseIcon';

const Stack = createStackNavigator();

export default function MoreRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" 
        component={More} 
        screenOptions={{
          headerShown: false
        }} 
      />
      <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
      <Stack.Screen name="ChooseIcon" component={ChooseIcon} />
    </Stack.Navigator>
  )
}