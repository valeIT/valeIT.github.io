---
layout: post
title: How to use monitor mode to sniff traffic on mac OS
date: 2019-11-06 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---
# How to sniff traffic

Monitor mode lets you check on the WiFi traffic in your network.

## Advanced Mode

You will need to use the Terminal to enable it.

Open the Terminal and run `sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/\ Versions/Current/Resources/airport /usr/sbin/airport` to open "Airport" that allows you to scan the WiFi network.

You can start sniffing the traffic by typing `sudo airport sniff CNL` where CNL is the WiFi channel number you'd like to sniff on.

Press CTRL+C to exit. A log file will be automatically saved to the temporary directory (/tmp) with .cap extension.

Remember to always close your sniff session, if you forget about it your mac might get stuck into it.

## Easy Mode

- Open Wireless Diagnostics
- From the menu click on Sniffer
- Select the channel to sniff
- Press start and enter your password

This will save the log to your desktop instead of the temporary directory