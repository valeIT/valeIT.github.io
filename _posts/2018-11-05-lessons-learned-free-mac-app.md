---
layout: post
title: Tips you need to know before launching an Indie Mac app
date: 2018-11-05 15:20:23.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech, Me]
image: /assets/article_images/Screenshot_2018-11-05_at_13.18.10.jpeg
image2: /assets/article_images/Screenshot_2018-11-05_at_13.18.10.jpeg
author: Valentino Urbano
comment_id: 20
---

Some things you should make sure to do and not to be before submitting your Mac app to the Mac App Store or releasing it directly to your customers.

# Things done wrong

1. **Launch with automatic updates**

I've made the app for me and didn't think that I would ever need to update it since it was feature complete and did what I needed to do. I also decided early on not to feature creep it, to just make it do one thing and one thing only.

There were so many little things I had to change. Not having automatic updates means that I lost 50% of my customers that are stuck on version 1.0 and forever will be.

This is probably the biggest mistake I made. Luckily I corrected it in less than a day releasing version 1.0.1 with automatic updates and a few bug fixes before a huge chunk of traffic from the Product Hunt launch disappeared. But the damage was done. Who would go back to my site to check if there was an updated version? Actually more people than I thought, but still not enough.

2. **Cold emailing publications**

Cold emailing is fine and might work, the problem is that most of it won't work. Even medium publications get so many emails that they just don't have the time for your little new thing. You either need to make it worthwhile to them, either straight up paying them or offering them something unique with a product that holds crazy value or with a good product that has a good discount (10% discount for your readers on new awesome productivity tools that fits your niche perfectly) or you just won't hear back from them. And it's not because they're evil or don't care, it's simply because they materially don't have the time.

What works best is to email small/medium bloggers/public figures in your niche. I've had success email even a few big names in the iOS/Mac development scene mentioning articles they wrote about the problem I solved with the app. I just provided them with a way to make their article better by linking to an easier and free (the free part is important) alternative to what they already suggested.

If your app is not free the barrier is way higher, but if the value is still found people, it will just take more time and persistence.

3. **Not registering a domain**

Having a domain name for your project gives it a professionality that you just don't get if you host it on your personal website as I've always done in the past. It might cost a bit, but with all the new TLDs you can now find good domains (.com and .net are so saturated) and good prices (some domains cost less than 1€ a year for the first year).

# Things done right

1. **Always include a crash reporter and basic analytics**

I noticed that even though most of the users were using Mojave as expected there were still quite a lot of users using old versions all the way back to 10.11[^1]. Supporting old versions, if you can do it without any overhead is worth it. If I didn't know that I'd have probably dropped support sometime in the future, but knowing that I can make that decision knowing that if I ever do it that percentage of my user base won't be able to upgrade.

Another thing worth notice is that probably on other platforms, for example where you have to pay to upgrade or your upgrade path is limited, these numbers are going to be higher. Mac OS stresses you out with lots of popups and the upgrade button is everywhere in the Mac App Store if you're using an old version and still, a lot of people stay on older versions.

You would also never know what problems to address next. If there is a bug that causes 10% of my users to crash on launch I want to know right now and fix it asap. I don't want to wait for someone to open a ticket and try to debug it manually alongside them. it's just wasting everyone's time and delaying the fix.

I also found out that the use case I thought for the app, wasn't really how the app was used out in the wild. The use case for the app was that you would always leave it open and let it run in the background (that's what I do) and you would use it whenever you need it[^2]. Most people just use it for how long they need it and then shut it off. If they need it again, they turn it back on.

2. **Be active during launch and promptly respond to user feedback**

The day I launched I released version 1.0.1. During the next 2 weeks, I released 2 more versions addressing Users Feedback and bug reports.

I also kept the Product Hunt page open and answered fully every single question or concern. Doing so allowed people that were skeptical about something to know why I decided to take some design decisions over others and turned from not being interested in the app to downloading it and installing it on the Mac.

3. **Know when to say no**

I received a lot of niche user requests that didn't really fit the vision I had for what the app should be and do. They were great ideas and probably would have been really useful to the people asking for them. The problem is that they would radically change what Free My Desktop would be. The app is simply being a great way to Free Your Desktop from clutter. Their ideas would turn it into something more, something that it wasn't born for and shouldn't be. This might be a difficult call to make and it's not always right to say no, just remember that it's not always right to say yes either.

**What to find out even more stats about the launch?**

#### [Free My Desktop is an open startup!][0]

_Free Product Idea: Another interesting thing I noticed is that I have some download spikes on some days which I can't explain. I guess the app got featured on some website that drove some traffic, but I will never know where since I simply see it as direct traffic._

[^1]: 10.11 is the earliest version of Mac OS that I support.
[^2]: I optimized it to use the least resources possible for that reason.

[0]: /apps/mac/freemydesktop/open
