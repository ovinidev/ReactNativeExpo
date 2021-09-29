import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';

import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import Cesta from './src/telas';

import AppLoading from 'expo-app-loading';

import { cesta } from './src/mocks/cestas';

export default function App() {
  const [fontsLoaded] = useFonts({
    "InterBold": Inter_700Bold,
    "InterRegular": Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}

