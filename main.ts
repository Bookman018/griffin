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
}
function robotScreen () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
}
function puase () {
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    0,
    0
    )
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    0,
    0
    )
    basic.pause(100)
}
function soundSensor () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.Two) >= 80) {
        hummingbird.setPositionServo(FourPort.Three, 180)
        hummingbird.setPositionServo(FourPort.Four, 180)
        basic.pause(100)
        hummingbird.setPositionServo(FourPort.Three, 0)
        hummingbird.setPositionServo(FourPort.Four, 0)
        music.playMelody("A A A A A A A A ", 160)
    }
}
function distanceSensor () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) <= 5) {
        hummingbird.setRotationServo(FourPort.One, -100)
        hummingbird.setRotationServo(FourPort.Two, -100)
        basic.pause(2500)
        hummingbird.setRotationServo(FourPort.One, 0)
        hummingbird.setRotationServo(FourPort.Two, 0)
    }
}
hummingbird.startHummingbird()
hummingbird.setPositionServo(FourPort.Three, 0)
hummingbird.setPositionServo(FourPort.Four, 0)
Lights()
hummingbird.setRotationServo(FourPort.One, 100)
hummingbird.setRotationServo(FourPort.Two, 100)
basic.pause(5000)
hummingbird.setRotationServo(FourPort.One, 100)
hummingbird.setRotationServo(FourPort.Two, -100)
basic.pause(100)
hummingbird.setRotationServo(FourPort.One, 100)
hummingbird.setRotationServo(FourPort.Two, 100)
basic.pause(2000)
hummingbird.setRotationServo(FourPort.One, 100)
hummingbird.setRotationServo(FourPort.Two, -100)
basic.forever(function () {
    distanceSensor()
    soundSensor()
    puase()
})
loops.everyInterval(100, function () {
    robotScreen()
})
