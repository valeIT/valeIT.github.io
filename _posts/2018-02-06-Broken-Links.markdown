---
layout: post
title: Broken Links
date: 2018-02-06 18:38:01.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
author: Valentino Urbano 
---

After only 2 years a resounding 38 links out of 347 on this site are no longer operational. I'm only counting 404 error — the 301 are way more (around 100), but these are just normal redirects and the links pointing there are still available even though they're somewhere else completely, but the most astounding fact about it is that 30% of them redirects to something different from the original article I once linked to, making them completely worthless. 

In the end the links up and running are only 209/347 (a mere 60.57%) meaning that almost 40%<sup id="r1-100914"><a href="#f1-100914">1</a></sup>
 of all the links are either moved or dead in a mere span of 2 years. That's deeply concerning.

I was able to salvage some of them by using the [web archive](http://web.archive.org/), but even that doesn't work in many cases — like [this one](http://web.archive.org/web/20080905222334/http://www.codeproject.com/dotnet/HackingMd5.asp) for example. Though it made me realize how important such a service can be to the future of the internet with more and more links disappearing into the void each day.

Some food for thoughts.

## Bookmarks 

Apart from the links on my blog I have around a few thousand links on my bookmarklet of choice (or "personal archive" as they like to call it): [Pinboard](http://pinboard.in) and simple PDF files.

**Pinboard:**

There is an option to turn on crawling for every site you archive there so that you have a working version of each page saved for you for 25$/year.

**Keyboard Maestro: <sup id="r2-112914"><a href="#f2-112914">2</a></sup>**

You can also do it manually, if you prefer, using keyboard maestro, just it doesn't work of course unless you are on your mac — or you have the web server enabled (your mac needs to be on though of course).

<code>
When this hotkey is selected: '⌘ ⇧ P'
Select ‘Export as PDF…’ in the Menu ‘File’ in Safari
Type the Return Keystroke
</code>

Nothing else, make sure to select the folder manually before trying it for the first time — or just set up a Hazel rule to automatically move the files from the Desktop (just this case may cause side effects if you work with many pdf so I wouldn't recommend it, unless you make sure to double check which criteria you are using to move the file.

Recently I wrote a script to extract the markdown from a page using Brett Terpstra website APIs. Unfortunately, it doesn't work of https pages (which grow more and more widespread by the minute), if you need HTTPS support consider using 'Save to PDF' from Safari.

Update 02-01-2015 [Dates are EU format of course]:
Lately, the problem is only getting worse. For the 'Reading Materials' column, I have to delete 2 links a week on average because they're 404. And nope the sites are not down because of too much traffic, every other page works, simply the article was deleted. Most of the times there is no way of getting that content back (no Google cache and no Wayback Machine). This trend makes me wonder if I should quote the main points of every link for posterity. I still lean on the nope side since it's supposed to be a list of links with an optional short explanation, not for quoting major parts of the article. You'll notice that I do quotes at times when the content is just so good that I need to. But usually, it won't happen.

Update 2016-03-31:
## Solution

I found a great plugin for Wordpress, called [Amber](https://wordpress.org/plugins/amberlink/), that saves a screenshot of linked articles.

<hr>
<ol class="footnotes">
<li id="f1-100914">
<p>39.4203% to be prcise<a href="#r1-100914">↩</a></p>
</li>


<li id="f2-112914">
<p>Remember to change the standard ... to the one character … (I use a TextExpander snippet for that).<a href="#r2-112914">↩</a></p>
</li>

</ol>

