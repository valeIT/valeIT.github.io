---
layout: post
title: NSTextField send on enter only
date: 2015-06-11 13:05:30.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

The default action, when you connect a textField in Interface Builder, it's to send the action each time the value is changed. Doing so means that if my view controller would be dismissed it would trigger the value changed action if I touched the textField in any way. Probably worse if you changed it and you didn't want to save your change and just assumed that if you didn't press enter the previous value would stay current, but that wasn't the case.

Fortunately, there is a property in the attribute inspector in IB to set "send on enter only". Turn it on and connect the action as normal. ;)