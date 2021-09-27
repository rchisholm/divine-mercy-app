# Divine Mercy App

### `nativescript-audio-player` and background audio
By default, `nativescript-audio-player` (used for playing the chaplet audio) is unable to play audio in background mode. To resolve this, we set the audio session category to  `AVAudioSessionCategoryPlayback` when initializing the native iOS player.

1. Open `node_modules/nativescript-audio-player/ios/player.js`
2. After line 80, which should contain `var audioSession = AVAudioSession.sharedInstance();`, add a new line: `audioSession.setCategoryWithOptionsError(AVAudioSessionCategoryPlayback, 2);`
3. Add the same line after line 154 (previously 153)
