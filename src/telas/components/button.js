import React, { useContext } from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ListViewContext } from '../../context/ListViewContext';

export default function ButtonGreen({ children }) {

  const { toggleList } = useContext(ListViewContext);

  return (
    <TouchableOpacity style={styles.button} onPress={toggleList}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
  button: {
    marginTop: 14,
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    backgroundColor: "#2A9F85"
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
})