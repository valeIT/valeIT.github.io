---
layout: post
title: Effective Refactoring Using Multiple Passes
date: 2019-11-06 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

I'm refactoring a legacy application and since it's full of global state (200+ global variables), long files (1.5k+ View Controller files) and everything in between I decided to go for multiple passes. The first pass would focus on bringing down the length and complexity of the View Controllers and the subsequent ones for the rest.

This has a few reasons:

First we have a very limited timeframe (one to two months) so this way if something is not completed by the deadline we can stop the refactoring and we still have a fully functional application that is still undeniably better than before.

Second there is so much interdependency between different screens and global state that it would have been really hard to get all of the dependencies right to do a proper refactoring at the first pass through.

It doesn't need to be perfect after the first pass. It needs to be definitely better than what you started with though.

After each day you need to ask yourself, is this better than how I found it? If the answer is no you should stop and find out why it's not and what you can do to fix that.