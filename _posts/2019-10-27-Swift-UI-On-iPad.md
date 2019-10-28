---
layout: post
title: Swift UI On iPad
date: 2019-10-27 18:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

SwiftUI support on iPad is even worse than I though.

If you're using a navigation controller you will find that your app on iPad is just a white background. You need to swipe from the left edge of the screen to show the content. Since most apps are using UINavigationController (or the SwiftUI equivalent) your app is most likely affected as well.

So what did you do wrong to get this weird behaviour? Absolutely nothing.

Apple decided that if you use a navigation controller you are surely also using a split view controller so it is showing the detail view of the split view controller even though you might not have it in your app at all. It doesn't make sense since there is UISplitViewController for that and I can decide to either use it or not and if I'm using a UINavigationController instead it is obvious I'm not using the UISplitViewController.

It does not seems that there is a real solution to the problem unfortunately.

There are a few [workarounds][1]:

- Force Landscape Orientation ONLY
  This bug is only present in portrait so if you force the app to only work in Landscape it will work as intended. Forcing your users to rotate the device to use your app is less than ideal to put it mildly.
- Force Navigation Controller Style
  If you are using a UISplitViewController the solution is to change the style to `.navigationViewStyle(StackNavigationViewStyle()).padding()`. This does not disable the split view, but always forces it to show. If you only have a UINavigationController the left side of the screen (50% of the space) will always be blank.

It seems that at the moment there is no way to disable the split view if you're using Swift UI on iPad.

The last solution and the one I went with (which I don't particularly like) is to check if the current device is an iPad and for it use a different view that does not include the navigation bar. This works great for this specific app since it's a single view application and split view would not fit. If your app can use the split view effectively this is Apple way to aggressively tell everyone that they want you to use it.

[1]: https://stackoverflow.com/questions/57888032/swiftui-navigation-on-ipad-how-to-show-master-list#comment102204056_57888032
