---
layout: post
title: Don't only stick with paradigms
date: 2019-03-24 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

Whenever we come on a project or start a new one we either decide on a certain architecture or follow the architecture the software was written in without asking ourselves if it is the best way. Having a consistent style and architecture across the whole application is paramount and a must (both for existing engineers as to new ones that come in), but in some limited and fenced off parts it may be reasonable to try something different if it's the best thing to do for the situation at the end.

You might have your whole application using protocols (protocol-oriented programming), passing everything by values and only using structs. In iOS, you have the problem that whenever you are interacting heavily with Objective-C it is way easier if you're using subclasses of NSObject even from Swift. You need to do it because Objective-C is picky, but it is not a problem only affecting bridging calls to Objective-C (or iOS Programming). For example, you might make your whole application using MVVM, but this particular controller does so little that using MVVM for it complicates the code unnecessarily and you only end up with useless placeholder code that has no reason to exist.

Obviously, these are the exceptions and exceptions should never become the norms. Each project is different and you need to be aware of the drawbacks when trying to implement something like this. That is why it is rarely done, the cost (especially for new people coming into the project) is too high for the benefits. You might prefer the boilerplate that comes from MVVM rather than having this one controller feel disjointed from all the others.

The takeaway is to think about it and see if there is a way to do better, maybe as part of refactoring later on considering both the benefits as well as the drawbacks.
