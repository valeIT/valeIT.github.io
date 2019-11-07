---
layout: post
title: How to use monitor mode to sniff traffic on mac OS
date: 2019-11-07 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

## How to Sniff Traffic

Monitor mode lets you check on the WiFi traffic in your network. You might need to sniff traffic to check out requests from other devices on your network or test applications. With how ubiquitous SSL connections are this technique is becoming less and less relevant as time goes on (which is good since it's basically a Man In The Middle looking at every single connection), but it is still a good exercise to at least see how it works. 

Let's see how to turn on monitor mode and sniff non SSL traffic without using any third party tools on our mac.

## Advanced Mode

You will need to use the Terminal to enable it.

Open the Terminal and run `sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/\ Versions/Current/Resources/airport /usr/sbin/airport` to open "Airport" that allows you to scan the WiFi network.

You can start sniffing the traffic by typing `sudo airport sniff CNL` where CNL is the WiFi channel number you'd like to sniff on.

Press CTRL+C to exit. A log file will be automatically saved to the temporary directory (/tmp) with .cap extension.

Remember to always close your sniff session, if you forget about it your mac might get stuck into it.

## Easy Mode

If you're not familiar with the terminal you can do it by using a visual tool as well:

- Open Wireless Diagnostics
- From the menu click on Sniffer
- Select the channel to sniff
- Press start and enter your password

This will save the log to your desktop instead of the temporary directory.

## Conclusion

With every passing day sniffic is becoming more and more of a niche, but it still has its uses, especially during development.

If you want to debug network requests, including requests SSL, your best bet is to use a proxy on your computer (or router). A few good alternatives in this area are Wireshark (best for advanced users), Fiddlr (best for Windows) or Charles (best for mac OS).
