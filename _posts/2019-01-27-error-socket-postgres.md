---
layout: post
title: Solve Postgres Socket Errors On Mac OSX
date: 2019-01-27 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image: /assets/article_images/.jpeg
image2: /assets/article_images/.jpeg
author: Valentino Urbano
---

This is not a tutorial, it's more of a note so I'm going to remember how to do something the next time I stumble again on the problem.

Most database connections go through sockets while using localhost due to security (not having the database exposed externally). Most of the times the setup is automatic, you just install Postgres (or MySQL since this process works for many kinds of databases) and it will automatically be set up to use sockets. Once installed try connecting to it normally. If it works all good, if it shoots up a connection error like the following there is a problem with the directory where Postgres is trying to create the socket file.

FATAL: could not create lock file "/var/pgsql_socket/.s.PGSQL.5432.lock": No such file or directory

The first thing to do is to remove the old file after we can create the new one and if necessary give it permissions such as Postgres will be able to write on it.

Open a terminal:

1. Run `rm /usr/local/var/postgres/postmaster.pid`
2. Navigate to /var and create the folder pgsql_socket if it doesn't exist already by running `mkdir pgsql_socket`.
3. Restart postgres. On mac run: daemon brew services restart postgresql, on Linux it depends on your distribution.
4. Try connecting again and confirm that it works.

The steps are the same for a MySQL installation, the only difference is in the name of the files and their locations. The lock file for MySQL on macOS are either on /var or /usr/var and they're named mysql.lock
