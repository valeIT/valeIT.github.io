---
layout: post
title: How URLs Are Becoming The Latest Hot Target In Phishing Attempts
date: 2019-01-17 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

[Unicode Security Considerations][0]:

> To further complicate matters, even when the user looks at the actual URL, the computer and user may perceive the URL differently. The Unicode character set includes many characters that look similar or identical to common English letters. For example, the Russian glyph that is pronounced like “r” looks exactly like an English “p” in many fonts, though it has a different Unicode value. These characters are referred to as homographs. When web browsers began to support internationalized domain names (IDN), some phishers set up websites that looked identical to legitimate ones, using homographs in their web addresses to fool users into thinking the URL was correct.

Browsers should warn the users about ambiguous characters in URLs for the top few million Alexa websites (the algorithm should be a bit more complicated than that, but just to give the gist of it). Especially since phishing using this method is becoming more and more common and its usage is just going to increase with time.

The problem is that it can't be just an organ from the US (or any single country) deciding which url is ambiguos since it varies so much between languages and alphabets.

[0]: http://www.unicode.org/reports/tr36/tr36-14.html
