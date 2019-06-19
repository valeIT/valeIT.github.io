---
layout: post
title: WWDC 2019 - Developer Videos
date: 2019-06-06 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

<!-- # WWDC 2019 -->

This year's WWDC was probably the biggest in term of changes for Developers since the unveil of Swift thanks to SwiftUI. It is the future of iOS (iPadOS) and Mac development and even relegates Catalyst (Marzipan) to the background.[^1]

Other big changes for developers (apart from the new cheesegrater) are multiple window support for the iPad, dark mode for iOS and stand alone watch apps.

## Videos to Watch

I usually only watch a few videos from WWDC due to time constraints, but this year I took a few days to watch most videos.

- [Keynote](https://developer.apple.com/wwdc19/101)
  The main keynote
- [State of the Union](https://developer.apple.com/wwdc19/103)
  As for every year a more developer centric deep dive presentation
- [What's New in Swift](https://developer.apple.com/wwdc19/402)
  What's new in both Swift 5.1 and Swift 5
- [Creating Independent Watch Apps](https://developer.apple.com/wwdc19/208)
  How to create watch applications that don't require a companion iOS application (and how to install apps on the watch)
- [Introducting Multiple Windows on iPad](https://developer.apple.com/wwdc19/212)
  AppDelegate is now responsible for the App Lifecycle, but doesn't own a window anymore since we are going to have multiple ones.
- [Implementing Dark Mode on iOS](https://developer.apple.com/wwdc19/214)
  Best practises on how to implement dark modes on your existing iOS applications and what the system already does for yu behind the scenes.
- [Adopting Swift Packages in Xcode](https://developer.apple.com/wwdc19/408)
  A first party solution to manage dependencies.
- [Debugging in Xcode 11](https://developer.apple.com/wwdc19/412)
How to debug your SwiftUI apps in the preview, without running the application.
- [Advances in Networking, Part 1](https://developer.apple.com/wwdc19/712)
  How to use Combine with network requests and more new APIs in URLSessions/URLRequest including support for WebSockets.

## Other Videos to Watch

These videos are not a must watch, but if you still have some time left you should.

- [Modern Swift API Design](https://developer.apple.com/wwdc19/415)
  Value and references. Generics, protocols and property wrappers.
- [Optimizing App Launch](https://developer.apple.com/wwdc19/423)
  How to get your app to launch under 500ms. Take a look especially at the demo.
- [Great Developer Habits](https://developer.apple.com/wwdc19/239)
  General habits for a better developer experience.

## SwiftUI

- [**Introducing SwiftUI: Building Your First App**](https://developer.apple.com/wwdc19/204)
  If you only watched one video (apart from the keynote itself) it should be this one. They build a complete app using swiftUI on stage
- [SwiftUI Essentials](https://developer.apple.com/wwdc19/216)
  A more in depth dive into SwiftUI including animations, if statements, bindings and cross platform support.
- [SwiftUI on watchOS](https://developer.apple.com/wwdc19/219)
  Build interfaces on watchOS using SwiftUI including interacting with the digital crown and interactive notifications.
- [Data Flow Through SwiftUI](https://developer.apple.com/wwdc19/226)
  When ti use @state @Bindings and @BindableObjects to  bind your model to the UI.
- [Integrating SwiftUI](https://developer.apple.com/wwdc19/231)
  Expose UIKit to SwiftUI and viceversa, or use SwiftUI from Objective-C.
- [SwiftUI On All Devices](https://developer.apple.com/wwdc19/240)
  Use SwiftUI to build adapt your application to the platform you're developing for.
- [Building Custom Views with SwiftUI](https://developer.apple.com/wwdc19/237)
  Build a gauge or graph using SwiftUI with performance in mind.
- [Mastering Xcode Previews](https://developer.apple.com/wwdc19/233)
  Using Previews to their full potential, even from UIKit or Objective-C code.

## Combine

- [Combine In Practise](https://developer.apple.com/wwdc19/721)
 How to use SwiftUI with Combine.

The list is complete for the videos now available. A few videos are still "coming soon" though.

[^1]: And thinking that we were sure Catalyst would be the star of the show...
