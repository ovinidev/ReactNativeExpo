import React from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function ButtonGreen({ children }) {
  const touch = () => {
    alert("Oi");
  }

  return (
    <TouchableOpacity style={styles.button} onPress={touch}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
  button: {
    marginTop: 14,
    padding: 10,
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