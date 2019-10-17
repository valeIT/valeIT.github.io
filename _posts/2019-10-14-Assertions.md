---
layout: post
title: Defensive Programming
date: 2019-10-14 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# How Not To Crash

I'm a big fan of defensive programming:

- Avoid crashing.

- Avoid getting into an undefined state.

In this article, we'll go more deeply on my philosophy on the topic and the various tools we have to make our job easier while handling errors.
This is a topic that can be used and applied for every single programming language.

## Assertions

At first look, the two bullet points of "not crashing" and "not ending up in an undefined state" seem to be at odds with each other. You either crash or end up in an undefined state. Not really.
Most of the time you can accomplish both you can avoid both by checking on preconditions beforehand. Assertions are a powerful tool to catch errors while debugging while ignoring them in production, but hopefully logging them somewhere so they can be fixed. At the same time, you can return the program into a state that is known by explicitly handling the error.
This requires that every error that has the possibility of making the application in an undefined state needs to be handled and handled correctly. It requires an explicit commit to it that needs to be renewed at every new commit.

## Fatal Error

There will be cases when the error is simply not recoverable from.

That is the case when it is advisable to crash if there is no better solution to handle the issue. But it is not always a must. If this error is on a screen that is being presented and it is not a blocking screen[^1] it can just be dismissed while logging the error to the backend so that it can be looked on and subsequentially fixed.

When to explicitly crash is a very controversial topic. There is the school of thought of never crashing and there is the school of thought of crashing early for every programmer side error.[^2]

Whatever you choose to do it is paramount that you have solid logging and crash logging system to allow you to find out the percentage of users that run across errors (and know which kind of error they encounter) on top of what percentage of users are crashing. Developing in the dark makes everything way harder.

## Tests

Tests are an important part of this technique. They're not necessary to implement it, but it makes everything safer. More importantly, it makes the programmer's life more bearable. They will be certain that while refactoring the behavior or the application will not change without them knowing (by a test failure).

The key here is behavior:

You test for behavior, not for specific code paths that can be changed without changing the final result. We only care about input and outputs.

This is ay easier if you've architectured the system with them in mind form the get-go, while it is much harder to change an app later to be testable. Being testable also assures a good degree of separation of concern and a single responsibility principle.

## Conclusions

There is not a right or wrong way. You decide and choose your own path that works best for you. What works best for me might be different.

The key takeaways though should be:

- To always log errors and make the logs available to programmers in real-time.

- To try as much as you can to have a unit test so that stuff can be changed without too many worries.

[^1]: A screen that you can't exit from because it must be there for that specific application.
[^2]: Programmer side errors are those kinds of error that are not recoverable and are something like a missing icon, a wrong screen or class being instantiated, ...
