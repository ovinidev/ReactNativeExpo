import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native'

import top from '../../../assets/topo.png'
import TextFonts from '../../components/TextFonts';

const width = Dimensions.get('screen').width;

export default function ImageHeader({ titulo }) {
  return <>
    <Image source={top} style={styles.image} />
    <TextFonts style={styles.titulo}>{titulo}</TextFonts>
  </>
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 574 / 768 * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 26,
    color: "white",
    padding: 16,
    fontWeight: "bold",
  },
})