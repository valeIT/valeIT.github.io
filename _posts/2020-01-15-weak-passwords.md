---
layout: post
title: Weak Passwords
date: 2020-01-08 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

When I started using 1Password I manually imported the logins I remembered and changed the passwords for the most important ones. The others were left with relatively weak passwords, but if they got compromised nothing bad would happen. A few days ago I became curious  and started trying to find out which of the accounts were part of this group after almost a decade.

## How To Show Weak passwords in 1Password

Open 1Password and click the “Traditional” layout button to see all your data in columns. The button is just left of the search field at the top of the window or you can select it from the View > Layout menu.
Make sure View > Columns > Password Strength is enabled.
Now click the Password Strength column header to sort all your Logins by the strength of their passwords.

## Results

Apart from the expected old passwords, it was astounding to find other passwords that I was forced to create with weak rules because of restrictions of that specific website password policy. Even more astounding was that more than that a few of these weak passwords were from banking websites. Those bank accounts are also protected with two factor authentication so that would not be such of a big concern, but it is telling at how banks are still behind in this area.

[Truy][3] [Hunt][4] has a [good analysis][1] on this topic. It is not recent, but a lot of the points are still valid today and I have not seen many banks keep the pace with technology changes.[^1]

[^1]: [A newer take on the topic][2]

[1]: https://www.troyhunt.com/do-you-really-want-bank-grade-security/
[2]: https://www.troyhunt.com/banks-arbitrary-password-restrictions-and-why-they-dont-matter/
[3]: https://twitter.com/troyhunt/status/981613750825267200
[4]: https://twitter.com/troyhunt/status/1057362868293652480
<!-- 2012-07-15 -->
