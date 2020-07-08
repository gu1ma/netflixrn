import React, {useState, useEffect} from 'react';
import Routes from './routes/home.tabs';
import {AsyncStorage} from 'react-native';

import { ProfileContext } from './context/ProfileContext'

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('profile').then(result => {
      setUser(result)
    });
  }, [])

  useEffect(() => {
    console.log('user', user)
  }, [user])

  return (
    <ProfileContext.Provider value={{user, changeProfile: setUser}}>
      <Routes />
    </ProfileContext.Provider>
  )
};

export default App;
