---
layout: post
title: Reading Materials - Issue 9
date: 2017-01-31 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories:
- Column
author: Valentino Urbano 
---

>Disclaimer: These were all the links in my read later for this week. It doesn't mean that I agree or approve any of the content. The longest ones will be included in <em>hr</em> to keep them separated from the rest of the content.

>Notice: Some of the links may be either explicit or may disturb someone. It should be obvious (99% of the times it will) from the title if that's the case or not. Proceed at your own risk.


[Shipping an App With App Transport Security](http://timekl.com/blog/2015/08/21/shipping-an-app-with-app-transport-security/)

My only tip is to really try not to use:

<pre><code>
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
</code></pre>

If at all possible. If you have a limited numbers of urls just do like this:

<pre><code>
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
    <key>NSExceptionDomains</key>
    <dict>
        <key>example.com</key>
        <dict>
            <key>NSExceptionAllowsInsecureHTTPLoads</key>
            <false/>
            <key>NSIncludesSubdomains</key>
            <true/>
        </dict>
    </dict>
</dict>
</code></pre>

[Stop Windows 10 from spying on you](https://fix10.isleaked.com/)

[What’s New in Bootstrap 4](https://scotch.io/bar-talk/whats-new-in-bootstrap-4)

[iOS 9 GUI for Sketch](https://designcode.io/ios9)

[Buffer Overflow - How does it work?](http://arstechnica.com/security/2015/08/how-security-flaws-work-the-buffer-overflow)

[Xdebug](http://pastebin.com/hTEvNuTn)

[Will Your Hardware Startup Make Money?](https://medium.com/bolt-blog/will-your-hardware-startup-make-money-677a8e6c665b)

>Expect to lose money if you sell your first production run through retail.
>[...]
>Even the most successful crowdfunding campaigns (Canary, Pebble, Oculus, Ouya, etc) struggle to make money on their first production run. It takes massive manufacturing scale like Fitbit (with 10.9 million units sold in 2014) to build a venture-scale, profitable business (currently worth around $9B). But don’t be discouraged! Selling 10.9M units seemed like a pipe dream to James and Eric when they started Fitbit in 2007.

[Wordsafety](http://wordsafety.com)

>Check a name for unwanted meanings in foreign languages

That's a neat idea!

[DevTools Tips For Sublime Text Users](https://medium.com/google-developers/devtools-tips-for-sublime-text-users-cdd559ee80f8)

[Should police have the capability to take control of driverless cars?](http://arstechnica.com/tech-policy/2015/08/should-police-have-the-capability-to-take-control-of-driverless-cars/)

So in italy mafia could rob people more easily? How is that going to be secured?

[Ashley Madison Hack](http://krebsonsecurity.com/2015/08/who-hacked-ashley-madison/)

[Almost None of the Women in the Ashley Madison Database Ever Used the Site](http://gizmodo.com/almost-none-of-the-women-in-the-ashley-madison-database-1725558944)

[Hotspots with Ads](http://webpolicy.org/2015/08/25/att-hotspots-now-with-advertising-injection/)

Sometimes a bug is hit only after code was executed 100 000 000 000 000 (100 trillion) times -- [Spotify's underflow bug](https://labs.spotify.com/2015/08/27/underflow-bug/)

[A guy was invited by Google to its 'secret' interview process - here's what happened](http://uk.businessinsider.com/i-was-invited-by-google-to-its-secret-interview-process-2015-8?r=US&IR=T)

[How much Uber pays](https://medium.com/@felixsalmon/how-well-uberx-pays-part-2-cbc948eaeeaf)

[All sites look the same](http://www.novolume.co.uk/blog/all-websites-look-the-same/)

[Work from home tips](http://www.imore.com/how-survive-working-home)

[Ex-Broadcaster Kills 2 on Air in Virginia Shooting; Takes Own Life](http://www.nytimes.com/2015/08/27/us/wdbj7-virginia-journalists-shot-during-live-broadcast.html)

[monkeys see monkey do](http://www.leoville.net/2015/monkey-see-monkey-do)

[The Donald Trump Conversation](http://www.hollywoodreporter.com/features/donald-trump-murdoch-ailes-nbc-816131)

[Omni Dev Blog](https://www.omnigroup.com/developer/rss/)

[8 Reasons to Turn Down That Startup Job](https://deardesignstudent.com/8-reasons-to-turn-down-that-startup-job-1f82a00ade34)

[Don't say bs](http://deathtobullshit.com/)

>People's capacity for bullshit is rapidly diminishing.


[The Eater Guide to Surviving Disney World](http://www.eater.com/disney)

[The Fearful and the Frustrated](http://www.newyorker.com/magazine/2015/08/31/the-fearful-and-the-frustrated)

[Cops Refuse To Release Video of Shooting of Unarmed Teen](http://tiny.cc/4eaf2x)

[Lantern is an Internet proxy tool that lets you access blocked sites.](https://twitter.com/PinPopular/status/637408350079053824)

[6 Steps for using Agile Self Development](http://startuphappiness.com/2011/03/07/6-steps-for-using-agile-self-development/)

[Setting up your own VPN on OS X - REQUIRES OSX Server](http://sixcolors.com/post/2015/08/server-hijinks-setting-up-your-own-vpn-on-os-x/)

[Handling App Transport Security in iOS 9](http://googleadsdeveloper.blogspot.ch/2015/08/handling-app-transport-security-in-ios-9.html)

Check the first link for a better explanation of this.

[Wheelchairs](http://www.twitlonger.com/show/n_1snbkpq?new_post=true)

>Here are some reasons some people who can walk use wheelchairs:

>•They can walk, but it’s very difficult and not an efficient way of getting around
>•Walking causes them severe pain
>•Walking is medically inadvisable because of the strain it would put on their heart
>•They have cognitive problems that make walking more difficult than wheeling
>•Falling causes them to break bones, and they are unsteady on their feet and fall easily
>•They can’t stand in place because they need to be moving to stay upright
>•They can walk some days but not others

>If you see someone use a wheelchair sometimes and walk other times, don’t assume they don’t need their chair. If you see a wheelchair user stand up to reach something, don’t assume that they don’t need their chair.

[How fixed-gear bikes can confuse Google’s self-driving cars](http://www.washingtonpost.com/news/innovations/wp/2015/08/26/how-fixed-gear-bikes-can-confuse-googles-self-driving-cars/)

[The Raspberry Pi is succeeding in ways its makers almost imagined](http://www.theregister.co.uk/2015/08/27/the_raspberry_pi_is_succeeding_in_ways_its_makers_ialmosti_imagined/)

[MinesweeperWPF](http://www.reddit.com/r/csharp/comments/3j41kd/i_created_a_version_of_minesweeper_in_wpf/)

[How a bug in Visual Studio 2015 exposed my source code on GitHub and cost me $6,500 in a few hours](https://www.humankode.com/security/how-a-bug-in-visual-studio-2015-exposed-my-source-code-on-github-and-cost-me-6500-in-a-few-hours)

[iOS 9 Detects Cycles in Layout Trees](http://blog.benjamin-encz.de/ios-9-detects-cycles-in-layout-trees/)

[Hack Font](http://sourcefoundry.org/hack/)

[OSX Security and Privacy Guide](https://github.com/drduh/OS-X-Yosemite-Security-and-Privacy-Guide)

[How to Use updateConstraints](http://oleb.net/blog/2015/08/how-to-use-updateconstraints/)

[How widely used are security based HTTP response headers?](https://scotthelme.co.uk/how-widely-used-are-security-based-http-response-headers/)

[To Stop Procrastinating, Start by Understanding the Emotions Involved](http://www.wsj.com/articles/to-stop-procrastinating-start-by-understanding-whats-really-going-on-1441043167)