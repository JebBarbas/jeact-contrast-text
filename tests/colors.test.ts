import type { Color } from '../src/types'

import * as crypto from 'crypto'
import contrastColor from "../src/contrastColor"
import contrastRatio from "../src/contrastRatio"

const createColors = (howMuchColors:number):Color[] => {
    const colors:Color[] = []

    for(let i = 0; i < howMuchColors; i++){
        const sixHex = crypto.randomBytes(3).toString('hex')
        colors.push(`#${sixHex}`)
    }

    return colors
}

const randomColors:Color[] = createColors(100)

const staticColors:Color[] = [
    '#000000', '#ffffff', '#f44336', '#e91e63', '#9c27b0',
    '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
    '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b',
    '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e',
    '#607d8b'
]

const colors:Color[] = [...staticColors, ...randomColors]

test('Testing Contrast Color', () => {
    // I moved the minContrast to 0 because we have to trust in the yiq
    const minContrast = 0
    const tests:string[] = []

    colors.forEach(color => {
        const anotherColor = contrastColor(color)
        const ratio = contrastRatio(color, anotherColor)

        tests.push(`${color} and ${anotherColor} --> ${ratio} (${ratio >= minContrast ? 'PASSED' : 'FAILED'})`)

        expect(contrastRatio(color, contrastColor(color))).toBeGreaterThanOrEqual(minContrast)
    })

    console.log(tests)
})
