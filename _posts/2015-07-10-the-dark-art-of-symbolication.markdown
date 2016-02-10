---
layout: post
title: The Dark Art of Symbolication
date: 2015-07-10 18:25:02.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
tags: \[\]
meta:
\_edit\_last: '1'
\_wpcom\_is\_markdown: '1'
author:
login: Myshar
email: mysh@myshar.org
display\_name: Valentino Urbano
first\_name: ''
last\_name: ''
---

# Things to Do Before Submitting!

Before submitting your app make sure that you generate the dSYM file (it's on by default):

- Go to Build Settings  
- "Debug Information Format"  
- Set it as "DWARF with dSYM File"  
- This way you'll be able to debug the eventual crash logs coming your way.

## Oh No, It Crashed

You get your first crash log from release and the only thing you have is a memory address: 0x10d503000\.

* Open the Organizer from Xcode.
* Locate the archive corresponding to the build that's crashing (hope you didn't delete that). Always keep ALL archives from shipping versions!!
* Copy it in a folder on the desktop or anywhere and open the archive (Show Content)
* Copy the .app to the folder (means the base folder that you created)
* Navigate to the DWARF folder, for Mac OSX it's on

    dSYMs/AppName.app.dSYM/Contents/Resources/DWARF/AppName

* Copy the file to the folder
* Open terminal and write/paste:

    atos -o LOCATION_OF_THE_EXECUTABLE -arch x86_64 -l MEMORY_ADDRESS_OF_THE_CRASH

Example:

     atos -o IPLocationMini.app/Contents/MacOS/IPLocationMini -arch x86_64 -l 0x10b6ec000 0x000000010b70192a

###### Note

The memory address for:

    0 com.valentinourbano.IPLocationMini 0x000000010b70192a 0x10b6ec000 + 88362

To paste in the terminal is:

    0x10b6ec000 0x000000010b70192a

(Notice the space)

The address for the executable is:

    AppName.app/Contents/MacOS/AppName

## Resolution

Terminal will give you back the exact method call and line where the app crashed. 

Time to slash some bugs =)