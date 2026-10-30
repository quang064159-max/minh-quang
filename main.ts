basic.showIcon(IconNames.Heart)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.TShirt)
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
basic.pause(500)
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Butterfly)
music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
basic.showNumber(0)
music.play(music.stringPlayable("G B A G C5 B A B ", 170), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
