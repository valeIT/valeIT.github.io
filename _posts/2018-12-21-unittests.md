---
layout: post
title: How Unit Tests Saved My App
date: 2018-12-21 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Writing]
image: /assets/article_images/pexels-photo-372748.jpeg
image2: /assets/article_images/pexels-photo-372748.jpeg
author: Valentino Urbano
---

I came back to an application after almost a year spent without opening up the project and I felt lost. I recalled the basic structure of the app but didn't remember the specifics.

**The Problem**
Someone had opened a bug because the app would crash under certain specific conditions. Thanks to detailed reproduction steps I reproduced the problem right away.

I thought fixing it would take ages since it looked like the problem was deep inside the class that handles serialization to disk. I put some breakpoint where I thought the problem was and it blazed right through. Wrong target.

Then I remembered that the app was fully unit tested if there was a problem it surely would catch it. Turns out it wasn't just a single problem, there were multiple factors that combined caused this undefined state.

The unit tests were able to isolate each problem on its own and a bit of knowledge of the application put 2+2 together.

**Result**

App fixed in less than 20 minutes, while I would have wasted at least an hour doing it manually.

**Start Testing**
It might seem like a daunting task at first, especially if you already have a legacy application. You don't need to unit test everything right away. Each time someone files a bug and you resolve it to add a test to be sure that there aren't any regressions. With time your test suite will grow organically and without hassle or a huge time dedicated to it.
