---
layout: post
title: Don't think about scaling too early
date: 2018-12-09 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

Often times I too come victim of overengineering a system too much.

## Scale as needed

Nowadays most servers are on VMs that can be scaled up and down as needed. Make good use of it.

You can do 90% of it by just upgrading the machine. If you really need to fix bottlenecks you either:

- **Got a lot of traffic**

So if you're running a SaaS money to hire someone out to fix it is not going to be a problem)

- **Your system was badly designed from the get-go**

Even if you shouldn't overengineer. You cannot skip the step of preparing a detailed roadmap and specifications of the system.

If you skip this step you'll lose a lot of the time rewriting and scrapping code you spent time writing in the first place.

Read more about it on my article about [designing a system][1].

## Static Sites

Another great way not to have any problem scaling is designing your website to be completely static. If your site is based on content that is not user-generated (a blog, a news publication or even an online shop) and doesn't need a database having a site that doesn't have a server might be the right option. Using [Netlify][2] or [Cloudflare][3] cloud functions you can even emulate part of the server component without really having one.

_Scaling the hardware is usually cheaper than engineering time and this will keep being the case in the future. Hardware cost are going down every year._

[1]: {% post_url 2018-12-03-design %}
[2]: https://www.netlify.com/
[3]: https://www.cloudflare.com/
