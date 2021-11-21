import yiqContrast from "./yiqContrast";
/**
 * Returns the best contrast color between black or white to the color
 * @param color The color
 * @returns Another color:)
 */
var yiqColor = function (color) {
    return yiqContrast(color) >= 128 ? '#000000' : '#ffffff';
};
export default yiqColor;
