import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Home from './screen/Home';

//icons
import IconsFA5 from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';

export default function OpaRoutes() {
  const Tab = createBottomTabNavigator();

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
          component={Home} 
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
