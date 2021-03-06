---
layout: post
title: Mobile layout is bad
date: 2012-03-03 15:10:57.000000000 +01:00
type: post
published: true
status: publish
categories:
- Tech
author: Valentino Urbano 
---

Provide a completely different layout (using different CSS files) for each category of devices (PC, tablet, smartphone) is not only a waste of time and efforts for the developer but also an annoyance for the user.

**Tablets**

Tablets should be treated just like a PC. With a tablet, you can surf the web the same way you do on a PC [^1] so there's absolutely no reason to provide a different layout.

**Smartphones**

A different case is a smartphone, which the biggest is 5.1' - [galaxy note][1] ( if you consider it a smartphone) or 4.6' if you consider the [galaxy nexus][2] (the iPhone is 3.5').

Those who use a mobile theme states that on such a small display you can't provide the same information that you do on a larger one, the fact is that the screen is capable to render desktop web pages even on such a small device so why provide an awful experience just to fit it on the screen?

**I know you can rebate that it's not awful, instead it's better this way, but please take the time to read the rest and it would be clear. If you still disagree then send me an email.**

Before iOS 5 I'd tolerate the ones who provided a mobile theme (only if you could switch it off from the footer) because it was the best way to provide content on such a small screen, but since its introduction I do prefer reading an article from reader in safari than on a mobile web page. But it's only on iOS.

On an Android device the better way to read something, unfortunately, is still the mobile theme, until someone would come up with the brilliant idea to write a browser with that feature using the readability open APIs - _developers have you heard me?_

We need a cross-platform solution.

**My solution**

The solution/compromise I've found with this site is to provide a desktop experience on every device by default proving a version in plain text using readability [^2], which supports every platform.

You can find the button to switch to the readability view on top of every article, and if you're logged it you can also save the full article to read later with just one click.

---

  
[^1]: [Apart][4] from [flash][5] [content][6] on the iPad.  
  
[^2]: Of course if you're on iOS you can use reader instead of as mentioned before.


[1]: http://www.samsung.com/global/microsite/galaxynote/note/image01.html?type=find
[2]: http://www.google.it/nexus/
[4]: http://www.apple.com/hotnews/thoughts-on-flash/
[5]: http://www.adobe.com/support/flashplayer/downloads.html
[6]: http://blogs.adobe.com/conversations/2011/11/flash-focus.html