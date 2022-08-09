import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import {Register} from './src/screens/Register';
import { Loading } from './src/components/Loading';
import React from 'react';


export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsloaded ? <Register/> : <Loading/> }
    </NativeBaseProvider>
  );
}

