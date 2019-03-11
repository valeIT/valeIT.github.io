---
layout: post
title: Developing for WatchOS 1
date: 2019-03-11 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

A few years ago, when WatchOS was just in its infancy (it was still in developer preview), I made a few apps to try out the new platform. Between them, I made a pretty successful Tic Tac Toe application that got featured by Apple in its Apple Watch section for a long while. It has probably been the first and only Tic Tac Toe application for Apple Watch for several months.

In recent years the platform has evolved a lot with the biggest change coming with watchOS 2. The app would now run on the watch itself. With watchOS 1 the app would still run on the iPhone and the result would be transmitted back to the watch to be displayed via Bluetooth. This process was extremely slow and as an end user, you would notice it a lot.

With watchOS 2 that was resolved. As a developer, it is still a dumbed down system coming from iOS that limits a lot of things you can do, but it is slowly improving. The biggest problem we face nowadays (that has been present since launch) is built. It takes a long time to build apps for the watch and they don't always work. With watchOS 1 it was so bad that I had to run without a debugger attached and just NSLog the problems because the debugger would always fail to attach to the correct process (if running on a physical device).
