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


I'm  a big fan of defensive programming:

- Avoid crashing.

- Avoid getting into an undefined state.

In this article we'll go more deeply on my philosophy on the topic and the various tools we have to make our job easier while handling errors.
This is a topic that can be used and applied for every single programming language.

## Assertions

At first look the two bullet points of "not crashing" and "not ending up in an undefined state" seems to be at odds with each other. You either crash or end up in an undefined state. Not really.
Most of the times you can accomplish both you can avoid both by checking on preconditions beforehand. Assertions are a powerful tool to catch errors while debugging, while ignoring them in production, but hopefully logging them somewhere so they can be fixed. At the same time you can return the program into a state that it is known by explicitely handling the error.
This requires that every error that has the possibility of making the application in an undefined state needs to be handled and handled correctly. It requires an explicit commit to it that needs to be renewed at every new commit.

## Fatal Error

There will be cases when the error is simply not recoverable from.

That is the only case when it is advisable to crash if there is no better solution. But it is not always a must. If this error is on a screen that is being presented and it is not a blocking screen it can just be dismissed while logging the error to the backend so that it can be fixed.

When to explicitely crash is a topic that is very controversial. There is the school of though of never crashing and there is the school of though of crashing early for every programmer side error (errors that are not runtime errors and are something like a missing icon, a wrong screen or class being instantiated, ...)

## Tests

Tests are an important part of this technique. They're not encessary to implement it, but it makes everything safer and the programmer's life more bearable. They will be safe when refactoring and changing code while assuring that the behaviour or the application did not change.

They key here is behaviour: You test for behaviour, not for specific code paths that can be changed without changing the final result.
