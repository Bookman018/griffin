def on_sound_loud():
    music.play_melody("C5 C5 C5 C5 - - - - ", 150)
input.on_sound(DetectedSound.LOUD, on_sound_loud)



hummingbird.start_hummingbird()

def on_forever():
    pass
basic.forever(on_forever)
