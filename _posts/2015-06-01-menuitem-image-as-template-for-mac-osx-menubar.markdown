---
layout: post
title: MenuItem Image as Template for Mac OsX MenuBar
date: 2015-06-01 17:34:59.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

Every menubar app has its own custom icon, usually, the image is white if the theme of the menubar is set as dark and black vice-versa. It's important to do that to maintain consistency between every icon in your menu bar so that it doesn't stand out, in a bad way. But there are times when you really need to use a custom color (for example a backup app might need to signal that the backup failed with a red dot or something similar), in this case, you just need to specify an attribute on your image before setting it as the icon.

    image.setTemplate(true)

Just remember to really make sure that interrupting the visual flow will be worth it.