import type { Color } from '../src/types'

import contrastColor from "../src/contrastColor"
import contrastRatio from "../src/contrastRatio"

const colors:Color[] = [
    "#000000", "#000080", "#0000ff",
    "#008000", "#008080", "#0080ff",
    "#00ff00", "#00ff80", "#00ffff",
    "#800000", "#800080", "#8000ff",
    "#808000", "#808080", "#8080ff",
    "#80ff00", "#80ff80", "#80ffff",
    "#ff0000", "#ff0080", "#ff00ff",
    "#ff8000", "#ff8080", "#ff80ff",
    "#ffff00", "#ffff80", "#ffffff"
]

test('Testing Contrast Color', () => {
    colors.forEach(color => {
        expect(contrastRatio(color, contrastColor(color))).toBeGreaterThanOrEqual(3)
    })
})
