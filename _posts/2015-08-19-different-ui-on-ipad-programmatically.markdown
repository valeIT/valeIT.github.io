---
layout: post
title: Different UI on iPad Programmatically
date: 2015-08-19 23:57:20.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

If you followed the hints that Apple gave in the past year you are surely using Size Classes in your Storyboard files to set up different UI for different sizes, but maybe you didn't know that you can do that from code as well. To check if you're running in a particular class just use:

        if traitCollection.horizontalSizeClass == .Regular {
    

Make sure to remove all references to

          if UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiom.Pad {
    

if they're still around somewhere, they're going to break stuff with the new iPad multitasking in iOS9\.