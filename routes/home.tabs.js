import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Home from '../screen/Home';
import Jocker from '../screen/Jocker';

//nested routes
import MoreRoutes from './more.stack';

//icons
import IconsFA5 from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
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
          component={() => <Home />} 
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
          component={() => <Jocker page="Busca" />} 
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
          component={() => <Jocker page="Em breve" />}  
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
          component={() => <Jocker page="Downloads" />} 
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
              <MoreRoutes />
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
