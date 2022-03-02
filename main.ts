input.onButtonPressed(Button.A, function () {
    hummingbird.setRotationServo(FourPort.One, 100)
    hummingbird.setRotationServo(FourPort.Two, -100)
    basic.pause(1000)
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
})
function Lights () {
    hummingbird.setTriLED(
    TwoPort.One,
    212,
    175,
    55
    )
    hummingbird.setTriLED(
    TwoPort.Two,
    212,
    175,
    55
    )
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
}
input.onButtonPressed(Button.B, function () {
    hummingbird.setRotationServo(FourPort.One, -100)
    hummingbird.setRotationServo(FourPort.Two, 100)
    basic.pause(1000)
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
})
function soundSensor () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.Two) > 99) {
        hummingbird.setPositionServo(FourPort.Three, 180)
        hummingbird.setPositionServo(FourPort.Four, 180)
        basic.pause(100)
        hummingbird.setPositionServo(FourPort.Three, 0)
        hummingbird.setPositionServo(FourPort.Four, 0)
        music.playMelody("A A A A A A A A ", 160)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    hummingbird.setRotationServo(FourPort.One, 100)
    hummingbird.setRotationServo(FourPort.Two, 100)
    basic.pause(1000)
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
})
function distanceSensor () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 1) {
        hummingbird.setRotationServo(FourPort.One, -100)
        hummingbird.setRotationServo(FourPort.Two, -100)
        hummingbird.setLED(ThreePort.One, 100)
    }
}
hummingbird.setLED(ThreePort.One, 0)
hummingbird.setPositionServo(FourPort.Three, 0)
hummingbird.setPositionServo(FourPort.Four, 0)
hummingbird.startHummingbird()
Lights()
basic.forever(function () {
    soundSensor()
    distanceSensor()
})
