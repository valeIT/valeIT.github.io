---
layout: post
title: Getting "file not found" in Bridging Header with third party framework - Swift & Xcode
date: 2015-06-20 20:12:28.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
tags: \[\]
meta:
\_wpcom\_is\_markdown: '1'
\_edit\_last: '1'
author:
login: Myshar
email: mysh@myshar.org
display\_name: Valentino Urbano
first\_name: ''
last\_name: ''
---

As all the problems related to Xcode the first thing to do is to CMD+SHIFT+K and clean the build directory, after you've tried that you can proceed as follows:

* Delete your cocoapod (Workspace, Podfile.lock and Pods folder) and 
    
    pod install

again.  
- Delete your bridging header and remove it from the build settings (just search for "bridging" and you'll find it). Create a new .m or .h file and let Xcode create the bridging header for you.

If it still doesn't work go to:

"Build settings" and search for "header search".

Check your "Header Search Paths", it should contain:

    
    "${INHERITED}"        
    "${PODS_ROOT}/Headers/Public/FRAMEWORKNAME"
    

The second line should be one for each frameworks you're using. (Where FRAMEWORKNAME is the name of the dependency you're using of course.)

If there's nothing add it (and look if the corresponding header exists in "/Pods/Headers/Public/..."