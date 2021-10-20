import type { Color, EvaluatedColor } from './types';
/**
 * Evaluates if the string is a valid color and returns its red, green and blue values
 * @param color A string representation of a color, like '#abc' or '#a1b2c3'
 * @returns An object with the red, green and blue values of the color or null if the color is not valid
 */
declare const evaluate: (color: Color) => EvaluatedColor;
export default evaluate;
