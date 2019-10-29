---
layout: post
title: Automatic Testing On My Blog
date: 2019-10-29 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

[I've written how I'm running my blog as a production application][2] [multiple times][3].

It has now been a few weeks and I'm liking the process. Using bots has been the real key into making it work for more than a few days. If I had to do everything manually it wouldn't have been worth it...

I would have wasted so much time on gatekeeping:

- Merging pull requests
- Assigning reviews
- Performing checks

The time commitment has surely increased, but it is still not an unsurmountable amount. And what I got in return is having every single post checked by someone else and also have multiple automated checks before anything gets merged into the master branch.

## Continuous Integration

I took a peek at the Code Integration statistics and was surprised by how much it is used. I'm using [Travis CI][4] which is free for Open Source applications. It spent almost 400 minutes to run test last week alone!

The record last week was 50 builds + test in one day. A lot of that activity is caused by bots, but some are manually triggered as well:

- automatic pull request merging on success triggers a test
- automatic pulling master into every branch that has a PR open triggers a build for each pr
- each push to any branch with an open PR triggers a build

![](/assets/article-images/travis-ci-2019-10-27.png)

But that's not all and it is surely NOT the most builds per day to date. If you zoom out there was one day with more than one hundred builds. Don't ask why that is, I have no idea.

![](/assets/article-images/travis-ci-2019-10-27-2.png)


Bots and CI / CD take some time to set up, but you will get back that time soon enough and over time it compounds.


[2]: {% post_url 2019-10-19-Treating-My-Blog-Like-A-Production-Application %}
[3]: {% post_url 2019-10-23-Automatic-Pull-Request-Management %}