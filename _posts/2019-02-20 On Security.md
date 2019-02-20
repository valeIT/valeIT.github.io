---
layout: post
title: Securing Your Server Or VPS
date: 2019-02-19 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image: /assets/article_images/.jpeg
image2: /assets/article_images/.jpeg
author: Valentino Urbano
---

Design your system with security in mind from the get-go. Adding it later is always a pain. Security needs no to be an afterthought. It needs to be a pillar from which to build upon. Otherwise, it will be flawed by compromises.

I'm assuming you have some kind of server that hosts a website and possibly a database that holds important information.

1.  Close all the unnecessary ports and drop everything you're not using your firewall (Get Little Snitch for Mac, use iptables of firewalld on Linux and leave the windows firewall enabled).

Your server should drop all connections unless you need it. Always use whitelists. No blacklists.
Everything's off unless it needs to be on.

2.  Keep your system up to date!

All the security practices are useless if you use old software that has public vulnerabilities that everyone can use. Or even just find a script online.

3.  Never allow anyone to connect as root via ssh.

Always connect as a normal user and after you connected if you need to act as root you can use `su`.
Use a strong password both for your user account and for root access.

4.  Use key based authentication. Don't allow username/password logins.

An even better way would be to drop passwords entirely and just use an RSA key to login to SSH and SFTP (only allow SFTP, don't allow FTP).

5.  If you store passwords in the database hash them with an industry standard algorithm and salt them.

Even better: Consider if you really need to store user data. For every single data, you have to ask yourself why it's needed.

6.  Use https and https only.

This is especially true if you have user logins and/or a store, but it's good to have regardless. Learn what HSTS is and how to implement it.

7.  Enable 2FA for your hosting account.

All these precautions are pointless if someone can just go to your hosting provider and reset your password.

8. Do not run code you don't understand in the terminal

Only run code that you know the purpose, if you don't know what specific command is doing or if it feels fishy, look it up on google or use `man` before running it.
