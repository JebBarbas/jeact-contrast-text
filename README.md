# @jeact/contrast-color
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