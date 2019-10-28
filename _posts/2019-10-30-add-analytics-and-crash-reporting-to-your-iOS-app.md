---
layout: post
title: Add Analytics And Crash Reporting to your iOS app
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

## Firebase (Crashlytics)

Add to Podfile:

```
pod 'Firebase/Core'
pod 'Fabric'
pod 'Crashlytics'
```

Configure it in the AppDelegate.swift:

```
import Firebase
```

Inside didFinishLaunchingWithOptions;

```
FirebaseApp.configure()
```

Open the target's Build Phases tab and add a new Run Script Phase:

```
"${PODS_ROOT}/Fabric/run"
```

Turn on run only when installing so dsyms are not uploaded each time you build.

Add the following to Input Files:

```
$(SRCROOT)/$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)
```

## Flurry

Add to Podfile:

```
pod 'Flurry-iOS-SDK/FlurrySDK'
pod 'Flurry-iOS-SDK/FlurryConfig'
```

Configure it in the AppDelegate.swift and add your API_KEY:

```
import Flurry_iOS_SDK
```

Inside didFinishLaunchingWithOptions;

```

let sessionBuilder = FlurrySessionBuilder()
           .withLogLevel(FlurryLogLevelAll)
           .withCrashReporting(true)
      .withAppVersion("1.0")
           .withIAPReportingEnabled(true)
       Flurry.startSession(API_KEY, with: sessionBuilder)
```

Open the target's Build Phases tab and add a new Run Script Phase:

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

Add to Podfile:

```
pod 'Sentry'
```

Configure it in the AppDelegate.swift by changing the ADD_URL to your Sentry dns url:

```
import Sentry
```
Inside didFinishLaunchingWithOptions;

```

do {
    Client.shared = try Client(dsn: ADD_URL)
    try Client.shared?.startCrashHandler()
} catch let error {
    print("\(error)")
}
```

Open the target's Build Phases tab and add a new Run Script Phase changing ORG_NAME, PROJ_NAME and YOUR_AUTH_TOKEN:

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

Turn on run only when installing so dsyms are not uploaded each time you build.

Add the following to Input Files:

```
${DWARF_DSYM_FOLDER_PATH}/${DWARF_DSYM_FILE_NAME}/Contents/Resources/DWARF/${TARGET_NAME}
```
