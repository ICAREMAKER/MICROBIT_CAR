input.onLogoEvent(TouchButtonEvent.Released, function () {
    if (Verrou == 1) {
        Verrou = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Verrou == 0) {
        Mode = 1
        Verrou = 1
    }
})
let Verrou = 0
let Mode = 0
let Correctif_Servo1 = -10
Mode = 0
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # # . . .
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (Mode == 0) {
        basic.showLeds(`
            . . # # .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
        if (input.buttonIsPressed(Button.A)) {
            servos.P0.setAngle(0)
            images.arrowImage(ArrowNames.South).showImage(0)
        }
        if (input.buttonIsPressed(Button.B)) {
            servos.P0.setAngle(75)
            images.arrowImage(ArrowNames.North).showImage(0)
        }
        if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            servos.P0.setAngle(35)
        }
        if (Math.abs(Mode) == 1) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
            servos.P1.run(10)
            servos.P2.run(Correctif_Servo1 + -10)
            basic.pause(2000)
            servos.P1.stop()
            servos.P2.stop()
        }
    }
})
