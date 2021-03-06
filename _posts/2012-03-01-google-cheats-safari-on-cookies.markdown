---
layout: post
title: Google cheats safari on cookies
date: 2012-03-01 19:33:55.000000000 +01:00
type: post
published: true
status: publish
categories:
- Tech
author: Valentino Urbano 
---

A few days ago John Battelle [discovered][0] that Google hijacked apple's settings on safari to block third-party cookies by default:

> "Google Inc. and other advertising companies have been bypassing the privacy settings of millions of people using Apple Inc.'s Web browser on their iPhones and computers --- tracking the Web-browsing habits of people who intended for that kind of monitoring to be blocked."

Cookies are tiny files (usually text files)  that a website can save on our computer with some kind of information in it. Google uses them (with its affiliates in advertising) to track user behavior across different sites to provide better advertising result.

**Third Party Cookies**

Browsers usually accept cookies by everyone by default, but Safari broke this.

It only accepts cookies from the site you're currently on and not from another website which have some lines of code on that site (as ad networks do have ). Third party cookies are used by those networks to track users behavior across all the sites affiliate to their program. The site's owners have no fault on this, many of them don't even know that their users are being tracked.

What Safari does as stated by [Apple][1]:

> #### Cookie Blocking
> 
> Some companies track the cookies generated by the websites you visit, so they can gather and sell information about your web activity. Safari is the first browser that blocks these tracking cookies by default, better protecting your privacy. Safari accepts cookies only from the current domain.

**Why Safari?**

Other browsers block cookies by default, so why only safari?

Because it has a huge customer base and Google wants to know how user behaves, especially on mobile browsers and the mobile version of Safari has third-party cookies blocked by default too. Someone pointed the finger at Apple saying that they've done this just to disrupt Google, but that's not true.

Apple has had this feature on mobile safari since[iPhone OS 1.0.2][2] and in 2007 when Apple and Google were friends (Eric Schmidt was even in the board of directors of Apple).

**Consequences**

As [MG Sieger][3] states:

> One thing is certain: Apple is not going to like this one bit. This seems like the kind of thing Steve Jobs would have gone ballistic over. This will undoubtedly escalate the war between the two sides.

I agree, if there was still Steve this would have ended up in a really bad reprisal by Apple, but I don't think it's the case with Cook, I mean of course there will be consequences, but not as bad as it would be if Steve was still CEO of the company.



[0]: http://battellemedia.com/archives/2012/02/a-sad-state-of-internet-affairs-the-journal-on-google-apple-and-privacy.php
[1]: http://web.archive.org/web/20131206023857/http://www.apple.com:80/uk/safari/features.html
[2]: http://www.ilounge.com/index.php/articles/comments/whats-changed-iphone-102-versus-111/
[3]: http://parislemon.com/post/17756699907/google-tracked-iphones-bypassing-apple-browser-privacy