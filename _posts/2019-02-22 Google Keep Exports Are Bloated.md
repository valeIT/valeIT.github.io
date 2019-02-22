---
layout: post
title: Google Keep Exports Are Bloated
date: 2019-02-22 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image: /assets/article_images/.jpeg
image2: /assets/article_images/.jpeg
author: Valentino Urbano
---

The only way to export a note from Google keep in an automatic way (which does not require you to copy and paste the note manually) is to use Google Takeout (thanks GDPR) to export all your notes.

Unfortunately, the only format available is HTML which would be fine, but it comes with a lot of useless HTML and CSS. I just want my note, but instead of having a file of a few bytes 95% of the file is the HTML and CSS to make it look pretty. I do not care. If I wanted it to look pretty I would have left it on Google Keep or any other app with good design. If I'm exporting something I want the raw data. It is not such a hassle to create a script to simply strip all the notes of the tags and just give back the plain txt, but it shouldn't be a necessity.

Now I realize that notes in Google Keep are not always only txt files, they can include media and with the HTML is a good option. I usually use markdown instead, but I'm biased since probably there are still a lot of Google Keep users that don't know what markdown is and don't want their note to be exported in markdown. The HTML export would have been fine if it did not make the file 10x the size it would have been otherwise. You can keep the file working with just the HTML, sure it won't look as pretty, but if you're exporting it is highly likely that you just want the content, that why I like the websites where they just export a JSON or txt file that I don't have to go back and convert manually to something more suited for its use case.

I don't think that Google did it to create friction, but they just wanted it to look the same as it did in Google Keep, but usability should always come first in its battle on design. Never forget that they should go hand in hand and if it looks good, but its usability suffers it is not such good design after all.
