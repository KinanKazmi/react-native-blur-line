import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const getAlphaColor = (baseColor: string, opacity: number) => {
  return baseColor.replace(/[\d.]+\)$/g, `${opacity})`);
};

export type BlurLineProps = {
  bottom?: boolean;
  rgbaColor?: string;
  style?: StyleProp<ViewStyle>;
};

const BlurLine = ({ bottom, rgbaColor, style }: BlurLineProps) => {
  const baseColor = rgbaColor || 'rgba(255, 255, 255, 1)';
  const colors = [
    getAlphaColor(baseColor, 1),
    getAlphaColor(baseColor, 0.5),
    getAlphaColor(baseColor, 0.1),
  ];

  return (
    <View style={styles.line}>
      <LinearGradient
        style={[styles.flexOne, bottom ? styles.bottom : styles.top, style]}
        colors={colors}
        start={bottom ? { x: 0, y: 1 } : { x: 0, y: 0 }}
        end={bottom ? { x: 0, y: 0 } : { x: 0, y: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
  line: {
    width: '100%',
    height: 10,
    zIndex: 1,
  },
  top: { top: 10 },
  bottom: { bottom: 10 },
});

export default BlurLine;
