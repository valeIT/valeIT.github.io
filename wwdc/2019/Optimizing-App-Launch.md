---
layout: page
title: Optimizing App Launch
---
# Optimizing App Launch

{% include_relative BeforeEachFile.md %}

Cold Launch
- After reboot
- Not launched for a while

Warm Launch
- Recently Terminated
- App partially in memory

Resume
- App already in memory

Launch animation - 400ms

100ms for iOS to launch the app
300ms animation to setup the first screen

The screen doesn't need to be complete, can have placeholders.

- DYLD3
Don't link unused frameworks
Hard link dependencies
- libSystem
- runtime
Invokes static load methods. Avoid it, if you really need use initialize and not load
- UIKit
System initializes UIApplication - UIApplicationDelegate - event processing
Avoid work if you subclass UIApplication and in UIApplicationDelegate initializer
- UIApplication
Lifecycle callbacks:
willFinishLaunching
didFinishLaunching
applicationDidBecomeActive

With UIScene
scene:willConnectToSession:option//initialize vc here and not in willFinishLaunching anymore
sceneWillEnterForeground
sceneDidBecomeActive

defeer not necessary work.

First frame:
loadView
viewDidLoad
layoutSubview
Flatten views and lazily load views not shown during launch
Reduce number of autolayout constraints

Extended phase:
UI should be interactive
Use os_signpost to debug

To test:
Consistent result by having a clean environment.
- Reboot device and let it rest for 3 min
- Enabled Airplane Mode or mock network
- Logout of iCloud
- Measure in Release Mode
- Measure with warm launches (more consistent)

Test with new and old devices
Test with small and large amount of data in the app

Use XCTest to launch and test it repeatedly

- Minimize Work
Only work related to showing the first frame
Move blocking work off the main thread
Reduce memory usage
- Prooritize Work
Use right QOS
Use scheduler
- Optimizing Work
Limit existing work to only what you need during launch and use lazy vars
Optimize data structure and algorithms
Don't do work twice

New App Launch template in Instruments

Blue->Working
Red->Waiting
Orange->Stopped due to higher priority task
Gray->Waiting(nothing to do)

Rest of the talk is a great demo on how to debug problems using Instruments.


Use XCTest

measure(metrics:[XCTOSSignpostMetric.applicationLaunch]){
  XCUIApplication(bundleIdentifier:"com.example.apple.StarSearcher").launch()
}//by default 5 launches


Track your Launch Over Time

- Easy to introduce regressions and small regressions stack up
- Plot it over time and have a target
- Xcode Organizer includes performance metrics including launch time
- Use MetricKit for custom metrics. Aggregated results delivered evbery 24hrs.

Measure, don't estimate performance.


Source
[Optimizing App Launch](https://developer.apple.com/wwdc19/423)