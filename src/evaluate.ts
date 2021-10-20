import type { Color, EvaluatedColor } from './types'

const rgb = /^#([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})$/i
const rrggbb = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i

const hex = (hexValue:string):number => parseInt(hexValue, 16)

/**
 * Evaluates if the string is a valid color and returns its red, green and blue values
 * @param color A string representation of a color, like '#abc' or '#a1b2c3'
 * @returns An object with the red, green and blue values of the color or null if the color is not valid
 */
const evaluate = (color:Color):EvaluatedColor => {
    let red:number, green:number, blue:number
    if(rgb.test(color)){
        // as aplies because I checked that passes the test
        const result = rgb.exec(color) as RegExpExecArray

        red = hex(result[1] + result[1])
        green = hex(result[2] + result[2])
        blue = hex(result[3] + result[3])
    }
    else if(rrggbb.test(color)){
        // as aplies because I checked that passes the test
        const result = rrggbb.exec(color) as RegExpExecArray

        red = hex(result[1])
        green = hex(result[2])
        blue = hex(result[3])
    }
    else{
        throw new Error(`The given color: ${color} is not valid`)
    }
    
    return { red, green, blue }
}

export default evaluate