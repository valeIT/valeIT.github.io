---
layout: post
title: Update Multiple Pods At Once - Cocoapods
date: 2019-04-06 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [General]
image:
image2:
author: Valentino Urbano
---

I'm maintaining a lot of applications for my various clients. A lot of them include dependencies on the form of Cocoapods. Today I had some free time (a rare thing) so I took advantage to update all dependencies. Usually, it would involve a lot of switching back and forth going through the various folders and manually running 'pod update', but no more. I've made a python script to just loop in my clients' folder and update every single application. This is totally fine since if I need to stay on one version of dependency for some reason I can always pin it in the Podfile.

The script:

```
import os
import sys

path = "/Users/valentinourbano/Documents/Freelance"
dirs = [d for d in os.listdir(path) if os.path.isdir(path + "/" + d)]
print(dirs)
for entry in dirs:
    os.system("cd " + path)
    print("Working on " + entry)
    os.system("cd " + path + "/" + entry)
    subdir = os.listdir(path + "/" + entry)  # list of subdirectories and files
    if "Pods" in subdir:
        print("Updating Pods " + entry + "...")
        os.system("cd " + path + "/" + entry+";pod update")
    else:
        print("No Pods found in directory: " + entry)
```

It just loops through all the folders and checks if they contain a Pods folder if they do it updates the dependencies.

*Note that I'm navigating to the directory more than necessary, but when I didn't do it it would run the command from the wrong directory, no idea why since I've just navigated to it above. I guess that each os.system is an independent call.*