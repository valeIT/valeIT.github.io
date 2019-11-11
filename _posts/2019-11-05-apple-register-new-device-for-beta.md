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

First there is the easy way where Xcode will do everything automatically. Unfortunately this method is only available if all of the following points are satisfied:
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

- Connect the phone you want to add and open iTunes.
- Click on the device ID to show the UDID, right click to copy.
- Open the developer portal
- Go to Certificates, Identifiers&Profiles > Devices
- Click on the + button. If it said that you need to reset the current list of devices press yes, this will NOT actually reset the list of devices, but will allow you to add new ones.
- Select the devices from the previous list that you want to keep (usually all of them)
- Add the new device by providing a name and the UDID

Remember that after registering a device you will need to regenerate the provisioning profile to be able to build and run to that device.

### Beta App Review

If you just want to release a beta through Testflight you don't necessarily need to register a device. You can submit your app for beta app review and in that case, after approval, you will be able to add external accounts via email or even share a link to add testers without the need of adding devices through the portal at all. This requires a few more days waiting for App Review for the initial build, but on subsequent builds for the same release you do not need to go through beta app review again so it might be worth the few days wait in some cases.

## Conclusion

It is usually best to just not add the device and wait for App Review if you're not so pressed for time.

You could even upload a build some time before. That way it will be ready to go whenever you want to release the beta. You can only do that though if you know the timetable beforehand. Be aware that if you release any kind of version (even .1) update you will need to go through Beta App Review again. If the update is only minor (only the build number changes) you will be able to release for both internal and external testers as soon as the processing phase finishes.
