---
layout: post
title: Too quick to judge.
date: 2019-04-25 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech,Me]
image:
image2:
author: Valentino Urbano
---

*I was too quick to judge.*

The file did get saved, but it failed to read it, not because of problems with Android, but because of my own stupidity. It still does not disprove my point not to trust the emulator since in the emulator it worked fine. To work on my mac when I was retrieving the notes I was retrieving all the files in the folder, but since Mac OSX loves to add ".DS_Store" files everywhere I was filtering the result to exclude every result containing "_" in the name. I thought that meant the file name, but the API only exposes a fullPath variable so I was removing all directories that contained an "_" in their Path which obviously my Android device has a lot of. Because of that, it was always returning an empty array so I assumed that It wasn't saving anything. The good news is that the note I wrote yesterday is saved, as are all of the countless tries I did while debugging the problem.

Having Hot Reload with Flutter is a breeze though, I took 1/10 of the time to debug the problem then I would have taken with native iOS code and having to rebuild every time after a minimal change.