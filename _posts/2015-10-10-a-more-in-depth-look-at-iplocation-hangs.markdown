---
layout: post
title: A more in-depth look at IPLocation Hangs
date: 2015-10-10 19:10:41.000000000 +02:00
type: post
published: true
status: publish
categories:
- Me
author: Valentino Urbano 
---

I spent a fair part of September debugging a weird Issue that happened in [IPLocation][0]. The first thing that I know is that this issue only happened to the Mac App Store version of the app. At the time I was only selling IPLocationMini directly so I could quickly rule out all of the shared components. Everything present in IPLocationMini wasn't the problem, this left me with the few major differences to analyze:  
- The Map View  
- The Popover  
- 3 different Source Code Files (2 Classes and a Helper)

Luckily a customer emailed me his system trace which showed that the problem was in an event listener. The major hassle was that there was no way for me to reproduce the hang.

I only used one event listener that gets allocated when the app is at the front and the popover is active. In viewWillAppear, so right before the popover appears on screen:

    
     monitor = NSEvent.addGlobalMonitorForEventsMatchingMask([NSEventMask.LeftMouseDownMask, NSEventMask.RightMouseDownMask], handler: handler)
    

I ask the system to send me mouse down events (for either right or left mouse button). The system won't send you events for clicks that happen inside the window of your application, but that's exactly what I wanted there. I wanted to be able to close the popover when the user would click on anything else. Mac OSX would close the popover for you if the user clicks again on your menubar icon but if the click is anywhere else the popover would stay on screen and you would need to click on the menubar to close it. A Terrible user experience.

Removing the event listener seemed to remove the hang (at least for the few testers that had the problem before and were king enough to try it out). But as I said before I really didn't want to not have a way to close the popover. The solution is not as good as before since the window needs to be in focus for it to work, but it works.

    
            self!.popover!.behavior = NSPopoverBehavior.Transient
    

Yes, I wrote 100+ lines of code to implement the event handler myself to find out that NSPopover already implemented something pretty close to it for free. Life as a Developer...

Again, as I said in the patch notes Thanks everyone for the system traces, the willingness to test out the betas and most of all the understanding as I worked on the Issue.

Both the version on the Mac App Store and the Direct Version that are live already contain the fix.


[0]: /projects/mac/iplocation/