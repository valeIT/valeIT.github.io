---
layout: post
title: How To Use Git Reflog
date: 2019-09-17 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

There are times when you make mistakes and delete something important. If you didn't use source control those files would be gone forever with little to no chance of recovery.

Using git, if you've in any way committed them at any point you might be able to restore them. Let's take an example:
One day I was certain I had merged a branch and went to delete it. Sourcetree didn't say that it was not merged (I never force delete unless I'm certain in what I'm doing and anyway never for branches on the remote) and so it was gone.

I went to checkout the branch it was supposedly merged to and didn't see the changes from the deleted branch. Really weird. After fetching from the remote to make sure that I had the latest changes I used reflog to restore the deleted branch.

When you delete a branch you just forget the SHA-1 that identifies the commit at the top of the branch, but if you can find the commit, the branch is still there.

There is a great way to visualize all branches included deleted ones and that's by using `git reflog`.

If you prefer a gui tool instead of one in the terminal, where you can visualize the different branches, you can use `gitk --reflog` instead. I tend to use reflog for simple operations and gitk for more involved ones.

After you find the tip of the branch that you want to restore, copy the SHA-1 of the commit and restore the branch by running
`git checkout -b myDeletedBranch SHA-1`. You also apply the same process to restore single (or multiple) commits by cherry picking their SHA-1 on top of any branch you want to apply them to.