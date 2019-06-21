---
layout: post
title: WWDC 2019 - Initial Thoughts On Swift UI
date: 2019-06-09 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---
## Swift UI

_I still didn't get the chance to play with SwiftUI so everything that follows is only based on what's available in the WWDC Keynote and Sessions._

With the introduction of SwiftUI Apple basically implicitly deprecated a lot of its stack:

- **Objective-C**
  The writing was on the wall since Swift was announced back in 2014. Since then Apple has released multiple frameworks, Swift, only, but if you didn't want to switch you could still make new apps in Objective-C without any problems. With the adoption of Swift UI that's inevitably going to come you will be unable to use Objective-C since it is not supported. This is not going to happen tomorrow, for once SwiftUI requires iOS 13 so it will be at least a year (probably a few) since it will become mainstream.
- **UIKit**
  In the beginning, I thought (as many other developers) that SwiftUI was a wrapper on top of existing UIKit views, but that's not the case. They are all Swift views. That's one of the biggest changes we've had since the introduction of iOS.
- **Autolayout**
  With SwiftUI you create your views using code and components. You don't use autolayout at all, you don't need it. That alone eliminates a lot of the headeaches we all have from time to time with unsidisfiable contraints. Everything adapts to the screen by default without the need of manually managing constraints.
- **Catalyst** (Marzipan)
  Apple just introduced Catalyst in the same keynote, but I feel that with SwiftUI adoption around the corner it doesn't make any sense to use Catalyst on new apps. Its only use would be converting existing iPad apps to the Mac.

I've used a similar paradigm with [Flutter][1] and creating user interfaces with it is a breeze. Can't wait to install macOS Catalina and try it.

[1]: https://learningflutter.net