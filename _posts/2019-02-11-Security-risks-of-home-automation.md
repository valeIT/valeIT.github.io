---
layout: post
title: The Security Risks of Home Automation Exposed
date: 2019-02-11 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image: /assets/article_images/andres-urena-470137.jpeg
image2: /assets/article_images/andres-urena-470137.jpeg
author: Valentino Urbano
---

IOT devices are taking over your house by storm, but are you sure they're as harmless as they seem?

Most IOT devices have zero security audits. They only audits are made by the manufacturer and it has been proven many times that is not sufficient. It's like the climate change studies sponsored by Exxon Mobil, who is going to trust that?

## What they can do

1.  Spy on you

Most of them are equipped with a sensor that tracks data and report it to some servers. If someone gets access to the device they can get access to your data.

2.  Lock / Unlock your house

If you have a smart lock they can even remotely unlock your house to steal stuff more easily when you're not home.

3.  Control your house

Let's say I want you to annoy you, so I just turn the radio on full blast for 2 seconds at random times during the week so you never know when it's going to happen.

## An Example

[One example](https://mjtsai.com/blog/2017/12/20/explanation-of-homekit-vulnerability/) with apple that is probably the most secure of the bunch. But the real problem lies in the hardware and its firmware.

Even if you use [open source software](https://home-assistant.io) you still need to buy the hardware itself. There's no escape.

## No Updates

Unfortunately, not all manufacturers update their devices. It's common to find devices that have never been updated since they were installed or devices that still use HTTP to send data.
When APIs change they break and usually are not supported. For example in 2017 a Samsung fridge broke down when the google calendar API was changed.

## Solutions

I don't see any solution that the consumer can do to protect themselves apart from not getting any IOT device. The resolution needs to come from the manufacturer.

The Android way of having a million manifacturers that never release updates can't be allowed to repeat itself[^1]. This is not just phones that are going to get hacked, but actual devices that you use in your home.

The lock of your front door. Your thermostat. Your fridge.

[^1]: I really hope Google will force manufacturers to keep updating their phone to the new OS in a timely fashion. Cause now it's not happening.
