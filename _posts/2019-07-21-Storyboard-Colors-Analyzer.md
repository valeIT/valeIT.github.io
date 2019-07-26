---
layout: post
title: Storyboard Colors Analyzer - iOS
date: 2019-07-21 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image: /assets/article_images/Screenshot2019-07-21at20.38.56.png
image2: /assets/article_images/Screenshot2019-07-21at20.38.56.png
author: Valentino Urbano
---
# Visualize Colors From Storyboard XML Files

I'm adopting dark mode for iOS 13 that's due to ship sometime in September. Part of it was refactoring a huge storyboard file.

## The Problem

Every single screen of the application was included in this single storyboard. That's not great to start, but the worst thing was that all the colors used in the file were not consistent.

One blue would have a specific r g b value in one place and a different one (by a few digits) in another, but it was obviously the same color in both. This way a simple find a replace in the XML would not work. Using the Xcode visual tools (how you usually work with storyboard) by hand going through each screen was going to be VERY time consuming since every single change had to be done manually. For each color the steps would have been something like this:
- Check the rgb values for this color
- Check in the asset catalogue if that specific color existed
  1. If it did use that namedColor
  2. If it did not, find if a suitable color existed and use that instead
  3. If it did not, create a new namedColor and assign it the correct RGBA values
  4. In all cases assign the new color to the item in the storyboard file

The main bottleneck was that I needed to use the visual tools in xcode to figure out if the colors were similar, but at the same time I wanted to find a way to at least search and replace all occurrences of a specific color with the corresponding namedColor once found.

## Existing Tools

I've looked for a tool to convert storyboard colors to 'visual colors' for a while, but only found color pickers that gave you the swift or objective-C code to create them. I could just manually copy the rgb values, multiply them by 255 and paste them in the various tools to get the color, but that was going to be way too long and frustrating.

## The Solution

I decided to create a little application with Flutter for the Web so that I could paste it the exact code from the storyboard file and take a look at the color so I could both quickly decide the correct name to file the namedColor under and find out if it was similar to an already existing color.

The code for a generic clear color in the xml is:
```
            <color key="backgroundColor" red="0" green="0" blue="0" alpha="0" colorSpace="custom" customColorSpace="sRGB"/>

```

Once done, I would move to the bottom of the story board and create a few named colors for each de-duplicated colors that remained:

```
<namedColor name="clearColor">
            <color red="0" green="0" blue="0" alpha="0" colorSpace="custom" customColorSpace="sRGB"/>
        </namedColor>
```

Finally now a find and replace for `red="0" green="0" blue="0" alpha="0" colorSpace="custom" customColorSpace="sRGB"` with `name="clearColor"` would replace all occurrences. I'm sure it could have been automated further, but at least the process of figuring out which colors are similar enough to be merged and which are not is not.

I'm going to write a more in depth article on the Flutter application over the next few days.

## Try It Out

Notice: It being online does not mean it is production ready. It is still a **very early alpha**.

You can find it live as [Storyboard Color on CodeMagic][1]. You can paste the code of a color from a storyboard file to start or you can use this example: `<color key="backgroundColor" red="1" green="1" blue="1" alpha="1" colorSpace="custom" customColorSpace="sRGB"/>`
`

*It's mostly a tool to speed up development and nothing else at this time. I decided to promptly release it since it's going to be really useful to anyone trying to migrate a storyboard heavy application to dark mode.*

[1]: https://storyboardcolor.codemagic.app/#/