import type { Color } from './types';
/**
 * Calculates the contrast ratio between 2 colors
 * Formula (Ratio): https://www.w3.org/TR/WCAG20/#contrast-ratiodef
 * Contrast Conditions: https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast (normal)
 * Contrast Conditions: https://www.w3.org/TR/WCAG20/#visual-audio-contrast7 (bold)
 * @param bgColor A string representation of a color
 * @param fgColor A string representation of a color
 * @param echo Set to true if you are testing, otherwise, only set to true when yo want lo log the results
 * @returns The contrast ratio between 2 colors
 */
declare const contrastRatio: (bgColor: Color, fgColor: Color) => number;
export default contrastRatio;
