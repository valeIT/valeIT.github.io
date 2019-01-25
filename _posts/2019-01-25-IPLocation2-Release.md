---
layout: post
title: IPLocation 2 - Now Live
date: 2019-01-25 07:20:00.000000000 +01:00
type: post
published: true
status: publish
categories: [Me, Tech]
image: /assets/article_images/iplocationScreenBeta.jpeg
image2: /assets/article_images/iplocationScreenBeta.jpeg
author: Valentino Urbano
---

IPLocation 2 for Mac is now shipping!

You can find out more on the [IPLocation 2 page][4]. You can also download it [from the Mac App Store][5].

This major update is the best IPLocation yet and is the result of months of development, and design. I hope you'll love it!

It had been 3 years since IPLocation 1 shipped and I shifted most of my focus to iOS. IPLocation didn't need much maintenaince, it was feature complete and worked well for its use case, but it could be much more. It was time to come back to the Mac.

### What's New

I've made a short video that showcases IPLocation for new and old customers along with all the new features of IPLocation 2. Let me know what you think!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Bq_qGeKXC9g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Let's start with what everyone's most interested in, an overview on the new features:

### New Features

- A whole new History View to see a complete timeline of your IP changes over time with all the information you care about (like location and date).
- An improved map view with more details
- An updated UI that supports Dark Mode on macOS Mojave
- Ability to hide part of the IP Address you don't want to show

Check the full [changelog][2] for more details.

### OS Support + Mojave

IPLocation 2 comes with full support for Mac OS Mojave and Dark Mode, but without letting anyone behind. IPLocation 2 supports all the way back to mac OS 10.11 and I plan on keep supporting older versions of the OS for as long as I can.[^1]

### Pricing, Discounts, and Upgrades

IPLocation 2 normal price is 24.99$, but until February 1st you can have it for the launch price of 20.99$!

Note: If you've purchased IPLocation 1 after January 1st 2018 and before the release of IPLocation 2 (October 26th 2018) you can get IPLocation 2 for free. This special offer applies to both users of the direct version and the Mac App Store version of IPLocation 1. Just contact me via [email][3] with your proof (and date) of purchase and I'll get it sorted out for you in no time.[^2]

Volume discounts are available (contact me via [email][3]). Unfortunately I'm not able to offer educational discounts.

### What's next

In short: tweaking and enhancements.

More in the details: more customization options and improvements around history.

### Support

Customer support is [always available][1]. I try my best to respond in a timely fashion, but since I'm a one man shop with multiple apps and a freelance business on the side I can't assure response times.

### More details

On top of new features IPLocation 2 fixes more than 20 minor issues, and adds a vastly improved way to get your location data.

1. History View
   The history view keeps track of all of your connections. You can easily sort them by date, ip address and more.
2. Map View
   The map view is a fully featured map that you can pan and zoom. Please note that the location that the ip address exposes is generic.
3. New Settings
   You can now hide part of your ip address from settings. It will hide the last 2 blocks of the address for both IPV4 and IPV6.

### Privacy

I deeply value privacy, that's why History is completely local. No history data is sent to my servers. You can also export all of your data from the menu.

### Feature By Feature

And now a deep dive analyzing the major news about this release.

#### The menubar icon

The menubar icon shows the country you're browsing from. The icons come in 2 flavours. You can show the hidden setting to switch between them by [REDACTED].[^3]

IPLocation 2 checks for IP changes in the background and updates the icon, on top of sending you a notification if you so choose.

#### The popover

From the menubar, once you click on the flag, IPLocation will load a popover with a map and all the information it could gather about your IP Address.

Plase note that coordinates from IP addresses are not precise, for that reason the zoom in the map is kept at around 20km (12 mi). You can zoom in and out and pan the map as you like though.

From the popover you can access the menu which will lead you to both settings and the history panel.

#### Menu

The menu includes information about your internal IP Address. Please note that it will show only the first internal IP address it finds, even though you could have more than one.

Advanced users can choose to copy to your clipboard all you internal IP Addresses instead of the first one. A short guide can be found in the [appendix](#appendix).

- NEW: IPLocation adds support for IPV6 internal IP addresses

##### Internal IP Address

IPLocation will show the main internal ip address if there are multiple. You can always see them all by toggling the option.

#### History

Delete single logs by selecting them and pressing backspace. Easily sort them based on location, ip address or date.

### Appendix

#### Multiple Internal IP Addresses Short Guide

<a id="appendix"></a>

To show multiple internal IP Addresses you need to edit the preferences from `defaults`:

1. Open Terminal.app
2. Run `defaults com.valentinourbano.IPLocation2 UserDefaultsMultipleInternalIpsSecret true`

That's it. The next time you copy your internal IP Address you will find a list of IP Addresses separated by commas.

To turn it back off and only copy the first one:

1. Open Terminal.app
2. Run `defaults com.valentinourbano.IPLocation2 UserDefaultsMultipleInternalIpsSecret false`

### Feedback

Thanks for sticking until the end. If you have any feedback at all let me know via [email][3] or on [twitter][6].

You can also check out [Free My Desktop][7], it's a completely free Mac app that hides your desktop and enables you to create beautiful screencasts and screenshots.

[1]: /support
[2]: /apps/mac/patchnotes/iplocation
[3]: /about
[4]: /apps/mac/iplocation
[5]: https://itunes.apple.com/us/app/iplocation-2/id1438343930?&at=1010lHG?mt=8
[6]: https://twitter.com/valentinourbano

[7]: {% post_url 2018-09-30-Free-my-desktop-mac-app %}

[^1]: Until I need to use some features that require a minimum OS version or Apple stops supporting it.
[^2]: You will receive a free copy of IPLocation 2 on the Mac App Store.
[^3]: It's not too hidden so shouldn't be super hard to find out. Let me know via [email][3] if you do find out!
