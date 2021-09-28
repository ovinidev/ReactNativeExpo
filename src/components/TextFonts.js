import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TextFonts({ children, style }) {
  const [fontAtual, setFontAtual] = useState(styles.textDefault);

  useEffect(() => {
    if (style?.fontWeight === "bold") {
      setFontAtual(styles.textBold);
    };
  }, []);

  return <Text style={[style, fontAtual]}>{children}</Text>
}

const styles = StyleSheet.create({
  textDefault: {
    fontFamily: 'InterRegular',
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: 'InterBold',
  }
})