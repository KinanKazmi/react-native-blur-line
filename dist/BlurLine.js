"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
const getAlphaColor = (baseColor, opacity) => {
    return baseColor.replace(/[\d.]+\)$/g, `${opacity})`);
};
const BlurLine = ({ bottom, rgbaColor, style }) => {
    const baseColor = rgbaColor || 'rgba(255, 255, 255, 1)';
    const colors = [
        getAlphaColor(baseColor, 1),
        getAlphaColor(baseColor, 0.5),
        getAlphaColor(baseColor, 0.1),
    ];
    return (<react_native_1.View style={styles.line}>
      <react_native_linear_gradient_1.default style={[styles.flexOne, bottom ? styles.bottom : styles.top, style]} colors={colors} start={bottom ? { x: 0, y: 1 } : { x: 0, y: 0 }} end={bottom ? { x: 0, y: 0 } : { x: 0, y: 1 }}/>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    flexOne: { flex: 1 },
    line: {
        width: '100%',
        height: 10,
        zIndex: 1,
    },
    top: { top: 10 },
    bottom: { bottom: 10 },
});
exports.default = BlurLine;
