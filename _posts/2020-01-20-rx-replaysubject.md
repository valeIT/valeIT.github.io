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

Before reading this post you should be familiar with **RxSwift**.

ReplaySubject is useful when react comes into contact with part of the codebase that are imperative and for some reason or another (let it be the sdk or something it has to interact to) cannot be converted. It is a bridge between the 2 worlds.

ReplaySubject allows you to store and retrieve a variable in a non reactive way by using `.value` and to store a new value by using `.accept(value)`. This allows you to imperatively access the Rx stream (its latest value) and to emit new events. You can also access this value reactively by converting it to an Observable by using `.asObservable()` and subscribing to it normally by other Reactive code.

```
private var results: ReplaySubject<[String]> = ReplaySubject(value: [])

func viewDidLoad() {
  super.viewDidLoad()

  //Just an example
  let stream = results.asObservable
               .map(convertToViewModel($0))
               .bind(to: tableView.rx.items)
}
```

In iOS you will be using it a lot when interfacing with `UIKit`.

Note: If you were using `Variable` RxSwift has now deprecated it in favor of ReplaySubject. The behaviour should be similar.