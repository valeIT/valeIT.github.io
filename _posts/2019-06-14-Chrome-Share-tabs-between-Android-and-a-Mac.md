---
layout: post
title: Chrome - Share tabs between Android and Mac using Remote Debugging
date: 2019-06-14 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

Technically by going to "Settings" -> "History" -> "Tabs from other devices" you would find all the tabs that you opened on Chrome (logged in with the same Google Account) on another device. Unfortunately that's not always the case.

On my Android phone this procedure never worked.

## Use Remote Debugging

**To enable and use Remote Debugging you should read the [Full Tutorial from Google][0]**

A quick recap:

1.  Enable Developement mode on your Android device (usually done by clicking 7 times on the build number for the OS Version you're running)
2.  Enable USB Debugging from the developer Menu that appeared
3.  From your Mac open the Chrome DevTools. Click on the 3 dots (the menu) and select "More Tools" -> "Remote Devices" -> "Settings"
4.  Enable "Discover USB Devices"
5.  From your Android enable USB access when prompted
6.  Your open tabs will appear under the name of the device
7.  Tab on one to open it in Chrome. To close it on your Android device you need to do it manually from the device itself.

## Force it to sync

To force the sync of one tab you need to open it in Chrome for Android, than tap the switch tab button and wait a minute. It will appear in "Settings" -> "History" -> "Tabs from other devices" as it should have done from the start.

Ypou need to repeat this procedure for every tab you want to sync.It's surely not the fastest way, but if you have a non rooted phone and don't want to use a cable that's the only way.

## Conclusions

It's a shame that in 2019 Google still can't sync open tab states between 2 devices, it shouldn't be a hard problem to tackle.[^1]

[0]: https://developers.google.com/web/tools/chrome-devtools/remote-debugging/

[^1]: I've recently went back to Firefox and its sync, even though not perfect, is way better than Google's.
