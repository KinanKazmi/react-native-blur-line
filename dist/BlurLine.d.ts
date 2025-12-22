import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type BlurLineProps = {
    bottom?: boolean;
    rgbaColor?: string;
    style?: StyleProp<ViewStyle>;
};
declare const BlurLine: ({ bottom, rgbaColor, style }: BlurLineProps) => React.JSX.Element;
export default BlurLine;
