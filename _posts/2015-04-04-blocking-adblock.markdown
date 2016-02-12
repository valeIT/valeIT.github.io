---
layout: post
title: Blocking Adblock
date: 2015-04-04 08:57:21.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

[If you want to skip my rambling and get to the answer click here ;)][0]

## Intro

I've always been a strong supporter of cryptocurrency in general and in particular of Dogecoin.

Last month I build a dogecoin faucet to give some of my Dogecoins to the people starting out. Starting with zero budget i'm sticking with a free hosting so far, since I'm already giving away my hardmined dogecoins \[Not that I'm complaining about it, it's my choice to do so\], but if it grows I'll think about buying a proper hosting for it.

**Edit:** I had 10000 dogecoins in the faucet wallet as a starter and they finished the first day.

---

I love Adblock and I wouldn't like to have an internet without it, but I also stand by the motto of rewarding content creators for their time. The best option is direct support of course and it has been proved successful in many circumstances, but asking for money directly leads to you having some kind of responsibility on your shoulders --- rightfully so. The only other way is through advertisement. Nowadays though almost everyone has Adblock or similar installed (at least the savy people do and most of the people interested in cryptocurrencies are along those lines). While that is great not to be annoyed every seconds by ads there are cases, such as faucets, where you want to allow access only if Adblock is disabled[1][1]. The money from advertisement will be directly used to top up the faucet alone and that coupled with the fact of not using intrusive advertisement makes it more bearable. All of that said though , advertisement is a plague and Adblock may be the cure[2][2] --- it's too early too say yet.

## Methods

There are various method, many of them very long, I've tried a few of them, before settling on my current one.

### My Current method

Disclaimer: I don't know if or how this additional `div` is going to affect your site, I don't think Google looks for div ids to determine which type of content is on your site, but if it does this might mislead it.

Adblock will block every `div` having the id or class containing the word: "ad". So simply put a div in between whatever you want to be filtered out if Adblock is on. I just put it in the main content area, from after the header to the beginning of the footer.

    <div id="main-ad"></div>

The whole block gets filtered out by Adblock. After that block you can simply put a text stating that if the rest of page is hidden to please disable Adblock, if it's shown you can say thanks for not using Adblock on this site or such...

### Other methods

Most of these other methods can be [found][3] [in][3] [multiple][4] places across the web; I tried to give credit where it was due, but I might have missed a few; if that's the case send me an email and I'll get in touch with you. **Using an external javascript file** Create a file called `ad.js` and place it somewhere. Its content should be: the oneliner `Adblock = false; `. From your main page now set Adblock to true and load that file, after that check if Adblock is true:

    <script type="text/javascript">// <![CDATA[
    var Adblock = true;
    // ]]></script><script src="ad.js" type="text/javascript"></script><script type="text/javascript">// <![CDATA[
    if(Adblock) { //Adblock blocked the ad }else { //Adblock is off/disabled/... }
    // ]]></script>

**Showing an image below the ad**

This is not really a script to block the access to the site, but invite the users to turn off Adblock if enabled. If the ad is blocked by Adblock it'll show the content behind it.

**Check the height of your ad**

[Needs [jQuery][5]].

Simply copy the `#id` of your ad and check the height:

    if (!$(‘#your_id’).height()) {
    //Adblock blocked the ad
    }

For more just search on either google or StackOverflow for "blocking Adblock" or similaria.

---

1. I see how this can be abused, but there are guides on this subject already and if someone wants to do it, he's going to. Nothing we can do to stop him. I really believe that in this case it's the right call though, feel free to ping me up if you disagree.[↩][6]
2. Content creators though are going to evolve one way or the other. We've seen it already through Memberships programs and such, but lately I've seen also ads embedded in videos on youtube --- like in the actual video, just to show the other face of the coin.[↩][7]


[0]: #my-current-method
[1]: #f1-033015
[2]: #f2-033015
[3]: http://stackoverflow.com/questions/18180598/ad-blocker-detection-aka-Adblock-plus
[4]: http://tutorialzine.com/2011/12/how-to-block-Adblock/
[5]: http://jquery.com
[6]: #r1-033015
[7]: #r2-033015