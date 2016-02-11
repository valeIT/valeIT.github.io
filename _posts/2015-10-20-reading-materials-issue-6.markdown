---
layout: post
title: Reading Materials - Issue 6
date: 2015-10-20 22:51:45.000000000 +02:00
type: post
published: true
status: publish
categories:
- Column
author: Valentino Urbano 
---

> Disclaimer: These were all the links in my read later for this week. It doesn't mean that I agree of approve any of the content. The longest ones will be included in _hr_ to keep them separated from the rest of the content.
> 
> Notice: Some of the links may be either explicit or may disturb someone. It should be obvious (99% of the times it will) from the title if that's the case or not . Proceed at your own risk.
> 

[How to Know When You're Ready to Freelance As a Self-Taught Coder][0]

[Swift 2, Beta 5 Changes][1]

[Cocoapods on watch OS 2][2]

[Symbolicate watchOS 2 extension crash logs][3]

[Questions to ask yourself before using a 3rd party library][4]

[Spacetime from Facebook][5]

> spacetime is an experimental library for individually transforming parts of layers in real time. With the right transforms, you can make everything from a text view split in half to a cylindrical web view.
> 

[Undo on Android][6]

[Crafting Icons][7]

["Is it too early for me to start a pay-per-click campaign?"][8]

[Writing Swift and Markdown][9]

It automatically compiles Swift code embedded in a markdown document and prints the output right after the line of code. Bonus: Has a GUI app for previewing the result. [Github][10]

[didSet on IBOutlets][11]

> Use didSet on your IBOutlets to configure views instead of cramming code into viewDidLoad. Much cleaner. Still called only once.
> 

[Spatial Interfaces][12]

> Get the hell away from the computer and get drawing. Use a sketchbook, or even a whiteboard. Something more loose than pixel twerking. Think with pictures.
> 

[How to correctly reorder a CollectionView][13]

[@noescape in closures][14]

>     
>     func autoreleasepool(@noescape code: () -> ()) {
>       //code here doesn't need self. requirement
>     }
>     
> 
> 

[Log blocks on the main thread][15]

Apple APIs automatically tell you when there is a lengthy operation on the main thread, but this is neat for shorter blocks when the API still doesn't kick in.

---

Bonus:

Add

    -NSShowNonLocalizedStrings YES

to the launch options of your target in Xcode to show up the strings that haven't been localized.

---

[Meaningful Design for Apple Watch][16]

[App Store Optimization][17]

[On Negative App Store Reviews During Betas of iOS and OS X][18]

[AltConf 2015 Videos][19]

[Toen's Medieval Strategy Sprite Pack v.1.0 (16x16)][20] - Free (Check the License though)

[Background tasks in WP 8][21]

[Sharing data betweeen apps Windows 10][22]

[Build Your Own Messaging App in XAML - Xamarin][23]

[Debug tools in Visual Studio][24]

[Visual Studio 2015 Tools for Unity][25]

[Code Signing in El Capitan][26]

[Comparing how security experts and non-experts stay safe online - From Google][27]

> 35% of experts and only 2% of non-experts said that installing software updates was one of their top security practices. Experts recognize the benefits of updates---"Patch, patch, patch," said one expert---while non-experts not only aren't clear on them, but are concerned about the potential risks of software updates. A non-expert told us: "I don't know if updating software is always safe. What \[if\] you download malicious software?" and "Automatic software updates are not safe in my opinion, since it can be abused to update malicious content."
> 

[Web Design Talk - Youtube][28]

[Receipt Validation][29]

[Implementing Apple Pay][30]

[Neural Networks and Deep Learning Book][31] 

Too bad it's only available online. The author says that it's because of the interactive exercises, but I'd have still liked a book without exercises offline with perhaps links to each exercise.

[Sudoku solver][32] -[Github][33] 

[SubredditSimulator][34]

> The text for titles/comments/text-posts are generated using "markov chains", a random process that's "trained" from looking at real data. If you've ever used a keyboard on your phone that tries to predict which word you'll type next, those are often built using something similar.  
> Basically, you feed in a bunch of sentences, and even though it has no understanding of the meaning of the text, it picks up on patterns like "word A is often followed by word B". Then when you want to generate a new sentence, it "walks" its way through from the start of a sentence to the end of one, picking sequences of words that it knows are valid based on that initial analysis. So generally short sequences of words in the generated sentences will make sense, but often not the whole thing.
> 

[Windows 10 - Launching Windows Store Applications from Code][35]

[Troubleshooting a Redis Stall][36]

[Free Flat Icons][37]

[The Web of Relationships We Have To Save][38]

[Take your unwanted dog to a shelter.][39]

[Solitaire Cards][40]

> Susan Kare's original artwork for the Windows 3.0 Solitaire game is featured on our new set of playing cards. The release of these cards coincides with the 25th anniversary of the original Solitaire computer game. This deck includes two jokers, designed by Kare exclusively for the Areaware release.
> 

[Naughty Keyboard][41]

> The Big List of Naughty Strings is a list of strings which have a high probability of causing issues when used as user-input data. This is a keyboard to help you test your app from your iOS device.
> 

[Swift Compiler Diagnostics][42]

[Protocols Recommendations][43]

[Incremental updates win][44]

[How Facebook delivers cover photos in 200 bytes][45]

[Someone discovered that the Facebook iOS application is composed of over 18,000 classes.][46]

[Build infrastructure @ Square][47]

[Twitter leaks friends and family information.][48]

[Using the new MacBook as a developer][49]

[The True Purpose of Microsoft Solitaire, Minesweeper, and FreeCell][50]


[0]: http://www.joyceakiko.com/ultimate-guide-2015/%23How_to_know_when_your_skills_are_ready_for_you_to_make_the_leap
[1]: https://iosdevweek.ly/lAM4jUj?m=email&sid=hoQMVe5
[2]: https://iosdevweek.ly/2OmWmQU?m=email&sid=hoQMVe5
[3]: https://iosdevweek.ly/eOT2dv1?m=email&sid=hoQMVe5
[4]: https://iosdevweek.ly/QsjgR8Y?m=email&sid=hoQMVe5
[5]: https://iosdevweek.ly/sYdmkR3?m=email&sid=hoQMVe5
[6]: https://iosdevweek.ly/cMgpOrB?m=email&sid=hoQMVe5
[7]: https://iosdevweek.ly/M2ScShm?m=email&sid=hoQMVe5
[8]: https://iosdevweek.ly/47tEOph?m=email&sid=hoQMVe5
[9]: https://iosdevweek.ly/C8snwNc?m=email&sid=hoQMVe5
[10]: https://github.com/chriseidhof/LiterateSwiftGUI
[11]: https://iosdevweek.ly/nKWQtXn?m=email&sid=hoQMVe5
[12]: https://iosdevweek.ly/dZo9jSW?m=email&sid=hoQMVe5
[13]: https://iosdevweek.ly/Lc1GEU?m=email&sid=hoQMVe5
[14]: http://nshint.io/blog/2015/10/23/noescape-attribute/
[15]: http://nshint.io/blog/2015/09/14/logging-excessive-blocks-on-the-main-thread/
[16]: https://iosdevweek.ly/ywlRPWv?m=email&sid=hoQMVe5
[17]: https://iosdevweek.ly/tcrBMIf?m=email&sid=hoQMVe5
[18]: https://iosdevweek.ly/4JiVSWp?m=email&sid=hoQMVe5
[19]: https://iosdevweek.ly/Xk7y0yu?m=email&sid=hoQMVe5
[20]: https://www.reddit.com/r/gamedev/comments/3ecte1/toens_medieval_strategy_sprite_pack_v10_16x16/
[21]: https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh977056.aspx
[22]: https://msdn.microsoft.com/en-us/library/windows/apps/xaml/dn997827.aspx
[23]: https://blog.xamarin.com/build-your-own-messaging-app-in-xaml/
[24]: http://www.abhijainsblog.com/2015/07/useful-debugging-features-of-visual.html?m=1
[25]: https://visualstudiogallery.msdn.microsoft.com/8d26236e-4a64-4d64-8486-7df95156aba9
[26]: http://furbo.org/2015/07/23/code-signing-in-el-capitan/
[27]: http://googleonlinesecurity.blogspot.com/2015/07/new-research-comparing-how-security.html?m=1
[28]: https://m.youtube.com/watch?v=nwhZ3KEqUlw
[29]: http://www.objc.io/issues/17-security/receipt-validation/
[30]: http://shrikar.com/setting-up-apple-pay-in-your-swift-app/
[31]: http://neuralnetworksanddeeplearning.com
[32]: https://www.reddit.com/r/Python/comments/3era97/sudoku_solver_bot/
[33]: https://github.com/panighetti/py_sudoku
[34]: https://www.reddit.com/r/SubredditSimulator/comments/391ria/what_is_rsubredditsimulator/
[35]: http://nicksnettravels.builttoroam.com/post/2015/07/24/launching-windows-store-applications-from-code-in-windows-10.aspx
[36]: http://serverfault.com/questions/709194/troubleshooting-a-redis-stall
[37]: https://icons8.com
[38]: https://medium.com/message/the-web-of-relationships-we-have-to-save-7f337de03e34#.l9ky2ztjv
[39]: http://www.reddit.com/r/dogs/comments/3gvb0l/vent_take_your_unwanted_dog_to_a_shelter_if_you/
[40]: http://www.areaware.com/collections/fall-preview/products/solitaire-cards?variant=2914556676
[41]: https://iosdevweek.ly/ZqOFPFa?m=email&sid=hoQMVe5
[42]: https://iosdevweek.ly/Z1Yor9d?m=email&sid=hoQMVe5
[43]: https://iosdevweek.ly/8EUogNG?m=email&sid=hoQMVe5
[44]: https://iosdevweek.ly/186PMLf?m=email&sid=hoQMVe5
[45]: https://code.facebook.com/posts/991252547593574/the-technology-behind-preview-photos/
[46]: http://quellish.tumblr.com/post/126712999812/how-on-earth-the-facebook-ios-application-is-so
[47]: https://corner.squareup.com/2015/07/ios-build-infrastructure.html
[48]: https://thecomputerperson.wordpress.com/2015/08/16/twitter-leaks-friend-information/
[49]: http://martiancraft.com/blog/2015/08/macbook-for-developers/
[50]: http://mentalfloss.com/uk/technology/32106/the-true-purpose-of-solitaire-minesweeper-hearts-and-freecell