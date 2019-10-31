---
layout: post
title: Add Analytics And Crash Reporting to your iOS and Android apps
date: 2019-10-30 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [General]
image:
image2:
author: Valentino Urbano
---

Fabric is shutting down on March 31, 2020.
It will be merging into Google's Firebase, so most people will be switching to that.

But with every shutdown and every change there is the chance to take a look at all the available alternatives and either confirm the choice that has been made or take the time to switch to something better.

It is going to take some time to migrate to Firebase, it is obviously going to take longer to switch to a different provided entirely, but it might still be worth for some of you or for some apps.

What follows is a list of what I consider the best alternatives available at the moment.
The list is valid for both iOS and Android, but the installation guide is only for iOS. It requires you to be familiar with iOS Development and Cocoapods.

## Firebase (Crashlytics)

The first and obvious choice is to move to Firebase. You will need to register your app to Firebase, download the Google plist (or json file for Android applications) configuration file, include the Firebase mobile framework in your app and initialize it. Let's go through it.

Add the framework to your `Podfile`:

```
pod 'Firebase/Core'
pod 'Fabric'
pod 'Crashlytics'
```

Import it from `AppDelegate.swift`:

```
import Firebase
```

Initialize it inside the function `didFinishLaunchingWithOptions`;

```
FirebaseApp.configure()
```

Open the target's (your main app) Build Phases tab and add a new `Run Script Phase`:

```
"${PODS_ROOT}/Fabric/run"
```

Enable `Run script only when installing` so that dsym files are not uploaded each time you build, but only once.

Finally add the following entry to Input Files to allow the script to access the `Info.plist` file:

```
$(SRCROOT)/$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)
```

## Flurry

Add the framework to your `Podfile`:

```
pod 'Flurry-iOS-SDK/FlurrySDK'
pod 'Flurry-iOS-SDK/FlurryConfig'
```

Import it from `AppDelegate.swift` and add your API_KEY:

```
import Flurry_iOS_SDK
```

Initialize it inside the function `didFinishLaunchingWithOptions`;

```

let sessionBuilder = FlurrySessionBuilder()
           .withLogLevel(FlurryLogLevelAll)
           .withCrashReporting(true)
      .withAppVersion("1.0")
           .withIAPReportingEnabled(true)
       Flurry.startSession(API_KEY, with: sessionBuilder)
```

Open the target's (your main app) Build Phases tab and add a new `Run Script Phase`:

```
./upload-symbols.py -c flurry.config
```

Create a new file called `flurry.config` in the folder of your project and add:

```
[flurry]
token=TOKEN
api-key=API_KEY
```

## Sentry

Add the framework to your `Podfile`:

```
pod 'Sentry'
```

Import it from `AppDelegate.swift`:

```
import Sentry
```

Initialize it inside the function `didFinishLaunchingWithOptions` and change the `ADD_URL` to your Sentry URL:

```

do {
    Client.shared = try Client(dsn: ADD_URL)
    try Client.shared?.startCrashHandler()
} catch let error {
    print("\(error)")
}
```

Open the target's (your main app) Build Phases tab and add a new `Run Script Phase` changing `ORG_NAME`, `PROJ_NAME` and `YOUR_AUTH_TOKEN`:

```
if which sentry-cli >/dev/null; then
export SENTRY_ORG=ORG_NAME
export SENTRY_PROJECT=PROJ_NAME
export SENTRY_AUTH_TOKEN=YOUR_AUTH_TOKEN
ERROR=$(sentry-cli upload-dif "$DWARF_DSYM_FOLDER_PATH" 2>&1 >/dev/null)
if [ ! $? -eq 0 ]; then
echo "warning: sentry-cli - $ERROR"
fi
else
echo "warning: sentry-cli not installed, download from https://github.com/getsentry/sentry-cli/releases"
fi
```

Enable `Run script only when installing` so that dsym files are not uploaded each time you build, but only once.

Finally add the following entry to Input Files to allow the script to access the `dsym` file:

```
${DWARF_DSYM_FOLDER_PATH}/${DWARF_DSYM_FILE_NAME}/Contents/Resources/DWARF/${TARGET_NAME}
```

## Conclusion

We have a lot of options to choose from depending on our needs and preferences. Some solutions offering just crash reporting and logging and others offering more.
