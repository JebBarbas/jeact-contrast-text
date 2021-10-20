import evaluate from './evaluate';
/**
 * Gets the luminance of a color
 * Formula: https://www.w3.org/TR/WCAG20/#relativeluminancedef
 * @param color A string representation of a color
 * @returns A number indicating the luminance of the color
 */
var luminance = function (color) {
    var evaluated = evaluate(color);
    var rgb = Object.values(evaluated);
    var calculated = rgb.map(function (value) {
        // Formula: https://www.w3.org/TR/WCAG20/#relativeluminancedef
        value /= 255;
        value = value <= 0.03928 ? value / 12.92 : Math.pow(((value + 0.055) / 1.055), 2.4);
        return value;
    });
    var luminance = 0.2126 * calculated[0] + 0.7152 * calculated[1] + 0.0722 * calculated[2];
    return luminance;
};
export default luminance;
//# sourceMappingURL=luminance.js.map