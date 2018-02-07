---
layout: post
title: Comments Back On
date: 2018-02-07 08:38:01.000000000 +01:00
type: post
published: true
status: publish
image: /assets/article_images/photo-261579.jpeg
image2: /assets/article_images/photo-261579.jpeg
categories: [Tech]
author: Valentino Urbano 
comment_id: 8
---

I'm experimenting with turning back comments on selected articles. It applies to handpicked posts and you can comment using Github Issues.

#### Artsy

[Huge thanks to Artsy for the idea][0]. Make sure to [take a look at their guide][1] on how to use Github Issues as a platform to host comments. You can also [take a look][3] at the pull request for the change.

## A guide

>The general concept is that you have some JavaScript in your page which requests a list of comments from GitHub. These are available as a JSON API, you can grab that then style the results. Sounds easy right?

1. [Get `gh-commentify`][2]
2. Go to the Github profile of an account that has repo access and generate an API Key. Put that and the Github account name in Heroku when asked. Deploy and take a note of the URL.
3. Create the HTML of the comment as you want it. You can take a look [here][4] for ideas. Put the file in `_includes/gh_comments.html`. If you build your own HTML, make sure to include the javascript from the link.
4. In your article template include the comment:

<script src="https://gist.github.com/valeIT/6c7269153bb723fc36f0dc595d27fead.js"></script>

5. If you want to style your comment add a .css or .scss file on .comment
6. Open an Issue on the repo and copy the Issue id.
7. Add `comment_id ` in your YAML for the post with the Issue id. If it's not present comments will be off. 

## Accountability

The problem I had with comments was lack of accountability and spam. This system resolves both of them.

It supports markdown and as a developer, you can use the same flow you use normally on Github.

[0]: https://github.com/artsy/artsy.github.io
[1]: http://artsy.github.io/blog/2017/07/15/Comments-are-on/
[2]: https://heroku.com/deploy?template=https://github.com/orta/gh-commentify
[3]: https://github.com/artsy/artsy.github.io/commit/32efa49c24f55d4e603e056fc1eefc43e6e06ead
[4]: https://github.com/artsy/artsy.github.io/blob/32efa49c24f55d4e603e056fc1eefc43e6e06ead/_includes/gh_comments.html