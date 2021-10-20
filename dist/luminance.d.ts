import type { Color } from './types';
/**
 * Gets the luminance of a color
 * Formula: https://www.w3.org/TR/WCAG20/#relativeluminancedef
 * @param color A string representation of a color
 * @returns A number indicating the luminance of the color
 */
declare const luminance: (color: Color) => number;
export default luminance;
