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
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.setAngle(30)
        images.arrowImage(ArrowNames.South).showImage(0)
    }
    if (input.buttonIsPressed(Button.B)) {
        servos.P0.setAngle(90)
        images.arrowImage(ArrowNames.North).showImage(0)
    }
    if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        servos.P0.setAngle(45)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
