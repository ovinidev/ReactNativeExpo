import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native'

import logo from '../../assets/logo.png'
import TextFonts from '../components/TextFonts';

export default function CestaHeader() {
  return <>
    <View style={styles.cesta}>
      <TextFonts style={styles.nome}>Cesta de verduras</TextFonts>
      <View style={styles.containerLogo}>
        <Image source={logo} style={styles.logo} />
        <TextFonts style={styles.nomeFazenda}>Jenny Jack Farm</TextFonts>
      </View>
      <TextFonts style={styles.descricao}>
        Uma cesta com produtos selecionados
        cuidadosamente da fazenda direto para sua cozinha
      </TextFonts>
      <TextFonts style={styles.preco}>R$ 40,00</TextFonts>
    </View>
  </>
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
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