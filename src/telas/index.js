import React from 'react';
import { StyleSheet, View } from 'react-native'

import ImageHeader from './components/ImageHeader';
import Header from './components/Header';


export default function Cesta() {
  return <>
    <ImageHeader /> 
    <View style={styles.cesta}>
      <Header />
    </View>
  </>
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})