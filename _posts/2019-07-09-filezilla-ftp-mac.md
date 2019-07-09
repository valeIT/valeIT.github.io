---
layout: post
title: Stale Files Using Filezilla
date: 2019-07-09 18:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

_We didn't have much time to investigate the behind the scenes of this problem so everything is superficial and only based on our obvervations at the moment when it happened._

I had a very weird bug with Filezilla for Mac.

A coworker uploaded a file in a directory that I needed to pull down. I had the window already pointing to the folder waiting for the notification of his upload to pop up. When it did I downloaded the file, but didn't see any changes.
What? The first thing I thought is that maybe he had uploaded a different file by mistake, things that happen. He tried again withe exact same result.

So i started guessing. That maybe filezilla was caching the content of the folder and I simply needed to refresh it to show the update file. A really not ok behaviour for an ftp client in my hopinion, but sort of 'understandable'. SO I refreshed the folder and downloaded the file again. And the exact same thing happened. Again. I also checked if it wasn't just a visual bug and maybe the downloaded file was right, but it was not.

Desperate and without any idea left I force quitted Filezilla and reopened it. Now, finally, the file shown was correct.

After this I can't use Filezilla any longer. My coworker is using the windows version and he says that there it doesn't have this problem so it's probably only a problem in the Mac version. We had problems for months now so it doesn't seems like it is something that slipped in one of the latest patch or something isolated, but it's more likely to be something that was already there and we just never noticed or triggered the exact circumstances to make it happen.

I migrated to Transmit and the problem disappeared. I'm pretty sad since I had been using Filezilla since 2009 and I liked it, but there is no way I can trust it again.
