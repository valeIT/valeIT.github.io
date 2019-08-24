---
layout: post
title: When to use Git Merge VS Git Rebase
date: 2019-08-12 22:28:05.000000000 +01:00
type: post
published: true
status: published
categories: [Programming]
image:
image2:
author: Valentino Urbano
---
# When to Rebase VS Merge in Git

Rebase and Merge have 2 different places in my workflow and they should never clash together. I've heard of teams using merge exclusively (my current team), and teams using rebase exclusively. Neither is a bad idea and obviously you should use whatever your team is using if you're working with others. If you're working on your own though you should take the time to understand the differences between them and figure out which way of working you prefer.
Rebase is to have a clean flow of changes, one commit after the other on one branch. Nothing more, nothing less.
Merge is to have a clear origin for the commits that come from other branches so you know how and when they ended up in the main branch (your history).
Both hve their place. In your local copy you can edit as you much as you like so rebase is king. You can clean your current working copy clean as you work on multiple branches and rebase them on top of each other as they never existed in the first place. Once you push to a remote though you need to start being careful since now you can't keep rewriting history as you did on your local copy.
I found that the following strategy joins the best of both words:
- Merge for feature branches and any other work that is useful to have its history contained and easy to look at if the need arises. Other example could be a hard bug to fix, ...
- Rebase for all the cases where you don't care about preserving the branch in favor of keeping the history of the commits linear.