import type { Color } from './types'
import evaluate from './evaluate'

/**
 * Gets the luminance of a color
 * Formula: https://www.w3.org/TR/WCAG20/#relativeluminancedef
 * @param color A string representation of a color
 * @returns A number indicating the luminance of the color
 */
const luminance = (color:Color):number => {
    const evaluated = evaluate(color)
    const rgb = Object.values(evaluated) as number[]
        
    const calculated = rgb.map(value => {
        // Formula: https://www.w3.org/TR/WCAG20/#relativeluminancedef
        value /= 255
        value = value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
        return value
    })

    const luminance = 0.2126 * calculated[0] + 0.7152 * calculated[1] + 0.0722 * calculated[2]
    return luminance
}

export default luminance