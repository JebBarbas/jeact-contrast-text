import yiqContrast from "./yiqContrast";
const contrastColor = (color) => {
    return yiqContrast(color) >= 128 ? '#000000' : '#ffffff';
};
export default contrastColor;
//# sourceMappingURL=contrastColor.js.map