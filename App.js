import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';

import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import Cesta from './src/telas';

import AppLoading from 'expo-app-loading';

import { cesta } from './src/mocks/cestas';
import ListViewProvider from './src/context/ListViewContext';



export default function App() {
  const [fontsLoaded] = useFonts({
    "InterBold": Inter_700Bold,
    "InterRegular": Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ListViewProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Cesta {...cesta} />
      </SafeAreaView>
    </ListViewProvider>

  );
}

