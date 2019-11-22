---
layout: post
title: UI vs Code for Defining Interfaces
date: 2019-11-13 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

## UI vs Code

The days of defining your UIs in a different place from your code and later on connecting it to the code are about to come to an end. The writing has been on the wall for a long time, but lately more and more platforms are embracing this paradigm shift.

With declarative programming and new frameworks like React Native, Flutter and now SwiftUI we see most major players moving out of xml based interfaces towards befining both your interface and your data binding in code in one single place. Still waiting for Native Android and Windows to get the memo.

The benefits are plentiful, the major one being having a single source of truth for all your interfaces and clearly see how its data flow works and how it reacts with different data from one place. You might still need to open more than one file to see the whole tree, but you can get a generic understanding of how the screen works from one single file.
