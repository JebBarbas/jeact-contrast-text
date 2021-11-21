import type { Color } from './types'
import yiqColor from "./yiqColor";

const contrastColor = (color:Color):Color => {
    return yiqColor(color)   
}

export default contrastColor