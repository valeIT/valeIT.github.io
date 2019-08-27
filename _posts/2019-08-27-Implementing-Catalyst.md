---
layout: post
title: Implementing Catalyst
date: 2019-08-27 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

Implementing catalyst is not as easy as flipping a switch as Apple tells you. If your app is really simple it mioght actually just be almost as easy as that, but most production apps are not inherently simple. That said Apple made it really easy to migrate, but it still requires some work on your part.

Firstly there are a few components that are not supported on iOS for Mac that you need to migrate off using (if you're using them in the first place), some of them are hardware requirement that you don't have on mac, others are software and framework limitations that could be fixed in subsequent updates from Apple.

The second step is to have your build and code signing ready for the platform. If you've never developed a mac app before it means setting up for signing certificates and profiles from Apple.

Lastly you need to make sure that your dependencies and dependency managers support Catalyst. This is the biggest issue at the moment. That last step is going to get easier with time as more and more dependencies implement support for Catalyst, but if you plan to ship on day one you will need to either fix some dependencies yourself or migrate away from them to a custom solution.