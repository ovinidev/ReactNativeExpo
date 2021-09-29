import React from 'react';
import { StyleSheet, View } from 'react-native'

import ImageHeader from './components/ImageHeader';
import Details from './components/Details';

export default function Cesta({ topo, texts }) {
  return <>
    <ImageHeader {...topo} />
    <View style={styles.cesta}>
      <Details {...texts} />
    </View>
  </>
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})