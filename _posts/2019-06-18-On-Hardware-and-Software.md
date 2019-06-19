---
layout: post
title: Why Having Hardware And Software Work Together Is Important
date: 2019-06-18 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image: /assets/article_images/tyler-lastovich-470023.jpg
image2: /assets/article_images/tyler-lastovich-470023.jpg
author: Valentino Urbano
---

*Disclaimer: This article is from my personal experience managing the tech stack of a physical on-site infrastructure for a large international client distributed all across the country and it needs to be read in that frame. Most of it does not apply to small, independent developers.[^1]*

Whenever possible have a hardware stack you can control. What do I mean with that?

It needs to be something that is not proprietary or locked.

For all of our customer-facing clients, we use Linux machines. Highly customizable. It allowed us to have great diagnostic and maintenance capabilities. Native and easy to set up support for VPN, rsync, ssh, git and much more.

Know the architecture of your system before buying your hardware. Buy the hardware that goes hand in hand with your software.

Thinking about (reasonable) possibilities to be future proof - also taking into account possible future improvements and new features - before starting the development to set up the right scalable architecture for your project[^2] and before buying hardware should be something that everybody does. Jumping aboard the ship without a discussion is reckless and it's gonna cost you 500% (a random number that is not so far from the truth though) more time.

If you think in the next x years you might need some more RAM to consider buying it up front instead of waiting to upgrade when the machine is suffering and it's impacting your users.

[^1]:If you're an indie you should [read this][1] instead.
[^2]: This is not always the right course of actions. There are projects where staying lean and minimal until necessary is best and projects where preparing for the future is best. Only you know your business well enough to decide which of the two is the right course.

[1]: {% post_url 2018-12-09-Don't-think-about-scaling-too-early %}