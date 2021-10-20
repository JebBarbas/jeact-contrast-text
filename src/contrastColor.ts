import type { Color } from './types'
import yiqContrast from "./yiqContrast";

const contrastColor = (color:Color):Color => {
    return yiqContrast(color) >= 128 ? '#000000' : '#ffffff'
}

export default contrastColor