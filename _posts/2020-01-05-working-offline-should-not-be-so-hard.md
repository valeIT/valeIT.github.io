---
layout: post
title: Working Offline Should Not Be So Hard
date: 2020-01-05 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [General]
image:
image2:
author: Valentino Urbano
---

I'm back trying to [work offline][1] and it is astonishing how many applications simply refuse to work when offline. Some kind of apps will never work offline, because they simply can't (skype, slack, ..) and that's totally warranted, that's the whole point of the application. What I'm more worried about are all the rest that do not need to have a server component at all, but apparently do and even more so refuse to work if they cannot connect to it.

Just a few examples from this recent holiday period:

- I could not run an application built locally using Xcode because it could not contact apple time server.
- I could not run a flutter application because it wanted to install the dependencies (run pub get) even though I had all the needed dependencies locally already.
- I could not spell check an article if I was not connected to the internet since both Grammarly and Hemingway Editor do not work. What's the point of making a desktop application if it does not work offline? It's fine if the machine learning part of the app does not work, but at least basic spell checking and sentence length should.

On iPhone the situation is probably even worse. Caching in a lot of apps does not work at all and when it works the cache gets cleared after a few hours for no reason at all. There a few apps that work really well offline and sync once back on the network, but they should be a given in 2019, not something that you really need to go to great lengths to find.

[1]: {% post_url 2018-12-19-Working-Offline %}