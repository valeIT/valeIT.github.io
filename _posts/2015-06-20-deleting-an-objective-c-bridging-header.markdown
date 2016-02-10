---
layout: post
title: Deleting an Objective-C bridging header
date: 2015-06-20 13:14:49.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
tags: \[\]
meta:
\_wpcom\_is\_markdown: '1'
\_edit\_last: '1'
author:
login: Myshar
email: mysh@myshar.org
display\_name: Valentino Urbano
first\_name: ''
last\_name: ''
---

After you delete a bridging header in Xcode you must go back to

    Your Target -> Build Settings

and check for "Objective-C bridging header" --- you can use cmd+f to search for it.  
Delete the entry for the header file.
![Click on the Bridging header and press delete]({{ site.baseurl }}/assets/Screen%20Shot%202015-04-01%20at%2013.55.07.png)

Click on the Bridging header and press delete

Build again and the error will disappear.