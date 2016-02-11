---
layout: post
title: Reading Materials - Issue 7
date: 2015-11-01 12:16:16.000000000 +01:00
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

[Build Things from Scratch][0]

> A developer who can take a blank sheet of paper and turn it into a functioning product, under their own direction, is a rare - they are in possession of hard technical skills, excellent at explaining technical concepts to non-technical team members, can work with abstract requirements, able to anticipate future changes and revisions on their own, and are able to adapt on-the-fly.
> 

[Locked in Solitary at 14][1]

> The prisoner, Ke'jorium McKnight, is 16 years old. He was kept in solitary confinement not for behavioral reasons or as punishment but because he is being tried as an adult. Under Mississippi law, that means he must be held in an adult jail. And federal law requires that if he is held in an adult jail, he must be kept separate from other inmates, for his own protection.  
> "I'm always feeling down," he said in a brief interview at the jail on Aug. 6\. "I'm in extreme isolation, and I don't understand why they would do this to me."
> 

["+1" Button for Github][2]

[Apple News spamming pushes][3] [Again and again][4]

[Go - Game][5]

Rules:

> * Two players (black and white) take turns, placing one stone on the board at a time.
> * A stone must be placed on the intersection of the vertical and horizontal lines.
> * Once a stone is placed, you can't move it, although under some conditions it may be removed.
> 

[Steve Jobs's interview with Red Herring, 1996][6]

[Orcas][7]

[Inside Amazon: Wrestling Big  
Ideas in a Bruising Workplace][8]

> "Nearly every person I worked with, I saw cry at their desk."
> 

[Suspicious Package][9]

> A Quick Look Plug-in for OS X Installer Packages
> 

[Man with one leg taken down by 14 SFPD officers][10]

[Stephen Hawking's speech system][11] - [Download it here][12] - [User Guide][13]

[State of the Haskell ecosystem][14] - [Developing for iPhone with Haskell][15]

[How to buy an iPhone in America][16]

[Watch a Google Street View Video of Your Map Route][17]

> You type in your origin and destination, then hit play to see a street-by-street view of your map route.
> 

[A love letter to libraries][18]

http://blog.rongarret.info/2015/08/psa-beware-of-sudo-on-os-x.html

OSX will only ask for your password when you use sudo from the terminal the first time, to make it ask every time run:

    visudo

And add this line:

    Defaults tty_tickets

[Hilarious Swift compiler error][19]

[Windows 10 Won't Run Games Using SafeDisc Or Securom DRM][20]

> Yet despite this change coming in Windows 10, blame can't likely be placed at Microsoft's feet. For one, SafeDisc is notoriously insecure and Microsoft's decision to block it from their new operating system will likely protect more users than it hurts.
> 

Boris Schneider-Johne:

> This DRM stuff is also deeply embedded in your system, and that's where Windows 10 says "sorry, we cannot allow that, because that would be a possible loophole for computer viruses." That's why there are a couple of games from 2003--2008 with Securom, etc. that simply don't run without a no-CD patch or some such. We can just not support that if it's a possible danger for our users. There are a couple of patches from developers already, and there is stuff like GOG where you'll find versions of those games that work."
> 
> I wouldn't blame Windows 10 for this, but it's another example of the harm done by restrictive or draconian DRM.
> 

DRMs have always been a huge pain for people who actually pay for the game without doing anything at all against piracy. 

[ReactJS Introduction][21] - [Flux Introducion][22]

[Termtile for OSX][23]

> termtile is a set of scripts, which set you free from your mouse and touchpad. Don't distract yourself and manage all your terminal windows with a handful of commands.
> 

[Don't buy a DSLR][24]

> Which means you need to study the camera. Not just point and shoot, you have to learn all the controls, which not only means reading the camera manual, but also learning about shutter speed, ISO, aperture, focal points, color balance, and a lot more.
> 

Not necessarely, if you do you will surely end up with better pictures. If you don't the AUTO mode will make **way** better pictures than your iPhone, no matter the condition. If you are even willing to change from AUTO to portrait mode or macro when needed those specific pictures will be even better than in AUTO mode. \[Disclaimer: I have a DSLR and use it happily\] On the other hand the iPhone is the camera that's with you all the times, I'm not gonna bring my SLR everywhere, unless I'm on holiday. That's its real power.

[Facebook should pay us][25]

> For the most valuable innovation at the heart of Facebook was probably not the social network (Friendster thought of that) so much as the creation of a tool that convinced hundreds of millions of people to hand over so much personal data for so little in return. As such, Facebook is a company fundamentally driven by an arbitrage opportunity---namely, the difference between how much Facebook gets, and what it costs to simply provide people with a place to socialize. That's an arbitrage system that might evaporate in a world of rational payments. If we were smart about the accounting, we'd be asking Facebook to pay us.
> 

[Tumblr patch notes][26] - [Take two][27]

[Thoughts on Swift 2 Errors][28]

[when drug smuggling use extra identifiable and innocent-looking bag identifiers to avoid suspision. ][29]

[Doing programming right. ][30]

> The screen slept while I was busy swimming :D
> 

[Random (but great) commit message of the day. ][31]

[Use the amazon wifi buttons to track other data][32] - [Without using Scapy][33]

[React Color Picker][34]

[Share your terminal as a web application][35]

[It took me a moment to figure out this was a marketing email and not an alert.. ][36]

[Streaming Music is Ripping You Off][37]

Or how to cheat and get revenues for nothing.

[Falcor][38]

> A JavaScript library for efficient data fetching
> 

[Tasks, microtasks, queues and schedules][39]

> Tasks are scheduled so the browser can get from its internals into JavaScript/DOM land and ensures these actions happen sequentially. Between tasks, the browser may render updates. Getting from a mouse click to an event callback requires scheduling a task, as does parsing HTML, and in the above example, setTimeout.
> 
> setTimeout waits for a given delay then schedules a new task for its callback. This is why setTimeout is logged after script end, as logging script end is part of the first task, and setTimeout is logged in a separate task. Right, we're almost through this, but I need you to stay strong for this next bit...
> 
> Microtasks are usually scheduled for things that should happen straight after the currently executing script, such as reacting to a batch of actions, or to make something async without taking the penalty of a whole new task. The microtask queue is processed after callbacks as long as no other JavaScript is mid-execution, and at the end of each task. Any additional microtasks queued during microtasks are added to the end of the queue and also processed. Microtasks include mutation observer callbacks, and as in the above example, promise callbacks.
> 
> Once a promise settles, or if it has already settled, it queues a microtask for its reactionary callbacks. This ensures promise callbacks are async even if the promise has already settled. So calling .then(yey, nay) against a settled promise immediately queues a microtask. This is why promise1 and promise2 are logged after script end, as the currently running script must finish before microtasks are handled. promise1 and promise2 are logged before setTimeout, as microtasks always happen before the next task.
> 

[At Amazon, Employees Treat the Bathroom as an Extension of the Office][40]

> Even more alarming was the bathroom culture. I can only speak to the men's room, most of which each had two urinals and two stalls. I come from a background where a bathroom is a place where you do a certain kind of business, in silence, and you leave. At Amazon, the men's room is an extension of the office. People chitchat about work in the bathroom, as if it is just another meeting room where you can piss everywhere.
> 
> The most horrifying moment of my employment at Amazon was the time I was using the toilet and a coworker began talking from the stall next to me. He asked me why I had not responded to his very pressing email. I closed my eyes and pretended this wasn't happening. What email could be so important that it could not wait five minutes for me to use the bathroom? He began tapping on the wall between our stalls, asking why I wouldn't respond, as if inter-stall conversation should be a totally normal, not disgusting means of communication.
> 
> \[...\]
> 
> I regularly saw people bring their laptops into the bathroom, where they would sit on the toilet and write code
> 
> \[...\]
> 
> On many occasions, I heard people take phone calls while mid-business. It was hard to tell if someone was groaning because it was difficult to code or difficult to poop. Another Amazon colleague once joked that this gave new meaning to the word "deploy."
> 
> \[...\]
> 
> She was actually taking the elevator down to the first floor where her favorite bathroom was. Nobody knew about this bathroom, she explained, and she liked it because it was for a single person and it was never occupied.
> 
> Later that day, I explored the first floor of the building in search of that bathroom. It was tucked away, hidden out of sight, waiting to be discovered by the most intrepid, most adventurous Amazonians. I wondered how many people knew about it, and whether I should tell anyone else. Knowing of its existence felt like a responsibility, a secret that must be closely guarded.
> 

[Principal Component Analysis and Fashion][41] - [Code][42]

[Foo Fighters - My Hero - NSFW LIVE][43]

[How Relay FM Proves That Podcasts Aren't An Overnight Success][44]

["What makes a good programmer?"][45]

> "Having the instinct to know when a solution will not work."
> 
> "Understanding the proper level of abstraction to work at, and building tools to make that level as easy as possible."
> 
> "Not being afraid to throw away code once you understand the problem better."
> 
> "One who uses the proper metaphor, and strives to find the proper metaphor."
> 
> "If you're not enhancing the field, it's just code."
> 
> How to be a 10x engineer: help ten other engineers be twice as good.
> 

[OnHub, the Google On app and your privacy][46]

> Importantly, the Google On app and your OnHub do not track the websites you visit or collect the content of any traffic on your network.
> 

[Universal music and kim dotcom prepared a deal to tax google][47]

[Resume Example][48]

[Things to commit just before leaving your job][49]

[Top 10 Worst C\# Features][50]

[Shutdownify is shutting down][51]

[MailChimp Content Style Guide][52]


[0]: http://www.aaronstannard.com/engineers-from-scratch/
[1]: http://www.nytimes.com/2015/08/16/us/citing-safety-adult-jails-put-youths-in-solitary-despite-risks.html
[2]: https://github.com/isaacs/github/issues/450
[3]: http://twitter.com/tapbot_paul/status/633314674843348993/photo/1
[4]: http://twitter.com/tapbot_paul/status/633318397040721920/photo/1
[5]: http://playgo.to/iwtg/en/
[6]: http://evgenymorozov.tumblr.com/post/15396323139/steve-jobss-interview-with-red-herring-1996
[7]: http://loopu.in/1IUxiXi
[8]: http://www.nytimes.com/2015/08/16/technology/inside-amazon-wrestling-big-ideas-in-a-bruising-workplace.html?_r=0
[9]: http://www.mothersruin.com/software/SuspiciousPackage/
[10]: https://medium.com/matter/i-watched-14-police-officers-take-down-a-one-legged-homeless-black-man-outside-twitter-hq-1b3a9bf10e0f?source=tw-7fdfc2c95a10-1439821161233
[11]: http://ow.ly/R0EYC
[12]: https://github.com/01org/acat/releases
[13]: https://01.org/sites/default/files/documentation/acat_user_guide.pdf
[14]: https://github.com/Gabriel439/post-rfc/blob/master/sotu.md
[15]: https://wiki.haskell.org/IPhone
[16]: http://www.theverge.com/2015/8/17/9166557/how-to-buy-an-iphone-in-america?utm_campaign=backlon&utm_content=chorus&utm_medium=social&utm_source=twitter
[17]: http://lifehacker.com/watch-a-google-street-view-video-of-your-map-route-1724253437
[18]: http://loopu.in/1JXparn
[19]: http://twitter.com/johnsundell/status/633382570936418304/photo/1
[20]: http://www.rockpapershotgun.com/2015/08/17/windows-10-safedisc-securom-drm/
[21]: http://blog.andrewray.me/reactjs-for-stupid-people/
[22]: http://blog.andrewray.me/flux-for-stupid-people/
[23]: https://github.com/apaszke/termtile
[24]: https://brooksreview.net/2015/08/please-dont-buy-a-digital-slr/
[25]: http://www.newyorker.com/business/currency/facebook-should-pay-all-of-us
[26]: http://twitter.com/codeblue87/status/633443667588579328/photo/1
[27]: https://twitter.com/marcoarment/status/633460674488832000/photo/1
[28]: https://gist.github.com/nicklockwood/21495c2015fd2dda56cf
[29]: http://twitter.com/cgpgrey/status/633524537502662659/photo/1
[30]: http://twitter.com/DamienDeVille/status/633627791905411073/photo/1
[31]: http://twitter.com/steipete/status/633641292996739072/photo/1
[32]: https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8
[33]: http://stackoverflow.com/questions/24415294/python-arp-sniffing-raw-socket-no-reply-packets
[34]: http://casesandberg.github.io/react-color/
[35]: https://github.com/yudai/gotty
[36]: http://twitter.com/ra6bit/status/633659369486422017/photo/1
[37]: https://medium.com/cuepoint/streaming-music-is-ripping-you-off-61dc501e7f94
[38]: http://netflix.github.io/falcor/
[39]: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
[40]: http://motherboard.vice.com/read/at-amazon-employees-treat-the-bathroom-as-an-extension-of-the-office
[41]: http://blog.thehackerati.com/post/126701202241/eigenstyle
[42]: https://github.com/graceavery/Eigenstyle
[43]: http://loopu.in/1NqFMIV
[44]: http://techcrunch.com/2015/08/18/relay-fm-and-the-podcast-renaissance-that-never-was/
[45]: http://dbgrandi.github.io/good_great_10x/
[46]: https://support.google.com/onhub/answer/6246642?hl=en&vid=1-635755199438066663-3643879731365364491
[47]: http://dlvr.it/BtZtvB
[48]: https://marie.codes/resume
[49]: https://gist.github.com/aras-p/6224951
[50]: http://bit.ly/1JsgxX2
[51]: http://www.shutdownify.com/
[52]: http://styleguide.mailchimp.com/