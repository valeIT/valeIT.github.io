---
layout: post
title: Delete local branches after merging with remote - Git
date: 2019-12-23 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

*[For some background on the setup of the website you can check this out first.][2]*

While having [a new branch and related pull request][1] for each new article is great it also causes a few problems. Mainly the proliferation of dead merged branches on your local machine.

## Too many branches

On Github this is not a problem since a bot takes care of deleting the remote branch when it gets merged into master, but on the local machine you're supposed to do that manually. While this is generally the best approach and it makes the most sense since you're supposed to double check that you really merged one branch before merging it, in this specific case I only create a branch with the purpose of pushing it to a remote since I keep my drafts in a different (private) repository.

What I really needed was for a quick and easy way to delete all the branches that have already been merged.

Fortunately you can do that with a semi-oneliner:

```
git checkout master && git pull origin master && git fetch -p && git branch -d $(git branch --merged | grep master -v)
```

The command will delete all the local merged branches apart from the master branch.

[1]: {% post_url 2019-10-23-Automatic-Pull-Request-Management %}
[2]: {% post_url 2019-10-19-Treating-My-Blog-Like-A-Production-Application %}
