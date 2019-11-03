---
layout: post
title: Register New Device For Beta - Apple
date: 2019-11-05 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

I thought that registering a new device to use in internal betas would be breeze in 2019. It still isn't.

## Easy Mode

First there is the easy way where Xcode will do everything automatically. Unfortunately this method is only limited if all of the following points are satisfied:
- You are an admin of the account you're trying to add the device to
- You have the device with you
- You have Xcode installed with code signing set up

In this case is simply necessary to build and run the application and Xcode will automatically ask you if you want to add the device to the test devices if it is not already registered.

Unfortunately when working on a client's project this is never the case. You would like to add the client's device so you can send betas without waiting for Beta App Review.

## Manual Mode

### Preparations For An Existing Account

You might find yourself in front of the "reset your device list before adding any new devices" screen.
Click reset, this will not delete any of your existing devices. In the next screen you will be able to select which one of your old devices you want to keep and which ones you want to delete.

### Registering a new device

Unfortunately iTunes is needed for this procedure.

Connect the phone you want to add and open iTunes. Click on the device ID to show the UDID, right click to copy. Open the developer portal
[Look rest of process on slack to copy]

### Beta App Review

If you just want to release a beta through Testflight you don't necessarely need to register a device. You can submit your app for beta app review and in that case, after approval, you will be able to add external accounts via email or even share a link to add testers without the need of adding devices through the portal at all. This requires a few more days waiting for App Review for the initial build, but on subsequent builds for the same release you do not need to go through beta app review again so it might be worth the few days wait in some cases.

## Conclusion

It is usually best to just not add the device and wait for App Review if you're not so pressed for time. You could even upload a build some time before so that it is ready to go the first day you want to release for beta if you know the timetable and just release a minor update with the fixes and updates from then until now.