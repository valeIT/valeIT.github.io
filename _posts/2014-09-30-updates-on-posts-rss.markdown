---
layout: post
title: Updates on posts - RSS
date: 2014-09-30 09:08:46.000000000 +02:00
type: post
published: true
status: publish
categories:
- Tech
author: Valentino Urbano 
---

I read (almost) exclusively thorough RSS feeds. It's a great medium, I love its openness and [freedom][0].

The major problem I have is with updates on a post. At times a site I follow updates a post with new details or a correction. If I'm lucky to read the piece after the edit took place it'll be already updated - unless it has been already fetched before the update and I've been without internet connection for a while, but that's rare nowadays. In the other case, when I read it already, there won't be any notification about the change at all.

I see the point of it, it'd need to refetch the whole article for every little change.[^1]  
And what if said update was just a correction to grammar or sentence structure? Does it need to be refetched? And if no, how does a machine understand if it's just a grammar mistake or if it's more important? There should be a way for the blogger to flag whether or not an article gets refreshed on the RSS feed, maybe with an [UPDATED] flare next to the `title` tag. Or even better build something in the RSS specification like a property of the page - to check if an article has been updated since the last fetch, in tandem with something along the lines of `[self.article setNeedsDisplay];` in Objective C - to ask if it needs to be displayed as [UPDATED] or if it's a minor update and there's no need to fetch it.

We'll see what the future brings,but probably nothing is going to change.

---

[^1]: Not to talk about how to display it to the user. Show the full article as new? That's misleading.


[0]: http://cyber.law.harvard.edu/rss/rss.html