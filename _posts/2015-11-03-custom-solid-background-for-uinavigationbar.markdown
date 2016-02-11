---
layout: post
title: Custom Solid Background For UINavigationBar
date: 2015-11-03 16:37:41.000000000 +01:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

For the latest version of [Minimal Counter][0] I wanted to have a solid background across the app.

I'm using of course UIAppearance(). If you simply set a background color it'll get filtered by iOS automatically and will look nothing like the actual color you used so I just created a 1px1p image of the color that I wanted and set it:

    
      UINavigationBar.appearance().translucent = false
      UINavigationBar.appearance().setBackgroundImage(UIImage(named: "bg"), forBarMetrics: UIBarMetrics.Default)
    

(Remember to set translucent to no as well).


[0]: http://www.valentinourbano.com/apps/ios/minimalcounter