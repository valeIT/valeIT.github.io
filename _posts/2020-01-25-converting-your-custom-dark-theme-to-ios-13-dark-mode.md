---
layout: post
title: Converting Your Custom Dark Theme to iOS 13 Dark Mode (While Supporting iOS 12)
date: 2020-01-20 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

I've seen a lot of complicated guides on how to keep your old light/dark theme while supporting iOS 13 Dark Mode seamlessly. The truth is that it doesn't need to be complicated.

## How to set it up

Follow the [Dark Mode for iOS][1] guide from Apple to get started. Remember to also keep in mind the [HIG][2].

After following that process all your colors will be in the asset catalogue with the 2 variants for light and dark mode.

It will take some time to find all the colors and their variants if they were not organized correctly before, fortunately now you're not only supporting Dark Mode, but you have possibly eliminated duplicate colors (or very similar / eyeballed colors) and everything in neatly organized and named in the asset catalogue. If you had them already organized before congrats, you're a huge minority. Well done!

So you're now ready to support iOS 13. This way though you will not support your old custom theme for iOS 12 and lower and your existing users that decide not to upgrade will be mad. How do we fix that?

Simple. We can add an additional custom color in the asset catalog for each color that is needed for the dark theme and give it a different, but recognizable name. For example if the color is "textColor" the dark color should be something like "darkTextColor" so it is obvious that it is the dark variant of that particular color. These additional colors are going to be used exclusively on iOS 12 and lower.

**Recap:**

We now have the colors for the custom light theme in the asset catalogue versioned with both .light and .dark appearances. We also have a copy of all the .dark appearances as additional custom colors with different recognizable names.

The first ones will be used for iOS13 and the light theme of iOS 12 and lower. The latter ones will only be used for dark mode on iOS 12 and lower.

## How to use it

We can now take a look at how to use it. While the set up process was long and tedious, using them is less so.

1. If the user is on iOS 13 you will always force select the light theme of your custom theme.

Since the light theme will always return the light color from the asset catalogue, and the light color is versioned with both dark and light appearances, iOS will automatically switch between the .light and .dark color. Done.

2. If the user is on a previous version of the OS you will show the switch to change between the light and dark theme as you did before. And in code, just as before either use the normal color or the custom dark color that we created in the asset catalogue assigning it a different name by switching manually.

A great pro of this method is that you do not need to change your code everywhere since the behaviour of the code did not change. The only part that needs to change is which custom theme is selected for iOS13. You also need to change the colors, but you needed to do that anyway even if you didn't want to keep backward compatibility.

[1]: https://developer.apple.com/documentation/xcode/supporting_dark_mode_in_your_interface
[2]: https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/
