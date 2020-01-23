---
layout: post
title: RxSwift - When to use ReplaySubject
date: 2020-01-20 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

*Before reading this post you should be familiar with **RxSwift** and Reactive Programming. It is also fine if you use another framework of the Rx family on anothe platform since the whole idea of rx is that it keeps one syntaxt for different platforms.*

ReplaySubject is useful when the reactive part of the application comes into contact with the imperative part and for any reason (let it be the sdk or something it has to interact to) the imperative part cannot be converted. It is a way to make a bridge between the 2 worlds.

ReplaySubject allows you to store and retrieve a variable in a non reactive way by using `.value` and to store a new value by using `.accept(value)`. This allows you to imperatively access the Rx stream (its latest value) and to emit new events.

You can also access this value reactively by converting it to an Observable by using `.asObservable()` and subscribing to it as you would normally do with any other Reactive code.[^1]

```
private var results: ReplaySubject<[String]> = ReplaySubject(value: [])

func viewDidLoad() {
  super.viewDidLoad()

  //Just an example
  let stream = results.asObservable
               .map(convertToViewModel($0))
               .map(convertToRow($0)) //Simplified, not actually this simple
               .bind(to: tableView.rx.items)
}
```

Note: If you were using `Variable` RxSwift has now deprecated it in favor of ReplaySubject. The behaviour should be similar.

Before using ReplaySubject you should be sure that the same thing cannot be accomplished with a simpler Observable since the complexity that a ReplaySubject brings to the table is significant.

[^1]: In iOS you will be using it a lot when interfacing with UIKit for example.
