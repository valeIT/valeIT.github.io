---
layout: post
title: Reading Materials - Issue 11
date: 2018-02-14 18:48:35.000000000 +01:00
type: post
published: true
status: publish
categories:
- Column
author: Valentino Urbano 
---

>Disclaimer: These were all the links in my read later for this week. It doesn't mean that I agree or approve any of the content. The longest ones will be included in <em>hr</em> to keep them separated from the rest of the content.

>Notice: Some of the links may be either explicit or may disturb someone. It should be obvious (99% of the times it will) from the title if that's the case or not. Proceed at your own risk.


[History of Color Photography](http://petapixel.com/2015/10/11/a-brief-history-of-color-photography-from-dream-to-reality/)

[X](http://www.reddit.com/r/gamedev/comments/3oi2ft/phaserio_exhaustive_tutorial_on_game_state/)

[SFSafariViewController - Swipe from edge](https://iosdevweek.ly/QXGQ7yP?m=email&sid=hoQMVe5)

[iOS Offline Caching for Web Content](https://iosdevweek.ly/hNKuakM?m=email&sid=hoQMVe5)

[Mistakes with Push Notifications](https://iosdevweek.ly/pTboPaq?m=email&sid=hoQMVe5)

[X](https://iosdevweek.ly/plf8Frm)

[LLVM Book](http://www.aosabook.org/en/llvm.html)

[X](http://www.reddit.com/r/AskReddit/comments/3n45xi/whats_your_favorite_thing_you_have_in_your_saved/)

[Fortran programmer needed for Voyager @ NASA](http://www.popularmechanics.com/space/a17991/voyager-1-voyager-2-retiring-engineer/)

[Sign GIT commits](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)

[GTA 5 Graphics Analysis](http://www.adriancourreges.com/blog/2015/11/02/gta-v-graphics-study/) - [Part 2](http://www.adriancourreges.com/blog/2015/11/02/gta-v-graphics-study-part-2/) - [Part 3](http://www.adriancourreges.com/blog/2015/11/02/gta-v-graphics-study-part-3/)

[Wrong color in Interface Builder](http://stackoverflow.com/questions/14578759/wrong-color-in-interface-builder/14581553%2314581553)

[Country Flags for iOS](https://github.com/madebybowtie/FlagKit)

[CAShapeLayer and Animations](http://merowing.info/2015/11/prototyping-floating-burger-menu-with-cashapelayer/) - [Pinch to Open Animation](http://merowing.info/2012/07/pinch-to-reveal-animation-like-in-boeing-milestones/)

[Swift String API](https://t.co/P3jPGR9UXo)

[How custom email addressed work](http://www.reddit.com/r/learnprogramming/comments/3rqxwc/how_do_custom_email_addresses_work/)

[Free up used space - Xcode](http://ajithrnayak.com/post/95441624221/xcode-users-can-free-up-space-on-your-mac)

Mind that deleting the Archives will mean not having the dsym to debug crash reports for those versions of your apps. The rest seems safe to do.

[How to generate signature and keys in Codeigniter RSA library](http://stackoverflow.com/questions/33593140/how-to-generate-signature-and-keys-in-codeigniter-rsa-library) - [List of apps using it](https://github.com/search?q=rsa+%2B+%24primes+%3D+array%284507&type=Code)

>A secure RSA implementation depends on the use of randomly generated large prime numbers (e.g, at least 2048 bits!) as part of a private key. However, this library does not use large prime numbers, nor does it even generate them randomly — it picks them from an array of 570 pregenerated four-digit numbers. This means that there are only about 162,000 (570 * 569 ÷ 2) possible keys that could be generated; this is few enough that you could easily generate a list of all possible public and private key pairs.

>Additionally, this library is using RSA in an inappropriate mode. It is "encrypting" and "decrypting" messages by encrypting each group of three letters as a separate, independent message. This scheme is insecure, as the individual blocks can be edited and reordered to create new messages. (For instance, an encrypted message that said SEND JO $123 could easily be edited to say SEND JO $123123 by repeating the last block!) Worse, if the content of one message is known, it is possible to search for blocks from that first message within another message to recover parts of its contents.

[Ash Furrow - Artsy - Blog](http://ashfurrow.com/)

[X](https://realm.io/news/david-east-simplifying-login-swift-enums/)

[Singletons](https://sandofsky.com/blog/singletons.html)

[TensorFlow](http://goo.gl/vu5ZmJ) - [Getting Started](http://www.tensorflow.org/get_started)

[Firebase - Bolt Compiler](https://www.firebase.com/blog/2015-11-09-introducing-the-bolt-compiler.html)

[Live Photos](http://blog.tinywhale.net/access-live-photo-data-on-iOS-9.0/)

[Free Monads](http://okmij.org/ftp/Computation/free-monad.html)

[Sublime - Syntax highlighting for Firebase](https://github.com/davideast/bolt-sublime)

[Retain Cycles](http://www.thomashanning.com/a-trick-to-discover-retain-cycles/)

>Although it’s a little bit of work, you should insert log messages in the deinit methods of your view controllers in order to discover retain cycles. You could also use Instruments to discover retain cycles, but if you always place the log message in the deinit method, you can observe the deallocating behaviour constantly.

[Starcraft 2](http://www.polygon.com/2015/11/6/9670176/starcraft-2-future-history-dlc-blizzard)

[Machine Learning Course - Coursera](https://www.coursera.org/learn/machine-learning/)

[Google Tensorflow](http://www.reddit.com/r/programming/comments/3s4vkn/google_brains_deep_learning_library_tensorflow_is/) - [Github](https://github.com/tensorflow/tensorflow)

[Basic Python Neural Network](http://iamtrask.github.io/2015/07/12/basic-python-network/)