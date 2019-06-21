---
layout: post
title: Rebuilding MySQL after a corruption crash on MacOSX
date: 2019-06-05 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

It seems that the latest version of mysql on OSX is really unstable. Every 6/12 months it crashes and I'm forced to backup the data and restore it.[^1] Before proceeding make sure you have an export and/or ways to retrieve all of your databases and tables since **they will be deleted**.

The error message is always the same, a corruption somewhere:

```
ated assertion failures or crashes, even
InnoDB: immediately after the mysqld startup, there may be
InnoDB: corruption in the InnoDB tablespace. Please refer to
InnoDB: http://dev.mysql.com/doc/ref

ause you hit a bug. It is also possible that this binary
or one of the libraries it was linked against is corrupt, improperly built,
or misconfigured. This error can also be caused by malfunctioning hardware.
Attempting to collect some information that could help diagnose the problem.
As this is a crash and something is definitely wrong, the information
collection process might fail.
```


# The nuclear option

If you're using a local database with no important data, or with data that you can retrieve from a server just delete everything and start over.

**This will DELETE all your tables and data!! Use with care! Never use this on a production database!**

I hope the warnings were clear enough, but to reiterate this is not something you'd ever want to run apart on a test/development database that you can recreate in minutes.


Go to System Preferences and open the MySQL panel. Click on Initialize Database to delete everything in your database and start over.

Choose a password and relaunch mysql by clicking on start.

Everything will be back to normal, apart from the key fact that all your databases have been wiped clean.

Open your administration panel of choice (phpmyadmin,adminer,..) or the command line and import the .sql file with your database that you backed up beforehand.

[^1]: I know I don't need to go that drastic, but it is the quickest way if you have a backup.