---
layout: post
title: Rebase A Specific Number Of Commits in Git
date: 2019-10-13 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

If you don't want to rebase the whole branch you can decide to rebase a specific number of commits only.

## How To Use It

Using it is really similar to rebase. Make sure you first check out the branch you want to rebase and run:

`git rebase -i HEAD~18 --onto Test;`

Where Test is your destination branch and 18 is the number of commits you want to rebase.

From there you can proceed by doing the rebase as you would any other rebase. Be aware that this will just rebase those numbers of commits so if you get the number wrong you will lose the other commits and you will need to use [git reflog][1] to get them back if you need them. So it is a good habit to check the list of commits to confirm that the first and last commit on the bunch are the ones you want before starting the rebase operation.

## Where To Use It

This is really useful if you want to rebase a branch with very few commits on top of a totally unrelated branch without having to merge the whole tree.

You cna obviously go the manual route and just cherry pick the commits you want if you so prefer, but I find using rebase to be generally faster even in these cases, assuming you want to actually rebase the branched not just pick commits to merge into a different branch altogether.

[1]: {% post_url 2019-09-17-git-reflog %}
