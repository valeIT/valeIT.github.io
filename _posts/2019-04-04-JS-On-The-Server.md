---
layout: post
title: JS On The Server Might Not Be So Bad
date: 2019-04-04 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

I had never completely understood the push for javascript on the server before this week. I mostly thought it was for frontend developers that already have familiar tooling to keep working with that familiar tooling on the server stack as well, without being forced to go out of their comfort zone too much to try out how this thing called 'a server' worked. It is something more than that though.

I'm working on a website with classic JS and PHP and today I had to duplicate the server logic on the client. It is something that can't be avoided and it is a problem. If I have to think that each time I change the business logic on the server I need to edit it on 2 files in 2 different languages it makes you understand why you would want to share the code between them.

I still think that this latest mania of wanting JS everywhere is exaggerated and that JS has its place and it shouldn't try to take over the world, on the other hand, I have a newfound respect for whoever decides to use it consciously and willingly in different areas for the sake of consistency and having one single point of truth and one single point to have to edit.
