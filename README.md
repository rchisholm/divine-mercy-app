# Divine Mercy App

### `nativescript-audio` and background audio
By default, `nativescript-audio` (used for playing the chaplet audio) tells iOS that the sound is "ambient" (i.e. unimportant). This causes the audio to stop when the app is put into the background. To resolve this issue, we either need to fork `nativescript-audio` or apply the following change manually after every update of that dependency.

1. Open `node_modules/nativescript-audio/ios/player.js`
2. Replace all occurrences of `AVAudioSessionCategoryAmbient` with `AVAudioSessionCategoryPlayAndRecord`.
