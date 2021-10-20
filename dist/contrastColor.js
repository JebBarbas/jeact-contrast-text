import yiqContrast from "./yiqContrast";
var contrastColor = function (color) {
    return yiqContrast(color) >= 128 ? '#000000' : '#ffffff';
};
export default contrastColor;
//# sourceMappingURL=contrastColor.js.map