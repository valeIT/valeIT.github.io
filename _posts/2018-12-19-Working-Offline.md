---
layout: post
title: Working Offline
date: 2018-12-19 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Productivity]
image:
image2:
author: Valentino Urbano
---

# Working Offline

Lately, I've had the need to work offline way more than usual due to a spotty connection. I thought it'd be pretty much impossible to work this way, but I found out that it's quite the contrary.

# It's not so bad

I don't really miss it as much as I thought I would. I can make a mobile application from start to finish (with a few caveats) without a working internet connection. Most of my reference materials are in my previous projects (that are already on my Mac) and for the rest, I usually can recall it from the top of my head. For what I can't, I prepare detailed notes on what to look up when I get back online and skip/mock it away so I still have a working application with a few parts pending. That's the beauty of compartmentalization. Each part of the application should work as its own unit in isolation.

# Caveats

The biggest problem I found is is installing dependencies or making a build. Those issues don't depend on me though, but the fact that you can't build in Xcode (most of the times) without being connected to the internet is backward.[^1]

I'm NOT advocating to work offline. It's a huge waste of time and you do it only when you really can't do otherwise. But when you are without connectivity, you can still be productive and build applications without a connection. You will just be slower and probably will need to go back online to add the finishing touches and distribute it.

[^1]: The problem is that Xcode needs to syncronize the time for Code Signing with Apple servers.
