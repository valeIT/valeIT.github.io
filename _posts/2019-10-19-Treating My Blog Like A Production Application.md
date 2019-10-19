---
layout: post
title: Code Review For My Blog
date: 2019-10-19 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Writing, Programming]
image:
image2:
author: Valentino Urbano
---

# Treating My Blog Like A Production Application

I've decided to do code review for my writing with my wife. I'm going to teach my wife how to use Github at a basic level and in exchange she will do code review on my blog posts. I'd obviously welcome everyone to check every pull request and comment on each article.

For now the plan is as follows:

I will always try to stay one day ahead in the writing process so I merge the pull request and publish the topic for today while at the same time opening a new pull request for the next day post. Obviously this does not mean that there will be only one pull request open at any given time. I might publish a post and only the morning after open the new pull request. But this is the basic idea on how it is going to work.

To force me to do that I've enabled rules to forbid push to the protected branch (master) that force 1 reviewer to give approval of each pull request. This may be too restrictive, but with time we can see if it can be scaled back in the future. I have also required the page to build successfully before each merge, but I haven't enabled CI.

My continuous integration script is checking for a lot of things, including that external links do not 404 for example. That makes it highly likely that something will break every once in a while as a site I link goes offline during the check or it shut down and I don't want that to block a build. On the other hand I don't want to remove those checks since they're useful to get a report on when needed.

Edit: I've enabled continuous integration, but I have removed all the checks that are outside of my control. I can now run those checks manually using the command line from my local machine if I wish to do that

![Protected Branch](assets/article_images/2019-10-18-o-21.22.22.png)

# [Open Pull Requests][1]

[1]: https://github.com/valeIT/valeIT.github.io/pulls
