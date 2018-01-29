---
layout: post
title: Check if Anything in the app uses Advertiser Identifier
date: 2015-11-22 21:53:41.000000000 +01:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

I had an app rightfully rejected for using an advertiser identifier while I stated that I didn't. I was sure I didn't have ads and I don't track users using the Identifier so there was something out of place. Luckily a simple "grep" I found out that a framework was using it and promptly removed it.

1. Move from the terminal to the folder of the project.
2. 
Run:

    ```
    grep -r ASIdentifierManager .
    grep -r AdSupport.framework .
    grep -r advertisingIdentifier .
    ```

Having the "." at the end is important, don't delete that! It tells the OS to start looking from the current folder.