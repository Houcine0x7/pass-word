input.onButtonPressed(Button.A, function () {
    userinput = "" + userinput + "A"
})
input.onButtonPressed(Button.B, function () {
    userinput = "" + userinput + "B"
})
let userinput = ""
userinput = ""
let password = "ABAB"
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    if (userinput == password) {
        pins.servoWritePin(AnalogPin.P0, 90)
    } else if (userinput != password) {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
