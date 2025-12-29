# react-native-blur-line

A lightweight gradient blur line built with `react-native-linear-gradient`.

## Installation

First, ensure you have `react-native-linear-gradient` installed in your project.

```bash
yarn add react-native-linear-gradient
yarn add react-native-blur-line

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