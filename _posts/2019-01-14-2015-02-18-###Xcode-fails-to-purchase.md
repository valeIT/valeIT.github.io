---
layout: post
title: How To Fix Xcode Fails To Purchase Error From The Mac App Store
date: 2019-01-14 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

_This is not a tutorial, it's more of a note so I'm going to remember how to do something the next time I stumble again on the problem._

Disclaimer: I'm not responsible if any of the following methods is going to delete any of your files. You **really** should make a backup before attempting it. Mostly your Xcode preferences should be kept, but it is not a guarantee.

# Best solution

[This method only works if you have a paid developer account.]

- Go to [apple download page][0]
- Click on more at the bottom
- Download the latest version of Xcode
- Make sure to delete the MacAppStore version of Xcode before updating it.

If you really want to use the MacAppStore, first ask yourself why. After that try these methods:

# Method 1

[This method didn't work for more, but worked for others]

- Turn on debug mode for Appstore. Open the Terminal and write <code>defaults write com.apple.appstore ShowDebugMenu -bool true</code>
- Relaunch Appstore
- From the Menu select: Debug → Reset Application.

# Method 2

[This method worked for me without deleting any preferences or add-ons]

- Delete code
- Quit the MacAppStore
- Restart your Mac
- Re-download Xcode ex-novo from the MacAppStore

[0]: https://developer.apple.com/xcode/download/
