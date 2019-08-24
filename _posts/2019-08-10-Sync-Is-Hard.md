---
layout: post
title: Sync Is Hard
date: 2019-08-10 22:28:05.000000000 +01:00
type: post
published: true
status: published
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

Sync is hard.

I'm implementing a sync system for one of the projects I'm working on. It is still just an idea (not a single line of code has been written to date) still in the research phase.

Since I could not find too much about the topic I will try to document the various alternatives I found and the steps I take.

Firstly there are a few solutions that are proprietary, but I'm going to include them for reference's sake. I'm not going to consider them. More on this later, but the basics of it is that I don't want to lock myself with  a system that I have no control over and if it ever shuts down it's going to be a problem. I had it happen before and it was not nice.

Proprietary:

- Realm
- SimpleNote Sync


I've used the Parse Framework in the past (when the cloud version was still operational) to offer offline syncing and conflict resolution and it worked well. I never had any problems with the sync server having an erroneous state or the app losing the data. Since it shut down I stopped trusting third party platforms to provide the backend for mobile apps. In the meantime Google has not discontinued Firebase yet which surprised me, but with their track record you can never trust them to keep a service online for more than a year. They've been investing pretty heavily on it and recently bought Fabric to integrate into Firebase so it seems that it's not going away anytime soon, but if I can avoid third party dependencies on such a critical point of infrastructure I would.
The third solution would be rolling your own sync server. I don't like re-inventing the wheel especially on hard problems such a sync, but if it's the best solution I'm willing to try it. I'm reading through [Vesper][1] sync diary on how to do it manually and it is one of those things where time spent designing the system pays pack tenfold. Each single use case that you don't consider and have to fix later is a huge problem since you're dealing with customer's data.

It looks like the best solutions are either to roll your own or to self hosted the Parse open source. Both have their own advantages and drawbacks and both will require a lot of development time.

Considering:

- Parse Self Hosted
- Custom Solution (based on the design documents from Vesper Sync)

[1]: https://inessential.com/vespersyncdiary