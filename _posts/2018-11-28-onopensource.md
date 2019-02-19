---
layout: post
title: On Open Source
date: 2018-11-28 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image: /assets/article_images/.jpeg
image2: /assets/article_images/.jpeg
author: Valentino Urbano
---

# On Open Source

_This article only refers to the Javascript ecosystem. Every other language actually include an official standard library and not a crowdsourced one as it is the case with Javascript._

My [article from 2 days ago][1] couldn't come at a more appropriate time.

The popular [event-stream library][2] (downloaded more than 2 million times a week) was given away to right9ctrl[^1] since the original author [dominictarr][4] couldn't maintain it anymore.

right9ctrl added an obfuscated payload to extract the private keys from specific bitcoin wallets and upload it to his servers. [That's a very simplified explanation. For more details check the full issue on Github][3].

## Am I Affected?

First even if you're affected the vulnerability is only targeted of applications that store private keys for Bitcoin.

To find out if your project is using the dependency run:

`cd node_modules && find . -name 'package.json'|xargs grep event-stream`

Version bigger than 3.3.4 and smaller than 4.0 are affected. 3.3.4 and 4.0 are NOT.

**What do to if i'm affected:**

Pin the version number of the dependency to be either 3.3.4 or 4.x. Clear the cache and run `npm install` again.

Most dependencies have already been updated to fix the vulnerability, also npm has blocked the download of the affected versions.

## The Problem

Most people are blaming the maintainer that recklessly and without due diligence gave the project to a random person that asked for it.

I don't agree in the slightest. When you pull in MIT dependencies you're responsible for the dependency. Now we can argue on the fact that it's basically impossible to audit your dependencies unless you are a huge company. That is definitely a huge problem with the current state of the javascript (and more particularly npm) ecosystem. But the problem is with the system itself and not with dominictarr's actions.

This is bound to happen again if nothing changes.

## Where to Go From Here

The solution can only be applied by npm itself in my opinion.

1. It must be impossible to have the source code on Github be different from the minified code.
2. There should be a way to vet maintainers.
3. There should be a way to [support financially open source maintainers][7].
4. Github shouldn't [block transfers of repositories only because the receiving account has a fork][6].

[^1]: That either deleted his profile or got suspended by Github.

[1]: https://200wordsaday.com/words/a-minimal-approach-535bfbea63ece86
[2]: https://github.com/dominictarr/event-stream/
[3]: https://github.com/dominictarr/event-stream/issues/116
[4]: https://github.com/dominictarr/
[5]: https://github.com/right9ctrl
[6]: https://github.com/dominictarr/event-stream/issues/116#issuecomment-441116734
[7]: https://gist.github.com/dominictarr/9fd9c1024c94592bc7268d36b8d83b3a#gistcomment-2769372
