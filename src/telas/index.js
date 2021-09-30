import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'

import ImageHeader from './components/ImageHeader';
import Details from './components/Details';
import Itens from './components/Itens';
import TextFonts from '../components/TextFonts';
import { ListViewContext } from '../context/ListViewContext';

function fake() {
  return <View></View>
}

export default function Cesta({ topo, texts, itens }) {

  const {clicado} = useContext(ListViewContext);

  const showItens = clicado ? Itens : fake;

  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={showItens}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return <>
            <ImageHeader {...topo} />
            <View style={styles.cesta}>
              <Details {...texts} />
              <TextFonts style={styles.title}>{itens.titulo}</TextFonts>
            </View>
          </>
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    color: "#464664",
  },
})