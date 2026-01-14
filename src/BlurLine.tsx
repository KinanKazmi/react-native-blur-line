import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import hexToRgba from "hex-to-rgba";

const isRgbOrRgba = (color: string) =>
  /^rgba?\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}(\s*,\s*(0|1|0?\.\d+))?\s*\)$/.test(
    color
  );

const isHex = (color: string) =>
  /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(color);

const getAlphaColor = (color: string, opacity: number) => {
  if (typeof color !== "string") {
    return `rgba(0,0,0,${opacity})`;
  }
  const value = color.trim();

  if (value.startsWith("rgba") && isRgbOrRgba(value)) {
    return value.replace(/[\d.]+\)$/g, `${opacity})`);
  }
  if (value.startsWith("rgb(") && isRgbOrRgba(value)) {
    return value.replace("rgb(", "rgba(").replace(")", `, ${opacity})`);
  }
  if (isHex(value)) {
    try {
      return hexToRgba(value, opacity);
    } catch {
      return `rgba(0,0,0,${opacity})`;
    }
  }
  return `rgba(0,0,0,${opacity})`;
};

export type BlurLineProps = {
  bottom?: boolean;
  horizontal?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

const BlurLine = ({ horizontal, bottom, color, style }: BlurLineProps) => {
  const baseColor = color ?? "#FFFFFF";

  const colors = [
    getAlphaColor(baseColor, 1),
    getAlphaColor(baseColor, 0.5),
    getAlphaColor(baseColor, 0.1),
  ];
  const start = horizontal
    ? bottom
      ? { x: 1, y: 0 }
      : { x: 0, y: 0 }
    : bottom
    ? { x: 0, y: 1 }
    : { x: 0, y: 0 };

  const end = horizontal
    ? bottom
      ? { x: 0, y: 0 }
      : { x: 1, y: 0 }
    : bottom
    ? { x: 0, y: 0 }
    : { x: 0, y: 1 };

  return (
    <View
      style={[styles.line, horizontal ? styles.horizontal : styles.vertical]}
    >
      <LinearGradient
        style={[
          styles.flexOne,
          horizontal
            ? bottom
              ? styles.right
              : styles.left
            : bottom
            ? styles.bottom
            : styles.top,
          style,
        ]}
        colors={colors}
        start={start}
        end={end}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
  line: {
    zIndex: 1,
  },
  vertical: {
    width: "100%",
    height: 10,
  },
  horizontal: {
    width: 10,
    height: "100%",
  },
  top: { top: 10 },
  bottom: { bottom: 10 },
  left: { left: 10 },
  right: { right: 10 },
});

export default BlurLine;
