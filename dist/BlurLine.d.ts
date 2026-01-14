import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export type BlurLineProps = {
    bottom?: boolean;
    horizontal?: boolean;
    color?: string;
    style?: StyleProp<ViewStyle>;
};
declare const BlurLine: ({ horizontal, bottom, color, style }: BlurLineProps) => React.JSX.Element;
export default BlurLine;
