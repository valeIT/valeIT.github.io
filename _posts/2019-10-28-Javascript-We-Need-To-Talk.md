---
layout: post
title: Javascript, We Need To Talk
date: 2019-10-28 18:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

Javascript is everywhere. Its popularity is ever increasing. Soon enough, everything will be able to run it, if we're not there already.

Thanks to that and mostly to the fact that you must[^1] write javascript to target the web. If you're a programmer it is a given that you will write some javascript sooner or later in your career.

Being used to really strong typing and compiler checks with Swift, using any language that has no type checking at all simply feels wrong and dirty. Why would you want to write such unsafe code by choice? There are surely cases where you would want that, mostly in game programming to avoid expensive checks since you need performance. Loading a webpage is not that at all.

I don't like writing Javascript and I try to avoid it as much as possible. It is really easy to write terrible and unsafe code with it. You can write terrible code in any language, but js makes it much easier.

That said I still use it pretty often and slowly it is getting more bearable (mostly thanks to [Typescript][2], thanks Microsoft).

As much as I don't like the language, I love the ecosystem. The idea of having so many people working together to build the standard library from scratch[^3] is something unique and empowering. It is also [terrifying][1][^4], but that's a story for another day.

Whatever side of the argument you are, you love JS, you hate it, or like me are in the middle you are going to enjoy this video [50 min long, starts at 7:00]:

[JS Video](https://www.youtube.com/watch?v=2pL28CcEijU)

But that's obviously not limited to JS, this is something similar in Ruby[^2]:

[Ruby Video](https://www.destroyallsoftware.com/talks/wat)

[^1]: Nowadays you can use a language that gets compiled down to Javascript, but in the end the browser is running it. This changes with Web Assembly, but this is only a recent development and not ubiquitous yet.
[^2]: The language of choice for the scripting community on mac OS.
[^3]: Since Javascript does not ship with a standard library.
[^4]: I wrote about an npm package being hijacked, but can't find the link...

[1]: #
[2]:https://www.typescriptlang.org/