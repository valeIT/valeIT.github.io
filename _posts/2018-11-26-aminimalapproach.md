---
layout: post
title: A Minimal Approach
date: 2018-11-26 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# A Minimal Approach

Everybody in the JS world is always using the latest framework for every single project.

Using big frameworks come with a lot of overhead to set up, maintain and update your dependencies.

For big projects, it is needed and solves a lot of problems, for a smaller project I find it completely ridiculous.

**A simple Application**

Your entire application is 100 lines of javascript and you're not using any ES6 syntax?

Just use vanilla js! Are you even thinking about it?

Your php is just going to read one value from the database and return it in json without authentication?

Just use one php file and echo the json_encoded array manually. [Please use prepared statements though.][1]

100 lines of JS

+

15 lines of PHP

VS

create-react-app - 1283 dependencies

+

laravel new - 72 dependencies

**Analyse your use case**

Don't misunderstand though. I'm not saying don't use any framework nor I'm saying not to use Laravel (I'm using it for [Markdown.love][2]) or React. Use them when it makes sense to, not just because it's the default and you do it without even thinking about the complexity that they introduce into the system. Debugging and maintaining one 15 lines PHP file is way less cumbersome than Laravel, even though Laravel has great error reporting. It's just too much for what we need.

[1]: http://php.net/manual/en/pdo.prepared-statements.php
[2]: https://markdown.love
