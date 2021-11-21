# @jeact/contrast-color

<p align="center">
    <img alt="Jeact Logo" src="https://i.ibb.co/ZxDGYLc/jeact-logo-long.png" height="100"/>
</p>

![NPM](https://img.shields.io/npm/l/@jeact/contrast-color?color=blue&logo=npm&style=flat-square)
![Travis (.com)](https://img.shields.io/travis/com/jebbarbas/jeact-contrast-text?logo=travis&style=flat-square)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@jeact/contrast-color?logo=librariesdotio&style=flat-square)
![npm](https://img.shields.io/npm/dt/@jeact/contrast-color?color=red&logo=npm&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@jeact/contrast-color?color=red&logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/v/@jeact/contrast-color?color=red&logo=npm&style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/jebbarbas/jeact-contrast-text?logo=github&style=social)

Simple function to get the contrast color for a text over some color.

## Instalation

```
npm i @jeact/contrast-color
```

## How to use

Import the function from the module and then use it providing a valid color, the function will return either
"#ffffff" for dark colors and "#000000" for bright colors, this represents a good color for the text that makes a 
good contrast.

```js
import contrastColor from '@jeact/contrast-color'

const backgroundColor = "#dd0000"
const textColor = contrastColor(backgroundColor)
```
