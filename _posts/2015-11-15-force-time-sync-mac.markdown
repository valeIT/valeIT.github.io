---
layout: post
title: Force Time Sync Mac
date: 2015-11-15 21:48:13.000000000 +01:00
type: post
published: true
status: publish
categories:
- Tech
tags: \[\]
meta:
\_edit\_last: '1'
\_wpcom\_is\_markdown: '1'
author:
login: Myshar
email: mysh@myshar.org
display\_name: Valentino Urbano
first\_name: ''
last\_name: ''
---

At times the clock on my mac goes haywire. Since I'm too lazy to fix it manually i just force the sync to time.apple.com from the terminal:

    
    sudo ntpdate -u time.apple.com
    

Of course you can use aliases to make it even easier.