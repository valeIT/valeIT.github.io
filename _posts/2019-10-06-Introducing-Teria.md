---
layout: post
title: Introducing Teria
date: 2019-10-06 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

## Introducing Teria

Teria was born as a super minimal note application. It was just a textfield that you could jolt notes and ideas down so you would not forget. I'm a big proposal of (other links related to this idea) writing your ideas down as quickly as possible so you don't forget them, and I've written about it a few times. Teria helps you accomplish that. I've been using it every day for the past 6 months. This whole newsletter (editing aside) has been written on Teria.

### Streak

It has evolved a lot since then. I've been writing every day for the past 10 months on [200WaD][2] sand I like the idea of having a streak to keep you accountable. I mostly like how this streak is not just a streak that has no meaning apart from having the streak. You get a streak by doing (like Duolingo for example) and not just by logging something as done. You have to actually put in the work (link on the topic) to get it.

Since it's something that you don't necessarily share online I feel that 200 words is a bit too low. I also didn't want it to become a nuisance that requires too much time and you're going to just drop it. It's mostly a place to jolt down ideas, not to write novels in, and ideas are not always long.

Due to all of that I've set the default is 250 words a day for the streak to count. This is fully editable from settings since there are no leaderboards. The stream is there to simply hold you accountable to yourself. It is also off by default since I don't want to pass the idea that you can use Teria only if you want to keep a streak. Keeping a streak helps me writing more, but it might not be right for everyone.

Since you know yourself better than anyone else does you can judge if 250 is the right amount for you or not. I found the number to be the best for me, but it might be different for somebody else. If that's the case you can lower it or increase it (also let me know if 250 is right as the default or you think it should be changed). The streak idea is obviously heavily inspired from [200WaD][2].

### Calendar

I also wanted to have a calendar to go along with the streak system, but it should not be required that the streak tracking is enabled for it to work. Before starting to work on Teria I've looked around the store for any note taking app that offered it, but I only found diary style apps.

That was not what I wanted or what I was looking for. I wanted something to help me write down ideas every day, but I didn't want it to be a diary. I was not going to journal on it, I could if I wanted to, but I didn't want to limit it so much. I could twist a diary style app to do what I wanted, but it just didn't felt really like a good or right solution to the problem.

You can choose if you want to see the notes as a simple chronological list or inside a calendar and swipe effortlessly between them. The calendar lets you see on which day you've written anything (even if you did not hit your streak or if you don't have a streak enabled) and the days you did not while the list is a more classic look and feel.

### Other (Full Text Search + Rich Text)

Both lists include full text search across every single note. I didn't find it in any editor I've tried (on Android). Be wary that it takes a relatively long time if you have a large number of files, but for the average user it shouldn't be excessive. I've used it on hundreds of files without problems. You can use full text search to filter both the tile and the full plain text version of the note.

Notes support rich text out of the box. From bold to ordered lists to quotes. Once you open the app for the first time you will be greeted by an example that uses most of them.

Notes are saved in normal json files. Since Teria supports rich text I could not have .txt or .md files, but the content of the file is still very readable. I also export the plain text version of the note at each save under the field "plainText" so you can migrate your notes easily. This folder is publicly accessible on Android (if you have an SD card it will be saved there under the 'md_notes' folder[^1]). On iOS you can use the iTunes file explorer. The process on iOS is not really straight forward, but due to the close nature of the OS it's the best we have so far. I also expect most people not to export their notes too often. I'm looking into have a better expert feature, but that's how it is for the time being.

My wife started using it as well a few months ago and she didn't like how each time you opened the app it opened automatically on the new note screen ready to type, but preferred the behaviour of a more traditional note taking app. So now you can tweak it through a setting if that's not your thing. Just be wary that having it with one click instead of two is a lot less friction and will encourage you to write more (at least that's how it worked for me). I encourage you to try leaving it as the default initially. Even if you've nothing to write about if your note taking app opens on empty page you will be more inclined in writing. Even if it's about something silly or just random thoughts. It is still very useful to let you put your thoughts down. That's what it is for in the first place. Teria simplifies the process since every single time you open it you get a new note and can start writing effortlessly.

### Beta Available

Teria has been available in beta to my newsletter subscribers for a week. Now it is available for everyone. On iOS through [testflight][4] and on Android through Google Play (send me an email to be added to the list).

Let me know if you have any questions (either by replying to this email or from the [support page][3]!

[2]: https://200wordsaday.com
[3]: /support
[4]: https://testflight.apple.com/join/RofFp4Z5

[^1]: This name may change upon release. If it does change the folder will probably be called 'Teria'