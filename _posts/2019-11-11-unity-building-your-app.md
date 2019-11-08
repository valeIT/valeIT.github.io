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

This tutorial is going to show you how to build your app for most mobile platforms. We're going to build the applications for Android and iOS, but also for other minor platforms that Unity supports. This will not cover submitting the application to the store though.

## Before your build

If you're building for release remember to untick "Development Build".

Open the "Player" (bottom left button from the build window) and setup your app name, icons and bundle identifier. For Android and Tizen setup the minimum api version that you support (will need to match the one configured in android studio and tizen studio respectively).

## Building for iOS

- download Xcode
- download command line tools
- login to your developer account in Xcode
- after building with Unity it will open xcode and you will need to setup code signing. Since Xcode 8 automatic signing works decently so use that if you're not an expert.
- Tick automatic code signing and select the development team you want to use

## Building for Apple TV

Just follow the iOS guide, it's 80% the same.

If you get a code signing issue you need to log in to the [developer website](https://developer.apple.com/) and manually [generate a provisioning  profile](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/CreatingYourTeamProvisioningProfile/CreatingYourTeamProvisioningProfile.html) for Apple TV and download it. Double click on it to install it.

I also had to turn off automatic code signing and manually select the provisioning profile to use or it wouldn't work.

## Building for Android

- download the latest version of the jdk
-  download android studio and install the sdk
- install the api support for the versions you want to support from android studio
- install the "tools" for your OS from android studio
- link your jdk and android sdk installation from inside Unity

## Building for Tizen

- download Tizen Studio
- download the sdk
- link the sdk from inside Unity (inside the "Player")
- open Tizen Studio and create a signing certificate
- configure the cli tools as follows:

I read many tutorials and none of them worked. This is what worked for me on Mac OS:

1. Make sure you have already generated a certificate
2. Open tizen studio and create a new native tizen application
3. Open the terminal and cd to the folder of the project you just made
4. Yype: `/Users/valentinourbano/tizen-studio/tools/ide/bin/tizen.sh cli-config --global "default.profiles.path=/Users/valentinourbano/workspace/.metadata/.plugins/org.tizen.common.sign/profiles.xml"` changing `/Users/valentinourbano/tizen-studio/tools/ide/bin/tizen.sh` to the shell script inside the tizen sdk folder and changing `/Users/valentinourbano/workspace/.metadata/.plugins/org.tizen.common.sign/profiles.xml` to point to your user account.

- Go back to unity -> PlayerSettings -> tizen and fill the filed "Signing Profile Name" with  the name of your certificate
- Close and reopen Unity
- Restart Mac
- Go to `/Users/valentinourbano/tizen-studio/tools/certificate-generator/certificates/` and add the certificates without password to keychain access and manually trust them
- Do one last check and open `/Users/valentinourbano/tizen-studio/tools/.tizen-cli-config` and check if the config was set correctly (it happened that it said it was set and it didn't set it)

Note: If you have any Android/iOS plugins the build will fail (at least that's my experience when including Fabric) so what I did is make another project copying everything but the plugins.

All in all, not worth the hassle to support in my opinion, unless you really want the Asian market, but was educational for sure.

## Building for Samsung TV

Note: If you have any Android/iOS plugins the build will fail (at least that's my experience when including Fabric) so what I did is make another project copying everything but the plugins.

After that it just works for me, nothing particular to do. Follow the android guide.

## Conclusion

You've now built your app for iOS, Android and Tizen. You can now register an account with Apple, Google and Samsung and submit your app to the various stores.

<!-- 2017-07-09-Unity-Building-your-app -->