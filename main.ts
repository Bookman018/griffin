input.onButtonPressed(Button.A, function () {
    hummingbird.setPositionServo(FourPort.Three, 180)
    hummingbird.setPositionServo(FourPort.Four, 180)
    basic.pause(100)
    hummingbird.setPositionServo(FourPort.Three, 0)
    hummingbird.setPositionServo(FourPort.Four, 0)
})
function Lights () {
    hummingbird.setTriLED(
    TwoPort.One,
    200,
    191,
    128
    )
    hummingbird.setTriLED(
    TwoPort.Two,
    200,
    191,
    128
    )
    hummingbird.setLED(ThreePort.One, 100)
}
input.onButtonPressed(Button.B, function () {
	
})
function soundSensor () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.Two) > 99) {
        hummingbird.setPositionServo(FourPort.Three, 180)
        hummingbird.setPositionServo(FourPort.Four, 180)
        basic.pause(100)
        hummingbird.setPositionServo(FourPort.Three, 0)
        hummingbird.setPositionServo(FourPort.Four, 0)
    }
}
function distanceSensor () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 0) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 300)
    }
}
hummingbird.setPositionServo(FourPort.Three, 0)
hummingbird.setPositionServo(FourPort.Four, 0)
hummingbird.startHummingbird()
Lights()
basic.forever(function () {
    soundSensor()
    distanceSensor()
})
