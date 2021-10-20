var rgb = /^#([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})$/i;
var rrggbb = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
var hex = function (hexValue) { return parseInt(hexValue, 16); };
/**
 * Evaluates if the string is a valid color and returns its red, green and blue values
 * @param color A string representation of a color, like '#abc' or '#a1b2c3'
 * @returns An object with the red, green and blue values of the color or null if the color is not valid
 */
var evaluate = function (color) {
    var red, green, blue;
    if (rgb.test(color)) {
        // as aplies because I checked that passes the test
        var result = rgb.exec(color);
        red = hex(result[1] + result[1]);
        green = hex(result[2] + result[2]);
        blue = hex(result[3] + result[3]);
    }
    else if (rrggbb.test(color)) {
        // as aplies because I checked that passes the test
        var result = rrggbb.exec(color);
        red = hex(result[1]);
        green = hex(result[2]);
        blue = hex(result[3]);
    }
    else {
        throw new Error("The given color: " + color + " is not valid");
    }
    return { red: red, green: green, blue: blue };
};
export default evaluate;
//# sourceMappingURL=evaluate.js.map