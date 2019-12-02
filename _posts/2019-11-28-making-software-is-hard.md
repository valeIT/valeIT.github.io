---
layout: post
title: Making Software Is Hard
date: 2019-11-28 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

It is hard for non technical people to understand the amount of work that goes on behind the scene in creating any kind of non trivial application. It is even harder to make them understand that 'just changing x' might not be as easy as they think it would be. Only as a software engineer yourself[^1] you can assume with some degree of confidence what would generally be the amount of work required for a certain feature.

I think that we have finally reached a point where everybody pretty much understands that making software is not easy. The only people who don't are junior programmers (no pun intended, we all were juniors once) or people who take an already made application and just change the visuals (themes, re-skins,..) and call themselves software engineers. What we have not realized is the magnitude on how much it is not.

I doubt we'll reach a point where the general population understands that most changes they think about are actually much harder to implement than they imagine anytime soon (if ever).

Sure, you might argue that some times it is the opposite. Changing something may just mean changing one line of code when from an outside perspective it might seem like not such a trivial change, but the opposite case is 99% more common.

## Estimates

### Deadlines

Estimates in software are notoriously hard. People underestimate work by an order of magnitude. Whatever the methodology to do estimates we may use we make the mistake of thinking about the new feature to develop in isolation. We don't estimate the time that it might take for hiccups, interfacing with the rest of the system, or having other priorities that limit our available time to work on such feature (and so on). This results in an industry that, in general, keeps failing to keep its promise given at estimation time, with projects constantly over budget and delayed. Public projects are notorious for this (look no further than healtcare.gov as a "fairly recent" example that got a lot of media coverage), but in private projects the same is true as well.

The real problem is that once you know that you will go over time there is not really a solution to speed up.

- Crunching

A lot of companies decide to force people to work overtime to try and complete a project in time. This will work for the first week, but as time goes on and people get less sleep consistently the start to perform worse and worse and you end up with less work than they would have done if they were working 8 hours, but well rested. This is not taking into consideration all the avverse effect on health from being overworked and not sleeping enough. Also you increase the risk of people burning out from overworking and tanking productivity even further.

- Hiring more people

Throwing more people into the arena increases complexity so you will waste more time dealing with tooling, interpersonal relationships, some work will be blocked by pending work from someone else and so on. It might work for certain projects, but generally you only get a 0.x increase in productivity and not the expected doubling, this factor also decreases as you add more people. If 2 people instead of one gives a 1.7 factor 3 people might give a 2.2 factor (numbers not accurate, just to give an idea).

- Decreasing Scope

The only real solution is a change in scope. If the deadline can't be changed and we also defined that we can increase productivity after a certain extent the only thing left is to cut on features. What is really necessary for the release? Can something be cut out? We've seen this clearly in this year's iOS 13. The OS was not ready for the new iPhone release so Apple decided to ship a version without some of the features announced at WWDC in June and add them a while later with iOS 13.1

### Time Estimation

Time estimation in software will always be hard. You are trying to create something when the whole picture is not entirely there until after you've built it. You will be forced to make reasonable assumptions based on your previous projects if you're lucky enough to have worked on a similar product, but even in that case the circumstances and what the client wants is not exactly the same so your estimate will be slightly off.

That said you can use some tricks:

- Increase your estimation

If some parts are not clear estimate them for as long as they might take while knowing that if it turns out that it is not as bad as assumed the estimation might be reduced.

- Clarify what can be clarified

Some times you only need to talk with the client/designers more to get some nebulous parts clarified

- Some things will always be unknown until you begin

It's in the nature of software that some things won't be clear until you actually start working on them. There is nothing you can do about that. What you can do is to take that into account while estimating that feature.

## Conclusions

I hope I gave you some tools to give better estimates. Unfotunately you, as developer, do not have a lot of control on the design and product analysis part of the development process that might give you a clearer picture. You just need to be aware of it and act accordingly.

[^1]: Or as SO of a software engineer.
