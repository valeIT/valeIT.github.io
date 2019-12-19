---
layout: post
title: RxSwift in TableView Cells
date: 2019-12-11 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

[This article requires you to be familiar with iOS Programming and the basics of RxSwift and RxCocoa]

Each time you have an rx subscription from inside your tableview cell you have the risk of showing stale data. Generally we have a variable that is strongly held by the view and whenever it is becomes nil the subscription gets cancelled.

Since cells are reused and not destroyed this does not happen. If you simply use a variable when the cell gets reused the old subscription will still be active and it will keep sending events to the wrong place. To avoid this problem you should take care of disposing your subscription manually each time the cell gets reused. This is easy and straightforward:

Inside your tableview add the disposeBag and change it to a var:

```
    private var disposeBag = DisposeBag()
```

In prepareForReuse force the subscriptions to be cancelled by resetting the DisposeBag:

```
    override func prepareForReuse() {
        super.prepareForReuse()
        self.disposeBag = DisposeBag()//Force rx disposal on reuse
    }
```


This will force the subscription to reset and set up a new stream. This way you don't get the old stream still firing on the new cell which is now linked to the wrong data model.
