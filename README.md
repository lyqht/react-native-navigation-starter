# Set up Instructions

## E2E Testing with Detox

### Android
Go to the bash profile and export the variables for Android SDK globally to the bash terminal.

```bash
vim ~/.bash_profile
export ANDROID_HOME=/Users/{{your user}}/Library/Android/sdk
export ANDROID_SDK_ROOT=/Users/{{your user}}/Library/Android/sdk
export ANDROID_AVD_HOME=/Users/{{your user}}/.android/avd
```

> To exit the vim editor, type `:wq` and press `Enter`

To refresh the terminal after the changes are made,

```bash
source ~/.bash_profile
```

In package.json, the configuration for Android is as such:
> Make sure to change the name variable below to a AVD (Android Virtual Device) that you have.

```json
"android.emu.debug": {
	"binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
	"build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
	"type": "android.emulator",
	"name": "Pixel_2_API_28" // change the name accordingly
},
"android.emu.release": {
	"binaryPath": "android/app/build/outputs/apk/release/app-release.apk",
	"build": "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..",
	"type": "android.emulator",
	"name": "Pixel_2_API_28" // change the name accordingly
}
```

## API Reference
[Detox](https://github.com/wix/Detox/blob/master/docs/APIRef.ActionsOnElement.md)
[React-Native-Navigation v2](https://wix.github.io/react-native-navigation/#/api/README)
