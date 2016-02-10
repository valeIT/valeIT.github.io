---
layout: post
title: UITextView not responding to set textColor
date: 2015-07-27 23:43:47.000000000 +02:00
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

I spent way too long to figure out why a simple UITextView set up from storyboard didn't want to set its text color at all. the fix was pretty easy: Just make sure in Storyboard "selectable" it's set to TRUE.