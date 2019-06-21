---
layout: post
title: SwiftUI Brings Declarative UIs to iOS
date: 2019-06-15 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

Apple is finally embrancing fully declarative UIs instead of imperative for the first time and by doing so make it clear that this will be the direction towards which everyone should start to migrate their codebase.

I have tried this pattern for a while with Flutter and even though I can't call myself an expert on it the readability and clarity of your code is greatly improved.

SwiftUI has 2 parts to it, a declarative UI

VStack {<br>

 Text('hi')<br>

 }

That makes understanding the layout of a screen really straightforward and solves all of the problems we had with storyboards:

- problems with source control
- only a visual tool,
- no clear source of truth for the view since we could have parts of the screen defined in the storyboard itself and parts declared in code

<!-- -->

A view has now a clear source of truth with each view only being a function of the state. Each time the state changes the view gets updated with the new state:

@State var editable = true<br>

 Button {<br>

 Text('hi')<br>

 }.enabled (editable)

On the other hand it goes hand in hand with Combine that makes reactive programming a first class citizen in iOS.<br>

 [Will have a different article to to more in depth into Combine]