---
layout: post
title: SSH Key on windows
date: 2019-03-14 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

Adding an SSH key on Mac OSX or Linux is pretty straightforward and both Github and Gitlab come with official guides on the process of generating an ssh key and adding it to the agent.

Until a few years ago you were forced to install putty or a similar third party program to handle SSH keys the Linux way, but nowadays thanks to Microsoft

The process on Windows is pretty similar nowadays, it used to be way harder, but with windows adding support for Bash it has become way easier to do.

1. Open Git Bash
2. Paste `cd ~/.ssh/` to navigate to the SSH directory
3. If you don't have a key already in this directory make one using ssh-keygen
   3.1 Run `ssh-keygen -C "email@email.com"` to generate a new key
   3.2 Add a password if you wish (you should)
4. Run `eval \$(ssh-agent)`, it will load the SSH agent for the session
5. Run `ssh-add ~/.ssh/id_rsa` to add the key to the agent. If you've set up a key before you will be asked to type it in.

Now you can open the public file located at ~/.ssh/id_rsa.pub:

1. Run `cd ~/.ssh` to navigate to the directory of the file
2. Run `cat id_rsa.pub` to print the content of the public key in the terminal window. Copy it and paste it in either Gitlab, Github, Linode, Digital Ocean or any other site using SSH authentication. Obviously, you will need to add your public key to the SSH settings in each site. Make sure NOT to add the private key, but only the public one (the file ending with .pub).

You can now push/pull from your private repositories or connect using SSH to your VPS.
