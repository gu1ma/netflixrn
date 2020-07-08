import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Home from './screen/Home';
import More from './screen/More';
import ProfileToEdit from './screen/ProfileToEdit';
import Camera from './screen/Camera';

//icons
import IconsFA5 from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function OpaRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          activeBackgroundColor: '#000',
          inactiveBackgroundColor: '#000',
        }}  
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'Home',
            color: '#fff',
            tabBarIcon: () => (
              <>
                <IconsFA5 name="home" size={20} color="#fff" />
              </>
            ),
          }}    
        />
        <Tab.Screen 
          name="Busca" 
          component={Home} 
          options={{
            title: 'Busca',
            color: '#fff',
            tabBarIcon: () => (
              <>
                <IconsFA5 name="search" size={20} color="#fff" />
              </>
            ),
          }} 
        />
        <Tab.Screen 
          name="Em breve" 
          component={Home} 
          options={{
            title: 'Em breve',
            color: '#fff',
            tabBarIcon: () => (
              <>
                <IconsFA5 name="folder-open" size={20} color="#fff" />
              </>
            ),
          }}
        />
        <Tab.Screen 
          name="Downloads" 
          component={Home} 
          options={{
            title: 'Downloads',
            color: '#fff',
            tabBarIcon: () => (
              <>
                <IconsFeather name="download" size={24} color="#fff" />
              </>
            ),
          }}
        />
        <Tab.Screen 
          name="Mais" 
          component={() => (
            <>
              <Stack.Navigator>
                <Stack.Screen name="More" component={More} />
                <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
                <Stack.Screen name="Camera" component={Camera} />
              </Stack.Navigator>
            </>
          )} 
          options={{
            title: 'Mais',
            color: '#fff',
            tabBarIcon: () => (
              <>
                <IconsFeather name="menu" size={24} color="#fff" />
              </>
            ),
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
