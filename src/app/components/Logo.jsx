import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg'; // Primitivos de SVG
import colors from '../theme/colors';

export default function Logo({ size = 28 }) {       // size padrão: 28px
  const iconSize = size;
  const fontSize = size * 1.15;                       // Texto 15% maior que o ícone

  return (
    <View style={styles.wrapper}>           
      <Svg width={iconSize} height={iconSize} viewBox="0 0 48 48">

        <Path
          d="M24 4 L26 22 L44 24 L26 26 L24 44 L22 26 L4 24 L22 22 Z"
          // M24 4  → Começa no topo | L44 24 → ponta direita | L4 24 → ponta esquerda
          fill={colors.accent}
        />
        <Path
          d="M10 10 L24 22 L38 10 L26 24 L38 38 L24 26 L10 38 L22 24 Z"
          fill={colors.accent}
          opacity={0.85} // Levemente transparente para criar profundidade
        />
      </Svg>

      <Text style={[styles.text, { fontSize }]}>voll</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  text: { color: colors.accent, fontWeight: '600', letterSpacing: 0.5 },
});