---
layout: post
title: Missconceptions about Multitasking on iOs
date: 2012-03-02 13:18:46.000000000 +01:00
type: post
published: true
status: publish
categories:
- Tech
author: Valentino Urbano 
---

When I talk about multitasking on iOs I see that many people are uninformed on this matter, even Apple [geniuses][0]. [^1]

iOs is a mobile OS and it doesn't Behave as every other desktop OS that you're used to use. It has its specific power management specific to avoid excessive battery usage, it also handle difficult memory situations automatically, it has built this way to provide a great experience where user have to care only about doing things, it'll be on the OS then to decide when is the time to free some RAM.

**Before You Start**

Before you even start you should watch this [video][2] made by a developer on how multitasking works on iOs:

**Apple Official Statement**

Now let's take a look on what [Apple says][3] on his website:

> Multitasking doesn't slow down the performance of the foreground app or drain battery life unnecessarily. [...]  Most applications are not taking up system resources when running in the background and instantly launch when you return to them. Certain tasks or services can continue to run in the background, and you can determine most by checking the status bar. [...] Double-clicking the Home button displays a list of recently used apps. These apps are not necessarily actively in use or open.
> 
> 

Here's another interesting video about this matter, unfortunately it's only available in [Italian][4], but it clearly shows that app running in the background are idle and they're not sucking battery life, instead when you manually kill an app the processor and so the battery are heavily used.

**Going Deeper**

Hanging around the developer section i found an interesting Guide for developers on this matter, i just quote an extract [^2] :

> App States:
> 
> * Not running
> 
> The app has not been launched or was running but was terminated by the system.
> 
> * Inactive
> 
> The app is running in the foreground but is currently not receiving events. (It may be executing other code though.) An app usually stays in this state only briefly as it transitions to a different state.
> 
> * Active
> 
> The app is running in the foreground and is receiving events. This is the normal mode for foreground apps.
> 
> * Background
> 
> The app is in the background and executing code. Most apps enter this state briefly on their way to being suspended. However, an app that requests extra execution time may remain in this state for a period of time. In addition, an app being launched directly into the background enters this state instead of the inactive state. For information about how to execute code while in the background, see "Background Execution and Multitasking."
> 
> * Suspended
> 
> The app is in the background but is not executing code. The system moves apps to this state automatically and does not notify them before doing so. While suspended, an app remains in memory but does not execute any code.
> 
> When a low-memory condition occurs, the system may purge suspended apps without notice to make more space for the foreground app.
> 
> 

There are actually few kind of apps which do run in the background indefinitely. Those apps are:

1. Navigation Apps which uses the GPS module;
2. VOIP apps which are able to receive incoming calls even if that certain app is not running;
3. Music Playback Apps like instacast;
4. Newsstand Apps which are downloading content;
5. Apps that receive  continuous updates from an external accessory.

All those apps  become suspended when the user stop using that kind of feature (the ones in the list) which enable unlimited background.

**What Bloggers Says**

I've also bookmarked few articles from _popular_ blogs about this.

From [MacWorld][6]:

> There's one bit of iOS misinformation that I keep hearing. Even supposedly authoritative sources such as Apple Geniuses don't seem to get it. It has to do with how multitasking works in iOS.
> 
> Here's the statement I keep hearing, and it's wrong:
> 
> > _All those apps in the multitasking bar on your iOS device are currently active and slowing it down, filling the device's memory or using up your battery. To maximise performance and battery life, you should kill them all manually._
> 
> The iOS multitasking bar does _not_ contain a list of all running apps. It contains a list of _recently used apps_. The user _never_ has to manage background tasks on iOS.
> 
> [...]
> 
> Put simply: _You do not have to manage background tasks on iOS_. The system handles almost every case for you, and well-written audio, GPS, VOIP, Newsstand, and accessory apps will handle the rest.

From [Daring Fireball][7]:

> It is simply a list of your most recently used applications [...] Notice, for example, that if you turn an iOS device off and on, completely restarting the device, the multitasking tray still shows the same apps. It's like your browser history.  Emptying this list of applications is simply needless, mindless, busywork. It was absolutely never intended to be used this way and anyone who does this is just wasting their time.

From [Speirs][8], maybe the best article on this matter by far:

> There is one iOS "tip" that I keep hearing and it is wrong. Worse, I keep hearing it from supposedly authoritative sources. I have even heard it from the lips of Apple "Geniuses" in stores.
> 
> Here is the advice - and remember it is wrong:
> 
> All those apps in the multitasking bar on your iOS device are currently active and slowing it down, filling the device's memory or using up your battery. To maximise performance and battery life, you should kill them all manually.
> 
> Wrong. Wrong. Wrong. Wrong. Wrong. Wrong. Wrong. There are caveats to this but anyone dispensing the advice above is clearly uninformed enough that they will certainly not be aware of these subtleties."
> 
> 

**When You really have to manage them**

Quoting again Speirs:

> I said earlier that "the user never has to manage Background tasks on iOS". The only exception to this is when one of these Background-running apps goes berserk and will not terminate properly. That, however, is an exceptional situation and not a normal part of being an iOS user.

There is only one situation when you have to manage multitasking on iOs, when it got stuck - it only happens when a developer has made a poor job developing the app.

---

[^1]: I went to an Apple store few days ago with a friend because his iPhone had a problem with its battery and the Apple 'Genius' told me that it was because he had left few applications 'opened' - in the multitasking bar - for the whole day, but I have always done it! So I told him and I also told how multitasking on iOs actually works. He had no clue on how it worked, he told me that it behaves just like a Mac but it's completely wrong! I was astonished when I heard that, I was asking myself is this really a "genius".

But that's not the end of the story. He told my friend that an app was causing the problem so he had to perform a clean restore on the device and them add ten apps a day and take a close look on the battery, if its behaviour was ok he had to keep adding apps til he would have found the buggy one. My reaction: is he mad?? Does he really pretend that he would stay all day with only few apps for few weeks (10app a day for 200 apps = 20 days)?? 

Thanks God it was a "genius".

[^2]: If you don't want to read all the extract it's all shown in this image. [Image was deleted and no mirro available]


[0]: https://twitter.com/#!/schwa/status/152425874581491712
[2]: http://vimeo.com/34660348
[3]: http://support.apple.com/kb/ht4211
[4]: http://www.youtube.com/watch?v=OPfcZd4bc58
[6]: http://www.macworld.com/article/164616/2012/01/how_ios_multitasking_really_works.html
[7]: http://daringfireball.net/2012/01/ios_multitasking 
[8]: http://speirs.org/blog/2012/1/2/misconceptions-about-ios-multitasking.html