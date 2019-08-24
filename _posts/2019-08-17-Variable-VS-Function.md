---
layout: post
title: When to use Variables and when you should prefer Functions instead
date: 2019-08-17 22:28:05.000000000 +01:00
type: post
published: true
status: published
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# Variables VS Functions

I have pretty strict rules on when to define something as a variable or a function: it mostly comes down to complexity.

## An Example

The following example use Swift, but this policy can be applied generally across frameworks and programming languages.

Let's say we have a viewModel class that needs to expose some data we could do something like:
```
struct SessionViewModel {
    private var account: Account

    var accountId: Int {
        return account.id
    }

}
```
or like this:
```
struct SessionViewModel {
    private var account: Account

    func getAccountId() -> Int {
        return account.id //O(1)
    }

}
```
In both cases the result is the same. I prefer to use the first (variable) if the we are simply returning a value or doing a simple O(1) computation that we can assume is going to take very little time and not being computationally expensive (aka basically instant).

If there is any work behind it use a function:
```
struct SessionViewModel {
    private var accounts: [Account]

    func getAccountIds() -> [Int] {
        return accounts.map{$0.id} //O(n)
    }

}
```
Map needs to go through each element of the array to return the id which makes it a O(n) complexity. Using an instance variable, in this case, tricks the callee into making wrong assumptions about the kind of work being performed.

## My Policy

Use variables for O(1) operations.
Use functions in all other cases.
