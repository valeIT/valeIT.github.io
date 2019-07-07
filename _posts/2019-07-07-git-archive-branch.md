---
layout: post
title: Archive A Branch In Git Without Losing Any History
date: 2019-07-07 18:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

I've been working on a few feature branch that is ready to be merged into master. I like merging them with one commit and not rebasing them since I want to have one commit for each feature in master, but I would also like to keep the history intact. We can get that by keeping the branch around. I know that this branch is dead for the time being though, no new code is going to be committed to it for a while, if ever. It would be nice to archive the branch and later on, if I need to either check the history related to it for any reason or start working on it again I could unarchive it and continue working.

Tagging the head of the branch saves it even if we delete the branch afterward. Tagging it as "archive/" is a nice idea not to get confused. It is obvious by the name of the tag. You can also add a description if you need to add some additional information.

```
git merge <branchname> -m "Merge featureA"  #merge into develop or master
git tag -a archive/<branchname> -m "Optional Description" <branchname>  #tag the branch for archive
git branch -d <branchname>  #delete the branch, but keep the tag for later
```

Later on, we can restore it by checking out the tag onto a new branch:

```
git checkout -b <branchname> archive/<branchname>
```

It is interesting to notice that this behavior of archiving a branch is present and normal in mercurial by running archive:

```
hg archive --rev <branchname>
```


*Source:*

[How can I archive git branches?][1]

[1]: https://stackoverflow.com/questions/1307114/how-can-i-archive-git-branches