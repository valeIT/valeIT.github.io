---
layout: post
title: Dreamer - Google Photos API
date: 2019-10-04 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# Google Photos API

The Google Photos API is shrouded in mystery.

Google does not post any pricing anywhere and you need to look yourself to find the page where they discuss the quota limit.


Here's what we need to know:

>General quota limits

>The quota limit for requests to the Library API is 10,000 requests per project per day.

>The quota limit for requests to access media bytes (by loading a photo or video from a base URL) is 75,000 requests per project per day.

The quota is not terribly low so we should be fine.

Even without showing any pricing they let you know that it won't be cheap:

>Requesting additional quota

>The Google Photos partner program is geared towards large consumer applications that require increased quota limits. If you believe your application belongs in this category, express interest in the partner program.

The app does not have write access to your Google Photos account. We only ask for read access to allow you to see the photos.

Sources:
[Google Photos API][1]
[Partner Program][2]
[API Quota][3]
[Dreamer][4]

[1]: https://developers.google.com/photos/
[2]: https://developers.google.com/photos/partner-program/overview
[3]: https://developers.google.com/photos/library/guides/api-limits-quotas
[4]: /apps/patchnotes/dreamer