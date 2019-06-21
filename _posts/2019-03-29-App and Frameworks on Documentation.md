---
layout: post
title: App and Frameworks on Documentation
date: 2019-03-29 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

Making an app and a framework are 2 very different things. Making an app you can be super specific in your coffee about what you need. Making a framework you need to be flexible cause it's certain that people will use it in ways that you didn't predict.

You can also avoid documenting your app's code as much since technically you are (likely) going to be the only person working on it. That might bite you later though. If you are working on a framework used by other people you don't have that luxury. Your documentation should be top notch, so many frameworks have terrible documentation and a lot of people (myself first) are taken aback just because of it.

A good example

- [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON)
Clear instruction on how to install it, clear examples that cover most (even advanced) use cases, and even examples on how to use it alongside other popular packages on the platform.


A bad example

- [jstree](https://www.jstree.com/api/#/)
Just says obvious points that are in the name of the function and doesn't specify anything about the return value or argument to pass into the functions apart from the name and the type. You can get the exact same information by looking at the source code. What is the point of the documentation if you get nothing from it at all apart from what you would get by looking at the code itself?
