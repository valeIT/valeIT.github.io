---
layout: post
title: Remove Superuser Access Premissions For Dropbox App On Mac OSX
date: 2019-01-04 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

_This is not a tutorial, it's more of a note so I'm going to remember how to do something the next time I stumble again on the problem._

Dropbox for mac, once installed, keeps prompting for superuser permissions every once in a while. Even if you keep denying it, it will still ask very annoyingly, so annoyingly that you might give up and press ok only to make it go away.

Dropbox shouldn't need this kind of permissions to work and in fact, if you keep denying everything will work as it should. I refuse to give it my login password and I'm annoyed at it prompting for it every time I reboot.

On the other hand, I rely on Dropbox so I can't delete it or switch to another service for now.

If you gave Dropbox superuser permissions and now want to remove them follow these steps.

## How to remove Accessibility Access from Dropbox:

1. Quit the Dropbox app in the status bar.
2. Delete /Library/DropboxHelperTools folder.
3. Remove Dropbox from Accessibility in System Preferences -> Security & Privacy
4. Log out and log back into your Mac user account.
5. After that, you should see the Dropbox dialog prompting you for access, confirming that it doesn't have access anymore. Deny it. Every single time.

_Note: Dropbox will, unfortunately, continue to throw this dialog at you on each launch._
