basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.clearScreen()
    }
})
