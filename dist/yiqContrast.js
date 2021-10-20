import evaluate from './evaluate';
var yiqContrast = function (color) {
    var _a = evaluate(color), red = _a.red, green = _a.green, blue = _a.blue;
    var yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    return yiq;
};
export default yiqContrast;
//# sourceMappingURL=yiqContrast.js.map