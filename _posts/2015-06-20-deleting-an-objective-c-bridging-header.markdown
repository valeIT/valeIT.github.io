---
layout: post
title: Deleting an Objective-C bridging header
date: 2015-06-20 13:14:49.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

After you delete a bridging header in Xcode you must go back to

    Your Target -> Build Settings

and check for "Objective-C bridging header" --- you can use cmd+f to search for it.  
Delete the entry for the header file.

![Click on the Bridging header and press delete]({{ site.baseurl }}/assets/article_images/deletingObjCBridging.png)

Click on the Bridging header and press delete

Build again and the error will disappear.