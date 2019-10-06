---
layout: post
title: Dreamer - Google Photos API
date: 2019-10-05 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# Google Photos API

*I'm building a deep dream app that also works with the Google Photos API. As of the day of writing it is still in development, but the open beta [really early beta, beware] is available on [Testflight][5]. It may be already out by the time you read this.*

*The app does not have write access to your Google Photos account. We only ask for read access to allow you to see the photos.*

The Google Photos API is shrouded in mystery.

Google does not post any pricing anywhere and you need to look yourself to find the page where they discuss the quota limit.

Here's what we need to know:

>General quota limits

>The quota limit for requests to the Library API is 10,000 requests per project per day.

>The quota limit for requests to access media bytes (by loading a photo or video from a base URL) is 75,000 requests per project per day.

The quota is not terribly low so most small apps, like the ones most likely from indipendent developers, should be fine, at least for the start.
We are going to be fine as well for now, but I still haven't decided if using it long term is the right choice or not so it might go away in the future (as stated in the log-in screen).

Even without showing any pricing they let you know that it won't be cheap:

>Requesting additional quota

>The Google Photos partner program is geared towards large consumer applications that require increased quota limits. If you believe your application belongs in this category, express interest in the partner program.


Sources:
[Google Photos API][1]
[Partner Program][2]
[API Quota][3]
[Dreamer][4]
[Dreamer Testflight][5]

[1]: https://developers.google.com/photos/
[2]: https://developers.google.com/photos/partner-program/overview
[3]: https://developers.google.com/photos/library/guides/api-limits-quotas
[4]: /apps/patchnotes/dreamer
[5]: https://testflight.apple.com/join/iFmdxm8Y