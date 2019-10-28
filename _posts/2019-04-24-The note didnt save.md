---
layout: post
title: The Note Didn't Save
date: 2019-04-24 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Writing,Tech]
image:
image2:
author: Valentino Urbano
---

I've been working on a minimal note taking app In Flutter for the past few weeks. I have tested it on both the iOS simulator, my iPhone and the Android emulator and it worked fine on all three. Today I put it on my Android phone and I started writing my article for the day. I finished it up, hit save and pressed the back button to look at the list view of all the notes since I hadn't seen it before on an actual Android device.

The note didn't save.

I was so confident that it would work that I didn't even copy it (usually I do if I know an app I'm working on hasn't been tested thoroughly yet), but this time I was sure that it would work since I've been using it on iOS for a while and mostly because I've tested it a lot on the Android emulator.

Takeaway

You always need to test it on the actual device on both platforms (if you're targeting both iOS and Android), don't trust the simulators too much. They're good for prototyping and getting that MVP working, but shouldn't be trusted for much else. There are a lot of apps that are fine to be developed exclusively on the Emulator, but apps that interact with the system (IO, Camera, Microphone, ... should not). The iOS Simulator is years ahead of the Android Emulator and I usually trust it way more, it still falls flat when interacting with the system though.