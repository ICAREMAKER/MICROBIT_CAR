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
        images.arrowImage(ArrowNames.West).showImage(0)
    }
    if (input.buttonIsPressed(Button.B)) {
        images.arrowImage(ArrowNames.East).showImage(0)
    }
    if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
