import React, {useState, useEffect} from 'react';

import {StatusBar, Dimensions, PermissionsAndroid} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import { ProfileContext } from '../context/ProfileContext';

import { getLocation, filtrateForeignMovies, filtrateNationalMovies } from '../services/filterMovies';

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
  const [nationalMovies, setNationalMovies] = useState([])
  const [foreignMovies, setForeignMovies] = useState([])

  const movies = require('../assets/Movies.json')

  function getMoviesToResume(user) {
    const moviesJson = require('../assets/moviesToResume.json')
    return moviesJson[user]
  }

  useEffect(() => {
    
    async function getNationalMovies() {
      try {
        const geolocation = await getLocation()
        const nationalMovies = await filtrateNationalMovies(movies, geolocation)

        setNationalMovies(nationalMovies)
      } catch(e) {
        //console.log('e', e.message)
      }
    }

    async function getForeignMovies() {
      try {
        const geolocation = await getLocation()
        const foreignMovies = await filtrateForeignMovies(movies, geolocation)
        
        setForeignMovies(foreignMovies)
      } catch (e) {
        //console.log('e', e.message)
      }
    }

    getNationalMovies()
    getForeignMovies()
  }, [])
  
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
            {({user}) => user && <Movies label={`Continuar assistindo como: ${user}`} item={getMoviesToResume(user)} /> }
          </ProfileContext.Consumer>
          <Movies label="Recomendados" item={foreignMovies} />
          <Movies label="Nacionais" item={nationalMovies} />
        </Container>
    </>
  );
};

export default Home;
