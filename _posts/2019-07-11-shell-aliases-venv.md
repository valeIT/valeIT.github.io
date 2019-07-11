---
layout: post
title: Simple shell aliases for virtualenv
date: 2019-07-11 18:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

<!-- 2015-03-25-simple shell aliases - start and exit virtualenv.txt -->

# Simple shell aliases for virtualenv

It happens often that I need to use python2 for a specific dependency or app while I have python3 as default on my system. Thst's exactly one of the main goals of virtualenv. The problem is that I can never remember the exact command to type to turn in on and off.

## Create the shorthands

First we need to setup the aliases so that we can later refer to the shorthand versions of the commands.

#### Turn it ON

Open your .bash_profile (if you're using bash) and paste either:

```
alias startvenv='source bin/activate; cd bin'
```

or

```
alias entervenv='source bin/activate; cd bin'
```

Since my memory is terrible I have them both, so I'm sure I'll type the right one no matter what.

#### Turn it OFF

Again in your .bash_profile add the following line to crearte an alias to exit:

```
alias exitvenv='deactivate'

```

## Use the shorthands to quickly turn virtualenv on and off

Now to activate venv you just need to cd to your virtualenv project folder and run`startvenv` or`entervenv`depending on which one you pasted in and you'll be set. You just need to cd to your application folder and stsrt up your virtual environment.
