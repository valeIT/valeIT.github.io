---
layout: post
title: Visual Studio Code - Open Sort Directory Settings
date: 2019-01-26 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

When you open a project (or folder) in Visual Studio Code it will show you all the files and folders in that project. Normally they're sorted alphabetically, but I had the necessity of having the sorted by the last modified date.

_This is not a tutorial, it's more of a note so I'm going to remember how to do something the next time I stumble again on the problem._

Open settings from VSCode and add the line at the bottom:

    "explorer.sortOrder": "modified",

_Remember to add the comma at the end of the line._

> Controls sorting order of files and folders in the explorer. In addition to the default sorting, you can set the order to 'mixed' (files and folders sorted combined), 'type' (by file type), 'modified' (by last modified date) or 'filesFirst' (sort files before folders).

The neat trick is that you can have a .vscode file for every project and specify specific settings for each. That is useful if you want to have files sorted by last modified date on only specific projects. If you are collaborating on a project with somebody else instead it allows you to share all the settings between the team. It is also useful if you work on more than one machine and need to keep the settings in sync in different environments.

[0]: https://github.com/Microsoft/vscode/issues/23231
