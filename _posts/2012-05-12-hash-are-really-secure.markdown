---
layout: post
title: Hash are really secure?
date: 2012-05-12 15:55:24.000000000 +02:00
type: post
published: true
status: publish
categories:
- Tech
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

According to [Jeff Atwood][0] they aren't:

> * Magnus Daum and Stefan Lucks have created [two PostScript files with identical MD5 hash][1], of which one is a letter of recommendation, and the other is a security clearance.
> * Eduardo Diaz has described a [scheme][2] by which two programs could be packed into two archives with identical MD5 hash. A special "extractor" program turn one archive into a "good" program and the other into an "evil" one.
> * In 2007, Marc Stevens, Arjen K. Lenstra, and Benne de Weger used an improved version of Wang and Yu's attack known as the [chosen prefix collision][3] method to produce two executable files with the same MD5 hash, but different behaviors. Unlike the old method, where the two files could only differ in a few carefully chosen bits, the chosen prefix method allows two completely arbitrary files to have the same MD5 hash, by appending a few thousand bytes at the end of each file.
> * Didier Stevens used the evilize program (below) to create [two different programs with the same Authenticode digital signature][4]. Authenticode is Microsoft's code signing mechanism, and although it uses SHA1 by default, it still supports MD5\.
> 

There will always be someone clever enough to break every piece of software you make, not matter which trick you use, we can just hope that we are too small to be noticed.


[0]: http://www.codinghorror.com/blog/2012/04/speed-hashing.html
[1]: http://web.archive.org/web/20071226014140/http://www.cits.rub.de/MD5Collisions/
[2]: http://web.archive.org/web/20080905222334/http://www.codeproject.com/dotnet/HackingMd5.asp
[3]: http://www.win.tue.nl/hashclash/SoftIntCodeSign/
[4]: http://blog.didierstevens.com/2009/01/17/playing-with-authenticode-and-md5-collisions/