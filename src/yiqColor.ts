import type { Color } from './types'
import yiqContrast from "./yiqContrast";

/**
 * Returns the best contrast color between black or white to the color
 * @param color The color
 * @returns Another color:)
 */
const yiqColor = (color:Color):Color => {
    return yiqContrast(color) >= 128 ? '#000000' : '#ffffff'
}

export default yiqColor