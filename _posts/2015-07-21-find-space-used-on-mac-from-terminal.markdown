---
layout: post
title: Find Space Used on Mac from Terminal
date: 2015-07-21 16:49:38.000000000 +02:00
type: post
published: true
status: publish
categories:
- Tech
author: Valentino Urbano 
---

The following only lists the space taken up by directories (in gigabytes). Just open the terminal and paste it in. If you want to show hidden folders as well use

    sudo du -sg /*

and type your password, otherwise use:

    du -sg /*

If you want a more human readable format (with GB, MB, etc. spelled out):

    sudo du -sh /*

There are other arguments apart -sg and -sh to use. From [Wikipedia][0]:

* a - In addition to the default output, include information for each non-directory entry
* c, display a grand total of the disk usage found by the other arguments
* d \#, the depth at which summing should occur. -d 0 sums at the current level, -d 1 sums at the subdirectory, -d 2 at sub-subdirectories, etc.
* H, calculate disk usage for link references specified on the command line
* k, show sizes as multiples of 1024 bytes, not 512-byte
* L, calculate disk usage for link references anywhere
* s, report only the sum of the usage in the current directory, not for each file
* x, only traverse files and directories on the device on which the pathname argument is specified.


[0]: https://en.wikipedia.org/wiki/Du_(Unix)