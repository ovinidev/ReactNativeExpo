import React from 'react';
import TextFonts from '../../components/TextFonts';
import { Image, StyleSheet, View } from 'react-native'

export default function Itens({ item: { nome, imagem } }) {

  return <View style={styles.container}>
    <Image source={imagem} style={styles.image} />
    <TextFonts style={styles.text}>{nome}</TextFonts>
  </View>
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    marginHorizontal: 16,

  },
  text: {
    fontSize: 16,
    color: "#464664",
  },
  image: {
    height: 45,
    width: 45,
    marginRight: 10,
    borderRadius: 15,
  }
})