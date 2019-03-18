---
layout: post
title: Markdown Love - 4 Months Later
date: 2019-03-15 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

[Markdown Love][0]

Building a complete app is less than 24 hours has been a huge undertaking, especially considering that to challenge myself I decided to do it on a totally new stack (I had used MySQL before), but nothing of the rest. Despite that, I managed not only to launch the app in time (with all the functionalities I wanted in a 1.0), but also managed to add the stripe integration for monetization.

# My Use

4 months later I'm still using the app sporadically for my offline bookmarking habit. I love to have files in markdown, they're great to work with and can be easily converted to most file types, but they're just text files which are compatible with any editor.

# Commercial Viability

It still didn't generate a single sale, but it is to be expected. The free plan is pretty reasonable and most people don't really need that many articles. Also, the fact that it is just a REST API limits the market to only developers (developers who love markdown, which I would say is most developers, but it is still a subset of a subset).

That's all I needed the app for so, apart from minor updates I haven't added any big features. I've made small improvements and added a lot of metadata to the response (images, author name, dates,...).

# Tech

As of tech, I don't regret the choice.

- [Digital Ocean][2]
  I've loved the Digital Ocean VPS I bought for the project and I plan to use it for other projects as well since it can handle way more traffic than what it is handling now, especially with cloudflare in front of it aggressively caching most static content.
- [Cloudflare][3]
  I've always loved Cloudflare, but after using it for markdown.love I'm liking it even more. It is super easy to set up and on top of providing real analytics (Google Analytics underreports by 70%/80%! since everyone nowadays is using a content/ad blocker), it makes you save money by caching your website when needed. It also provides free SSL certificates, but I didn't need it since certbot makes it super easy to generate a certificate if you have SSH access to your server.
- [Laravel][4]
  I've used PHP for a while, but it always felt cumbersome. Laravel totally changed this perception. Working with Laravel is a breeze and everything you need to do can be done so easily and in an elegant way. The deployment process is a bit tedious, but nothing extremely complicated.

# The Future

I'm planning to keep improving markdown.love in the coming months, but since the current state is totally fine for my daily use I'm not expecting big features or overhauls. If you'd like something new I'm [always open to suggestions though][1]

[0]: https://markdown.love
[1]: http://www.valentinourbano.com/support
[2]: https://www.digitalocean.com/
[3]: https://www.cloudflare.com/
[4]: https://laravel.com/
