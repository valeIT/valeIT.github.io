---
layout: post
title: Getting Your Apps Ready For iOS 13
date: 2019-08-31 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---
# iOS 13 Preparations

The last few years updating apps to the newest OS was a relatively quick process. There were addition, but not really huge ones and most updates were just your typical 'summer cleaning' and dealing with deprecations, new functionality to the sdks you are using.

This year we' ve had so many changes that it is a rush to finish everything in time for September if you want to be in the store for day 1 of iOS 13.

I'm not only talking about Dark Mode that even though it's the biggest news is not the biggest work. Hopefully if you've been following the trend in the past few years you have your app almost ready for Dark Mode already and it will require just a few adjustments. If you did not it will take a while.

The biggest changes though are on iPad. If you have a document based application handling multiple windows support will probably take you the whole summer.

The last big thing is to make sure that your assumptions on modal presented controllers are not broken with iOS 13. You should not implement a quick fix to it, but adapt the view to the new flow of the iOS, otherwise your modal will feel unnatural with the whole new card layout.

And I haven't even started talking about the 2 biggest announcements: SwiftUI and Catalyst. Luckily you don't need to implement these right away (you should not since they're still not ready)
