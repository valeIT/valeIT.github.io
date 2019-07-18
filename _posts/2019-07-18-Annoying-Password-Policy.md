---
layout: post
title: Annoying Password Policy
date: 2019-07-18 18:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

A few years ago I was working for a (big) client that provided a login (for source control, chat and email) to every single employee or external contractor.

They had a really good infrastructure and IT department. They also had a very annoying password policy. It forced you to update your password every 3 months with no exceptions. Everyone in the office often complained about it, but from higher up the message was clear. The policy was there to stay.

On top of that it has some other 'interesting' rules about password contents and length:

> Password length: a new password must be at least 8 characters long.

> Password complexity: a new password must contain at least 1 character belonging to at least 3 of these groups:

> Numbers (0-9).

> Capital letters (A-Z).

> Small letters (a-z).

> Other characters (( ) ` ~ ! @ # \$ % ^ & \* - + = | \ { } [ ] : ; " < > , . ? /).

> Your new password must be different from your previous 8 passwords.

> Your new password cannot contain either your name, your surname or the name of the company.


The password length and complexity are totally legit. The other two are pretty peculiar. The most interesting thing is that you could set `Passw0rd` and it would be accepted. After the 3 months were up you could change it to `Passw0rd1`, later to `Passw0rd2` and so on.
