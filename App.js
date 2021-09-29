import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';

import {useFonts, Inter_700Bold, Inter_400Regular} from '@expo-google-fonts/inter';
import Cesta from './src/telas';

export default function App() {
  const [fontsLoaded] = useFonts({
    "InterBold": Inter_700Bold,
    "InterRegular": Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <View></View>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

