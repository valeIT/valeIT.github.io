---
layout: post
title: Mobile Developers should learn some basic SQL
date: 2019-04-28 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

If you're a mobile developer nowadays you are probably used to work with a relational database under the door (unless you are using something like MongoDB, but I prefer a relational database myself[^1]), but it is also likely that you are never exposed to it, instead of using something like Core Data or Realm to access it from higher level functions. That's all good and it works.

There are times though when you might want to do something more low level and get exactly what you want from the database instead of doing all of your work in code. Or you might want something that doesn't enroot your whole application as both Realm and Core Data do (but Core Data in particular). Both Realm and Core Data will give you exactly the result you want, but they add a lot of complexity on top of that. They are the right solution for a medium/big application, but for a small application, it might not be worth the addiction in complexity. If you just need to save and retrieve some data without spinning up the whole relationship model mapping[^2] that both Realm and Core Data provide - aka mapping the relationships between the various objects in your application.

For iOS, a good framework to work with that is a bit more high level than plain SQLite is [FMDB][1]. People also talk well of [SQLite.swift][2] if you'd prefer a type-safe swift version, but I haven't tried it.

Note that both of these frameworks require you to use SQL queries to get your data so you would need to learn that first. [FreeCodeCamp][3] has a great guide on it. As always trial and error is the best approach. If you are on Mac make sure to download "DB Browser For SQLite" to always have a visual representation of what your database looks like. It is basically the equivalent of the "Realm Studio" application, but for SQLite.

[^1]: Won't go further on this discussion cause it deserves its own article.
[^2]: Take for example a blog post and its author, you wouldn't want to store all of the information relating to the author in the blog post, you would only want a reference to whom the author is while storing the author somewhere else, alongside all of the other authors.

[1]: https://github.com/ccgus/fmdb
[2]: https://github.com/stephencelis/SQLite.swift
[3]: https://guide.freecodecamp.org/sql/
