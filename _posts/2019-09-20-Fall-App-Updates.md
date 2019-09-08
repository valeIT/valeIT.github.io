---
layout: post
title: Fall App Updates
date: 2019-09-08 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---


I've been hard at work this summer to update most of my apps to iOS 13. Most of them are minor updates, but there are few major ones as well.

You can find the patch notes for each in the [patch notes][1] section of the website.

Here I'm not going to go through all the changes, but I'm going to highlight the major ones.

# New Apps

If you're subscribed to my [newsletter][4] stay tuned. In the next few days you will get the possibility to join the beta of Teria and Dreamer.


## Writing

Teria and WriteRise are both related to writing, but they are their own separate entities that try to do two different things. I will explain more in the mail but here's a short taste.

### WriteRise
[mac OS application]

WriteRise automatically tracks your writings during the day grouped by application. At the end of the day, week, month or year you can look back at how much you've written each day.

After a long alpha period WriteRise is now in beta. The app is stable and I've been using it for the past 6 months. The UI can still be improved but the functionality is there.

You can find the [devlog here][20].

Full Patch Notes:
- [Patch Notes][40]

### Teria
[iOS and Android application]

Teria is a minimal note taking app that opens directly into the editor ready to type in. I use it to jolt down ideas all the time. On top of that it offers a calendar with streaks to see how much you've written each day.

Full Patch Notes:
- [Patch Notes][21]
- [Introducing Teria][39]

## Dreamer
[iOS application]

Dreamer uses an open source machine learning algorithm to let your phone dream on your photos.

You can use Dreamer by browsing your local photo gallery or using Google Photos*. Please be wary that Google Photos support is experimental and might be removed in a future version. For more information you can read [the article about it][7].

As with everything I work on privacy is paramount. Everything is local to the device. Nothing is ever seen by us nor uploaded to any kind of server.

We collect anonymized statistics to see which filter is the most popular without tracking anything about your session. Your session is stored on the device only and it is only used to authenticate towards Google and Apple servers and is never sent to anyone.

Full Patch Notes:
- [Patch Notes][22]

# Shine
[iOS application]

Shine is a super minimalistic Weather app with a carefully crafted design. Everything from the icon to the app's content has been crafted to be delightful.

Shine only has one purpose: Showing you the weather for your current location packaged in a deeply appealing format. Nothing more, nothing less.

Because of that you might find that it lacks a lot of features from other competing applications. It does not offer any way to add more than one location. It does not offer graphs or fancy visualizations. That is by choice.

Full Patch Notes:
- [Patch Notes][23]

# Updates

I'm not going to go into details on the updates since they would be too many.

Here's the major ones:

## SWTOR Calculator

This is the only breaking change of this round of updates.

The update for the [SWTOR Calculator][2], as it clearly states on the patch notes before downloading it, is going to **delete your old data**. The underlying data model has changed too much to perform a proper migration. You may also be prompted to restore purchases to unlock the ad free version.

This allows for the ability of choosing different version of the dataset to use in the future without losing all of the custom characters. We had to choose between always deleting all of the custom characters once switching to a different dataset or always only allow the latest version. We chose to push this transition now instead of later when we'll be forced to do it anyway.

The average user only has a few custom characters saved so it should not be too much of a problem, but it is not ideal. We are sorry that it came to this. Mind that if you do not want to lose your custom character for the times being you can choose not to upgrade. Everything will work as before, but you will miss out on the new updates for iOS 13 and beyond.

Full Patch Notes:
- [Patch Notes][3]

## Minimal Counter

Sync is back!

I've had to remove sync a few years ago due to Parse shutdown. I've now added it back using a custom solution.

If you already have the full version your existing counters will start syncing automatically. If you're on the free version instead as soon as you upgrade sync will start
seamlessly.

Everything should work as before since I've tried to keep the behaviour as close to the original version as possible. You can find more information about it [on the sync announcement post][6] from version 1.5.

Full Patch Notes:
- [Patch Notes][24]

## Other

In no particular order

- [LiteChecker][25]
- [DogeChecker][26]
- [BlackChecker][27]
- [CryptoChecker][28]
- [County][29]
- [Free My Desktop][30]
- [InstaCamera][31]
- [InstaVideo][32]
- [IPLocation][33]
- [Percentage Change][34]
- [Password Generator][35]
- [Tic Tac Toe][36]
- [Tickery][37]
- [Translatory][38]

[1]: /apps/patchnotes
[4]: /newsletter
[2]: /apps/ios/swtorcalculator
[3]: /apps/patchnotes/swtorcalculator
[6]: {% post_url 2016-01-01-Minimal-Counter-1-5 %}
[7]: {% post_url 2019-09-20-Google-Photos-API %}
[20]: {% post_url 2018-11-22-writerise %}
[21]: /apps/patchnotes/teria
[22]: /apps/patchnotes/dreamer
[23]: /apps/patchnotes/shine
[24]: /apps/patchnotes/minimalcounter
[25]: /apps/patchnotes/litechecker
[26]: /apps/patchnotes/dogehecker
[27]: /apps/patchnotes/blackchecker
[28]: /apps/patchnotes/cryptochecker
[29]: /apps/patchnotes/county
[30]: /apps/patchnotes/freemydesktop
[31]: /apps/patchnotes/instacamera
[32]: /apps/patchnotes/instavideo
[33]: /apps/patchnotes/iplocation
[34]: /apps/patchnotes/perchangecalculator
[35]: /apps/patchnotes/passwordgenerator
[36]: /apps/patchnotes/tictactoe
[37]: /apps/patchnotes/tickery
[38]: /apps/patchnotes/translatory
[39]: {% post_url 2019-09-20-Introducing-Teria %}
[40]: /apps/patchnotes/writerise