---
layout: post
title: Mobile layout is bad
date: 2012-03-03 15:10:57.000000000 +01:00
type: post
published: true
status: publish
categories:
- Tech
tags: \[\]
meta:
\_wpcom\_is\_markdown: '1'
\_edit\_last: '1'
author:
login: Myshar
email: mysh@myshar.org
display\_name: Valentino Urbano
first\_name: ''
last\_name: ''
---

Provide a completely different layout (using different CSS files) for each category of devices (PC, tablet, smartphone) is not only a waste of time and efforts for the developer, but also an annoyance for the user.

**Tablets**

![]({{ site.baseurl }}/assets/ipad-flash-100129-6.png)

Tablets should be treated just like a PC. With a tablet you can surf the web the same way you do on a PC [\[1\]][0] so there's absolutely no reason to provide a different layout.

**Smartphones**

![]({{ site.baseurl }}/assets/iphone-safari-web-browser.jpg)

A different case is a smartphone, which the biggest is 5.1' - [galaxy note][1] ( if you consider it a smartphone) or 4.6' if you consider the [galaxy nexus][2] (the iPhone is 3.5').

Those who use a mobile theme states that on such a small display you can't provide the same information that you do on a larger one, the fact is that the screen is capable to render desktop web pages even on such a small device so why provide a awful experience just to fit it on the screen?

_I know you can rebate that it's not awful, instead it's better this way, but please take the time to read the rest and it would be clear. If you still disagree then send me an email._

Before iOs 5 I'd tolerate the ones who provided a mobile theme (only if you could switch it off from the footer) because it was the best way to provide content on such a small screen, but since its introduction I do prefer reading an article from reader in safari than on a mobile web page. But it's only on iOs.

On an android device the better way to read something, unfortunatly, is still the mobile theme, until someone would come up with the brilliant idea to write a browser with that feature using the readability open APIs - _developers have you heard me?_

We need a crossplatform solution.

**My solution**

The solution/compromise I've found with this site is to provide a desktop experience on every device by default provind a version in plain text using readability \[[2][3]\] , which supports every platform.

You can find the button to switch to the readability view on top of every article, and if you're logged it you can also save the full article to read later with just one click.

---

  
1\. [Apart][4] from [flash][5] [content][6] on the iPad.  
  
2\. Of course if you're on iOs you can use reader instead as mentioned before.


[0]: #iPad
[1]: http://www.samsung.com/global/microsite/galaxynote/note/image01.html?type=find
[2]: http://www.google.it/nexus/
[3]: #2
[4]: http://www.apple.com/hotnews/thoughts-on-flash/
[5]: http://www.adobe.com/support/flashplayer/downloads.html
[6]: http://blogs.adobe.com/conversations/2011/11/flash-focus.html