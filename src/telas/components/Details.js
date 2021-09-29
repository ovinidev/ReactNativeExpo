import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import ButtonGreen from './button';

import TextFonts from '../../components/TextFonts';

export default function Details({ nome, logo, titulo, descricao, preco, botao }) {

  return <>
    <TextFonts style={styles.nome}>{titulo}</TextFonts>
    <View style={styles.containerLogo}>
      <Image source={logo} style={styles.logo} />
      <TextFonts style={styles.nomeFazenda}>{nome}</TextFonts>
    </View>
    <TextFonts style={styles.descricao}>
      {descricao}
    </TextFonts>
    <TextFonts style={styles.preco}>{preco}</TextFonts>
    <ButtonGreen>{botao}</ButtonGreen>
  </>
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
  },
  descricao: {
    color: "#a5a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  }
})
