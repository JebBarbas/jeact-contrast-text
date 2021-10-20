import luminance from './luminance';
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
const contrastRatio = (bgColor, fgColor) => {
    // 
    const bgLuminance = luminance(bgColor);
    const fgLuminance = luminance(fgColor);
    const maxL = Math.max(bgLuminance, fgLuminance);
    const minL = Math.min(bgLuminance, fgLuminance);
    const ratio = (maxL + 0.05) / (minL + 0.05);
    return ratio;
};
export default contrastRatio;
//# sourceMappingURL=contrastRatio.js.map