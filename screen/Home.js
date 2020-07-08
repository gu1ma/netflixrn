import React, {useState, useEffect} from 'react';

import {StatusBar, Dimensions} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import { ProfileContext } from '../context/ProfileContext';

const api = [
  require('../assets/movies/movie1.jpg'),
  require('../assets/movies/movie2.jpg'),
  require('../assets/movies/movie3.jpg'),
  require('../assets/movies/movie4.jpg'),
];

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = () => {
  function getMoviesToResume(user) {
    const moviesJson = require('../assets/moviesToResume.json')
    console.log('user list', moviesJson[user])
    return moviesJson[user]
  }
  
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      
        <Container showsVerticalScrollIndicator={false}>
          <Poster source={require('../assets/poster.jpg')}>
            <Gradient
              locations={[0, 0.2, 0.6, 0.93]}
              colors={[
                'rgba(0,0,0,0.5)',
                'rgba(0,0,0,0.0)',
                'rgba(0,0,0,0.0)',
                'rgba(0,0,0,1)',
              ]}>
              <Header />
              <Hero />
            </Gradient>
          </Poster>
          <ProfileContext.Consumer>
            {({user}) => user && <Movies label={`continuar assistindo como: ${user}`} item={getMoviesToResume(user)} /> }
            </ProfileContext.Consumer>
          <Movies label="Recomendados" item={api} />
          <Movies label="Top 10" item={api} />
        </Container>
    </>
  );
};

export default Home;
