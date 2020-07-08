import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Avatar from '../components/Avatar';
import {View, Text, Image} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`;

export const ContainerCamera = styled(RNCamera)`
  flex: 1;
  flex-direction: column;
`;

export const ButtonCaptureContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin: 5px;
`;

export const ButtonCapture = styled.TouchableOpacity`
  background: black;
  padding: 10px;
  border-radius: 5px;
`;

export const PreviewImage = styled.Image`
  width: 100%;
  height: 350px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const Camera = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Camera',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: '#ffffff',
      },
      headerTintColor: 'white',
    });
  }, []);

  const [pictureData, setPictureData] = useState(undefined);

  async function takePicture(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    setPictureData(data);
  }

  return (
    pictureData !== undefined ? 
    <Container>
      <PreviewImage source={{uri: pictureData.uri}} />
      <ButtonsContainer>
        <ButtonCapture onPress={() => setPictureData(undefined)}>
          <Text style={{ fontSize: 14, color: 'white' }}> TIRAR NOVA FOTO </Text>
        </ButtonCapture>
        <ButtonCapture 
          onPress={() => {
            props.navigation.navigate('More', {
              icon: null,
              name: props?.route?.params?.name,
              image: pictureData.uri,
            });
          }}
        >
          <Text style={{ fontSize: 14, color: 'white' }}> ACEITAR </Text>
        </ButtonCapture>
      </ButtonsContainer>
    </Container>
      :
    <Container>
      <ContainerCamera
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <View><Text>Carregando</Text></View>;
            return (
              <ButtonCaptureContainer>
                <ButtonCapture onPress={() => takePicture(camera)}>
                  <Text style={{ fontSize: 14, color: 'white' }}> CAPTURAR </Text>
                </ButtonCapture>
              </ButtonCaptureContainer>
            );
          }}
        </ContainerCamera>
    </Container>
    
  );
};

export default Camera;
