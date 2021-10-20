import type { Color } from './types'
import evaluate from './evaluate'

const yiqContrast = (color:Color):number => {
    const {red, green, blue} = evaluate(color)
    const yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000
    return yiq
}

export default yiqContrast