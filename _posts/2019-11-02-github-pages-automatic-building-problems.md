---
layout: post
title: Automatic Build Problems on Github Pages
date: 2019-11-02 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

It has been a while since the building process was not working properly. The pull request gets merged into master, but Github Pages is not building. I thought that there were some issues with the files, but I had tried it locally multiple times without issues and also CI was showing no build problems.

So I opened a ticket, expected it to not get an answer for a while. Thankfully the support at Github is great and they got back to me quickly with an answer I did not expect. Merges from bots do not trigger a build.

This means that I can no longer use GitHub pages to serve my website and need to migrate to something else.

The obvious choice would be Netlify. I'm using it for [Learning Flutter][1] and it is great. The problem is that the monthly build limit is really little, especially considering that the site gets built multiple times a day. The build itself does not take a very long time, GatsbyJS takes much longer, but it is getting new builds often so it adds up. It could probably be worth if the site would get further optimized for buildtime, but it is not something I'm interested in doing unless this is the only viable option.

[New Update][2]

[1]: https://learningflutter.com
[2]: {% post_url 2019-11-03-migrating-to-gitlab %}