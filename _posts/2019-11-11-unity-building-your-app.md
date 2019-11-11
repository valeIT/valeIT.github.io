---
layout: post
title: Unity - Building your mobile app (Including Tizen)
date: 2019-11-11 19:49:33.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
author: Valentino Urbano
---

This tutorial is going to show you how to build your app for most mobile platforms.

We're going to build the applications for Android and iOS, but also for other minor platforms that Unity supports. This will not cover submitting the application to the various stores though.

## Before your build

This initial configuration process is common to every platform and it is done insite Unity before exporting the application.

Open the "Player" (bottom left button from the build window) and setup your app name, icons and bundle identifier. For Android and Tizen you also need to setup the minimum api version that your application will support. This version will need to match the one configured in android studio and tizen studio respectively as minimum api/deployment version. You can find it from Settings inside Android Studio and Tizen Studio.

If you're building for release remember to also untick "Development Build" from the build editor in Unity.

## Building for iOS

- Download Xcode from Apple Developer Website if you're a registered developer or from the AppStore if you're not
- Download command line tools from Apple Developer Website or run `xcode-select install` from the Command Line
- Login to your Developer Account (or normal account) in Xcode
- Build the application from inside Unity -> Build. 
- After building, Unity will automatically open Xcode. Sometimes if does not, in these cases you can select the generated .xcodepoj file and open it manually with Xcode.
- From inside Xcode you will need to setup code signing. Since Xcode 8 automatic code signing works decently well so use that if you're not an expert by clicking on your project > Code Signing > Tick automatic > Select the development account. If you do not have one choose personal, this will only allow you to run applications to your personal device and not submit it to the store.
- Connect your device from the top left dropdown and click run.

## Building for Apple TV

The process to build your application for Apple TV you can simply follow the iOS guide, it's 80% the same.

If you get a code signing issue you need to log in to the [developer website](https://developer.apple.com/) and manually [generate a provisioning  profile](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/CreatingYourTeamProvisioningProfile/CreatingYourTeamProvisioningProfile.html) for Apple TV and download it. After the download completes you can double click to add it to your keychain.

I also had to turn off automatic code signing from Xcode and manually select the  provisioning profile that I had just downloaded or it would not work. [This might get fixed  in future Xcode versions or it might already been fixed by the time you read this.]

## Building for Android

- Download the latest version of the jdk from openjdk
- Download android studio from Google and install the android sdk when prompted
- Open Android Studio and go to Preferences
- Install the api support for the versions you want to build to (your test device version and the most recent version are two good candidates if you're unsure)
- Install the "cli tools" for your OS from Android Studio
- Link your jdk and android sdk installation location on disk from inside Unity
- You can now run your application to your device connected via USB from inside Unity

## Building for Tizen

- Download Tizen Studio from Samsung website
- Download the Tizen sdk when prompted
- Link the sdk from inside Unity (inside the "Player" section)
- Open Tizen Studio and create a signing certificate, you will need this to run the application and submit it to the store
- Configure the Tizen cli tools as follows:

I read many tutorials and none of them worked. This is what worked for me on Mac OS:

1. Make sure you have already generated a certificate
2. Open tizen studio and create a new native tizen application
3. Open the terminal and cd to the folder of the project you just made
4. Yype: `/Users/USER/tizen-studio/tools/ide/bin/tizen.sh cli-config --global "default.profiles.path=/Users/USER/workspace/.metadata/.plugins/org.tizen.common.sign/profiles.xml"` changing `/Users/USER/tizen-studio/tools/ide/bin/tizen.sh` to the shell script inside the tizen sdk folder and changing `USER` to point to your user account.

- Go back to unity -> PlayerSettings -> Tizen and fill the field "Signing Profile Name" with  the name of your certificate
- Close and reopen Unity
- Restart your Mac
- Go to `/Users/USER/tizen-studio/tools/certificate-generator/certificates/` and add the certificates without password to keychain access (drag and drop it in), after adding manually right click on them and trust them
- Do one last check and open `/Users/USER/tizen-studio/tools/.tizen-cli-config` and check if the config was set correctly (it happened that it said it was set and it didn't set it)

Note: If you have any third party Android or iOS plugins of any kind (analytics, ads, crash reporting, ...) the build will fail. The only solution I found is to create another project without them and copy all the necessary files (without any plugin) and rebuild. There might be a better solution to it...

All in all, not worth the hassle to support in my opinion, unless you really want the Asian/African market where Tizen has a big marketshare, but it was educational for sure.

## Building for Samsung TV

Note: If you have any third party Android or iOS plugins of any kind (analytics, ads, crash reporting, ...) the build will fail. The only solution I found is to create another project without them and copy all the necessary files (without any plugin) and rebuild. There might be a better solution to it...

After that it just works by following the Android guide.

## Conclusion

You've now built your app for iOS, Android and Tizen. You can now run it on a test device or register a new developer account with Apple, Google and Samsung (if you haven't done already) and submit your app to the various stores.

<!-- 2017-07-09-Unity-Building-your-app -->
