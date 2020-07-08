import React from 'react';

import {StatusBar} from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
`;

const Jocker = (props) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Title>
          Página de: {props.page} 
        </Title>
      </Container>
    </>
  );
};

export default Jocker;
