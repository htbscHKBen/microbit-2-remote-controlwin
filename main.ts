input.onButtonPressed(Button.A, function () {
    doToggle()
})
function doToggle () {
    if (toggle) {
        toggle = false
        radio.sendString("PAUSE")
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    } else {
        radio.sendString("PLAY")
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        toggle = true
    }
}
input.onButtonPressed(Button.B, function () {
    doToggle()
})
let toggle = false
radio.setGroup(55)
toggle = true
