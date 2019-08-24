---
layout: post
title: How to use Git Bisect - A guide
date: 2019-08-16 22:28:05.000000000 +01:00
type: post
published: true
status: published
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# Git Bisect

Bugs are an inevitability in software. Sooner or later you will need to track one down and fix it.

When I found one I used to go on treasure hunts to try and pin it down. Commenting code paths to limit the available options and so on. That's a huge unnecessary waste of time.

You can have it way easier by using git bisect. It is going to pin down exactly the commit that introduced the problem so that it is trivial to found (or at least way easier).

For it to work though you need to commit sensibly and often enough. If you've done minimal commits and you don't have 100 file changed per commit it will pinpoint the problematic change. If you haven't it will do the same, but your commit will include so much stuff that even knowing it you're left with a lot of stuff to check out to pinpoint the problem.

To start git bisect run:
`git bisect start`

Before actually starting you need to give git some information about the problem.
Identify a commit where the problem was not present by running:
`git bisect good SHA-1`

And one where it was (usually the last commit in the tree) by running:
`git bisect bad SHA-1`

git will help you to search the problem in all of the commits between these 2 that you selected.

git bisect will now start. It will automatically switch your working copy to a different commit. You can test the application to see if the bug is still present. If it is enter
git commit bad
to tell git that the problem is also present in this specific commit. If it's not present enter
git commit good
to tell it that this specific commit doesn't include the bug.

It will keep testing new commits until it pins down the one that introduced the problem and will let you know its name and SHA-1 so you can look at what changes it introduced.


Once you've finished exit git bisect by running:
`git bisect reset`
