---
layout: post
title: Add more informations to default "About Panel" in Mac OSX
date: 2015-06-07 20:57:28.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

Apple provides a simple way to call the default "About Panel" to display copyright information and other kind of legal/license/... related informations. It takes the information available in the Info.plist[^1] of your application and shows them: `NSApplication.sharedApplication().orderFrontStandardAboutPanel(self)`[^2]

The thing is that you can add your own custom text to it as well. It's really easy, you just need to add a file named `Credits.rtf` and Xcode will add it automatically above the copyright message. There is a caveat though: The file needs to be created from inside Xcode, I tried creating it both from Xcode -> Create New -> Empty File and from an external text editor and Xcode wasn't able to read those file even after importing them.

So here's what you need to do:  
- Create a new file with Xcode (CMD+N)  
- Select OSX - Resources  
- Select Rich Text File and name it "Credits"  
- Make sure to include your application as target as always.

Now you can add anything in there (I added a link for example and it's fully clickable).

You used to be able to call it "Credits.html" before OSX 10.10 and include html code in it, but now it doesn't seem to work anymore. Not to bad since it still parses links though and since it's an rtf you can change text color and everything.

---

[^1]: It shows the icon, the name and the version of your app in addiction to the default copyright message.
[^2]: Where `self` is your `viewController` of course.