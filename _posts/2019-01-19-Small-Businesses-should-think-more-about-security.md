---
layout: post
title: Small Businesses Should Think More Carefully About Security
date: 2019-01-19 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

Small businesses deal with security as it's not their problem. The "won't happen to me" way of thinking is pervasive and wrong.<br><br>Nobody cares about YOU, but they have bots that indiscriminately wander around and try known vulnerabilities and scan known ports to try and get it to use you as a botnet. They don't care who you are.

I was doing some routine checks on one of my clients' servers and upon logging in through ssh it showed 10k failed login attempts. It was obvious that someone was trying to brute force into the machine.

The server IP address was not public, it was mainly used internally, but it needed to be exposed to the internet so putting it behind a VPN was not a feasible solution.

# Change Port

Other than changing the SSH password to something more robust the real solution was to change the port. It was using the default port for SSH (22) and obviously, all the bots tried to brute force it, being the default. I changed it to a random port that was not used by any other service (let's say for example 1539) and the login attempts stopped completely. When doing so you need to remember that you need to specify the port when trying to connect via SSH, otherwise SSH will use the default port and it will fail.

ssh -p PORT username@IP

# Key Auth

Probably the best solution was to use only keys to authenticate a user, but in that case, it wasn't possible. Turn off password authentication entirely from the SSH configuration file and only allow connections with keys. This way each time you have a new authorized user you'd need to add their key to the server.

# Think about security

No matter how you decide to tackle the problem don't ignore it. I could have just said whatever they didn't get in, we have a decently strong password. It's all good.
