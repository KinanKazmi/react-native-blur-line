# react-native-blur-line

A lightweight, customizable gradient blur line for React Native. Perfect for creating soft fade-out effects at the top or bottom of `ScrollView`, `FlatList`, or `SectionList` components.

---

## 🛠 Installation

This package requires `react-native-linear-gradient` as a peer dependency.

### 1. Install Peer Dependency
You **must** follow the **[Official Installation Guide](https://www.npmjs.com/package/react-native-linear-gradient)** for `react-native-linear-gradient` first. Since it contains native code, ensure you run `pod install` for iOS after installing it.

### 2. Install this library
```bash
# Using yarn
yarn add react-native-blur-line

# Using npm
npm install react-native-blur-line

## Usage

```bash

  <BlurLine />
  <FlatList
    ...
  />
  <BlurLine bottom />

  ...

  <BlurLine rgbaColor={Colors.primary} />
    <ScrollView>
      ...
    </ScrollView>
  <BlurLine bottom rgbaColor={'rgba(0, 0, 0, 1)'} />
```