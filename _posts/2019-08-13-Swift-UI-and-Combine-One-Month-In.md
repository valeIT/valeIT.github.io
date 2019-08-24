---
layout: post
title: Swift UI and Combine - One Month In
date: 2019-08-13 22:28:05.000000000 +01:00
type: post
published: true
status: published
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# Swift UI and Combine - One Month In

The two best things about swift UI are live previews and Declarative layout.
This year at WWDC Apple introduced Swift UI and Combine, two new ways that go hand in hand to develop applications for all of their platforms.

I've already written about them at the unveil, but now I had some time to digest them. I'm confident to confirm what I've already said at the beginning of June. Even though most developers can't afford to use them right away since dev shops usually support at least -1 version (sometimes even -2 or -3) of the OS and both Apple UI and Combine are exclusives for iOS 13+, they are the future of iOS and mac development and they will eventually replace AppKit and UIKit in most apps (just my speculation at this point).
It might be overwhelming at first for someone used to the traditional Apple way of MVC and imperative programming to switch to reactive and declarative. It still is for me. All is still very new and overwhelming. The secret is that you don't have to tackle it all at once.
You can first start with SwiftUI only and use imperative programming with it. Once you feel confortable you can start trying Combine out to close the circle.
---
After trying them a lot more I have to say that they're still pretty unstable. Mostly there are a lot of features that are not available yet for both SwiftUI and Combine so I would advise everyone not to use it in production from day one to save yourself from a lot of headache, wait until they stabilize a bit more.
It is still worth to try them out on a test project to see how it works and learn a new way to do things. Meanwhile you can use RxSwift if you want to use something in production right now. It is a big third party dependency to add to your project, but as with Combine, you don't necessarely need to port your whole application to it, in fact you should not.

Reactive is good for certain parts of the application where you need the reactivity, it should not be used everywhere blindly just because it's the shiny new thing. It can be used everywhere and some people are doing well with it, but it is not its place in my opinion (free to disagree). If in doubt on where to start, add RxSwift to a seachBar.