"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
const hex_to_rgba_1 = __importDefault(require("hex-to-rgba"));
const isRgbOrRgba = (color) => /^rgba?\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}(\s*,\s*(0|1|0?\.\d+))?\s*\)$/.test(color);
const isHex = (color) => /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(color);
const getAlphaColor = (color, opacity) => {
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
            return (0, hex_to_rgba_1.default)(value, opacity);
        }
        catch (_a) {
            return `rgba(0,0,0,${opacity})`;
        }
    }
    return `rgba(0,0,0,${opacity})`;
};
const BlurLine = ({ horizontal, bottom, color, style }) => {
    const baseColor = color !== null && color !== void 0 ? color : "#FFFFFF";
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
    return (<react_native_1.View style={[styles.line, horizontal ? styles.horizontal : styles.vertical]}>
      <react_native_linear_gradient_1.default style={[
            styles.flexOne,
            horizontal
                ? bottom
                    ? styles.right
                    : styles.left
                : bottom
                    ? styles.bottom
                    : styles.top,
            style,
        ]} colors={colors} start={start} end={end}/>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
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
exports.default = BlurLine;
