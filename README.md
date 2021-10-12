# Divine Mercy App

### `nativescript-audio-player` and background audio
By default, `nativescript-audio-player` (used for playing the chaplet audio) is unable to play audio in background mode. To resolve this, we set the audio session category to  `AVAudioSessionCategoryPlayback` when initializing the native iOS player.

1. Open `node_modules/nativescript-audio-player/ios/player.js`
2. After line 80, which should contain `var audioSession = AVAudioSession.sharedInstance();`, add a new line: `audioSession.setCategoryWithOptionsError(AVAudioSessionCategoryPlayback, 2);`
3. Add the same line after line 154 (previously 153)

These changes are not tracked, and will need to be re-applied whenever this node module is reinstalled.
### `date-picker` and `time-picker` in iOS UI
The native `date-picker` and `time-picker` UI components can occasionally cause a crash on loading in iOS. To prevent this, we need to edit some files which control these UI elements.

1. Open `node_modules/@nativescript/core/ui/date-picker/date-picker.ios.js`
2. Comment out line 77, which should contain `return SUPPORT_TEXT_COLOR ? this.nativeViewProtected.valueForKey("textColor") : UIColor.new();`
3. Open `node_modules/@nativescript/core/ui/time-picker/time-picker.ios.js`
4. Comment out line 101, which should contain `return SUPPORT_TEXT_COLOR ? this.nativeViewProtected.valueForKey("textColor") : UIColor.new();`

These changes are not tracked, and will need to be re-applied whenever this node module is reinstalled.
