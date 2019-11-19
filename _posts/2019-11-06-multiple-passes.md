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

I spent the last few months refactoring a large legacy application. Since it was full of global state (200+ global variables), long files (1.5k+ View Controller files) and everything in between I decided to go for multiple passes during the refactoring process.

There is also always the option of rewriting from scratch, but given the timeframe that was not feasible.

The first pass would focus on bringing down the length and complexity of the View Controllers since that would provide the best quality of life improvement for developers. The subsequent ones would tackle the rest[^1].

This decision had a few reasons:

- Timeframe
We have a very limited timeframe (one to two months). This way if something is not completed by the deadline we can stop the refactoring process while still having a fully functional application. An Application that is still undeniably better than what was before. We could also always keep the app functional and running so that we would find out mistakes quickly and not going longer periods of time without building.

- Interdependency
There is so much interdependency between different screens and global state that it would have been really hard to get all of the dependencies right to do a proper refactoring at the first pass through. The first pass would not make the app perfect, but it was the foundation needed for subsequent passes. What it needs to do is making the app definitely better than what we started with.

After each day you need to ask yourself: Is this better than how I found it? 
If the answer is no you should stop and find out why it's not and what you can do to fix that.

The end result is far from perfect, but it is a great improvement from what we found. There was not a single controller with less than 1.2k lines and now the biggest file has 500 lines while most are less than 200 with proper architecture and separation of concerns.

[^1]: A few other examples:
- Rampant use of Notification Center
- Duplicated logic all over
- Did not follow any recent UI or Asset guidelines in the last 5 years
- ...
