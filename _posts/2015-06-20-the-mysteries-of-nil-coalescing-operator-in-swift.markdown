---
layout: post
title: The mysteries of "Nil Coalescing Operator" in Swift
date: 2015-06-20 13:24:09.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
tags: \[\]
meta:
\_wpcom\_is\_markdown: '1'
\_edit\_last: '1'
author:
login: Myshar
email: mysh@myshar.org
display\_name: Valentino Urbano
first\_name: ''
last\_name: ''
---

## What is this madness?

As a one-liner:

**Easy unwrapping of optionals in one line.**

## Example:

For the sake of this example the optional is of `Int?` type, but of course it works for every type, just make sure that the fallback you're providing is type correct.

`optionalValue` is an optional, if it's nil I want to assign a default value to it. If it's not it can keep it's own value.

Let's define a new constant called `value` to hold the result and call the "Nil Coalescing Operator" which is `??` to unwrap the optional and if necessary to provide a default value for it.

    let value = optionalValue ?? 0

Nothing more. If `optionalValue` has a value it'll be:

    value = optionalValue

If `optionalValue` is nil than:

    value = 0

[More Infos][0]


[0]: http://en.wikipedia.org/wiki/Null_coalescing_operator#Swift