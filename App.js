import React, {useState, useEffect} from 'react';
import Routes from './routes/home.tabs';
import {AsyncStorage, Alert} from 'react-native';

import { ProfileContext } from './context/ProfileContext'

import messaging from '@react-native-firebase/messaging';

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('profile').then(result => {
      setUser(result)
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const { notification } = remoteMessage;
      Alert.alert(notification.title, notification.body);
    });

    return unsubscribe;
  }, [])

  return (
    <ProfileContext.Provider value={{user, changeProfile: setUser}}>
      <Routes />
    </ProfileContext.Provider>
  )
};

export default App;
