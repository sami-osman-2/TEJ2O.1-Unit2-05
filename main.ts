/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sami Osman
 * Created on: Sep 2025
 * This program gets the current tempurature in Celcius, and converts to Kelvin.
*/

// variable for temperature
let tempC: number
let tempK: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // get temperature in Celsius
    tempC = input.temperature()

    // convert to Kelvin
    tempK = tempC + 273.15
    tempK = Math.round(tempK)

    // output answer
    basic.clearScreen()
    basic.showString(tempK + " K")
})
