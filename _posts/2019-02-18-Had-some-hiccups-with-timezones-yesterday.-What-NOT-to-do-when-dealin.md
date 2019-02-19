---
layout: post
title: Programming With Timezones Is Hard
date: 2019-02-18 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image: /assets/article_images/.jpeg
image2: /assets/article_images/.jpeg
author: Valentino Urbano
---

I think timezones and sync are two of the things every programmer is going to fight against at least once in his career.

Unsurprisingly I had some hiccups with timezones a few months ago. Exactly the date that daylight savings ended. I forgot to take it into effect and because of that all of my dates were off by one hour. Even though it's something that can be quickly and easily fixed it's always a hassle. The real problem is that we rarely think about such problem, we assume it's going to be fine and just roll with it.

A short list of things NOT to do when dealing with timezones:

- Assume a users timezone
- Assume that a users timezone doesn't change
- Assume that the time didn't change if the user doesn't change timezone
- Assume a country has 1 timezone
- Assume leap seconds and days don't exist

What you SHOULD do instead:

- Store times in UTC
- Let JS convert to users timezone
- Store a users timezone and have a mechanism to update the dates stored in the DB when it changes.

Beware of using UTC for simplicity, it doesn't respect daylight savings time. Note to self: Even if you're application only works in a localized local network and shouldn't care about timezones at all, it does care still and you still need to keep track of them as of it was a server on the public internet.

[If you are a programmer dealing with dates (or just want to have a laugh) read this. It has way more edge cases and examples on what not to do when dealing with timezones.][0]

[0]: http://www.creativedeletion.com/2015/01/28/falsehoods-programmers-date-time-zones.html
