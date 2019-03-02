---
layout: post
title: How not to write programming documentation
date: 2019-03-02 18:19:03.000000000 +01:00
type: post
published: true
status: publish
categories: []
author: Valentino Urbano
---

[[Source:](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

> Rx.Observable.prototype.flatMapLatest(selector, [thisArg])

> Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.

If you didn't understand a single word dont worry. I did not either.

That's what you end up wirting if you think eveyrone has your own level of knoeledge of a subject. Jargon that can only be understood by someone that already knows the topic you're talking about. But if you're writing a piece of documentation you need to assume that the reader has no prior knowledge, unless you are writing (and you make it clear in the beginning of your article/document) for an experienced audience.

Once you learn something it feels easy, but when you were learning it did not feel that easy. Never forget that.
](Most of the times documentation is of acceptable quality. It is rare to find really good documentation online, but it is also rare to find a really abysmal one. We have reached a middle ground which is great, I still hope that in the future the situation keeps improving.

[Observables in Rx:](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

> Rx.Observable.prototype.flatMapLatest(selector, [thisArg])

> Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.

If you didn't understand a single word don't worry. I did not either.

That's what you end up writing if you think everyone has your own level of knowledge of a subject. Jargon that can only be understood by someone that already knows the topic you're talking about.

If you're writing a guide or any piece of documentation you need to assume that the reader has no prior knowledge of the subject at all, unless you know for a fact that you are writing for an already experienced audience.

If you find yourself writing for an already experienced audience make sure to write a disclaimer before the main body of the article stating that prior knowledge of the topic is required.

Once you learn something it feels easy, but when you were learning it did not feel that easy. Never forget that.
)
