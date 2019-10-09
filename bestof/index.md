---
layout: page
title: Best Of
---

This page tries to be an updated list of what I prefer across a various range of topics. Mainly for myself since I'm trying to use my website as my own personal wiki to refer to when I forget or need to know something.

This is a first version so it might not be accurate since I might have forgotten something, it will get fixed in future revisions.

[The ones without links (or with links pointing back to this page or the homepage) are upcoming]

{% for bestof in site.bestof %}
 <ul>
  <li>
      <a href="{{ bestof.url }}">
        {{ bestof.title }}
      </a>
    </li>
  </ul>
  <!-- <p>{{ staff_member.content | markdownify }}</p> -->
{% endfor %}

- [Best Articles I've written][0]
- [Best Books][1]
- [Best Movies][2]
- [Best TV Series][3]
- [Best Podcasts][4]
- [Best Blogs][5]
- [Best Youtube Channels][6]
- [Best Courses][7]
- [Best Subreddits][8]
- [Best VideoGames][9]
- [Best Music][10]
<!-- - [Best Cities I've Visited][11] -->

#### Changelog

- October 7, 2019: First Version.

[0]: /articles
[1]: /books
[2]: /movies
[3]: /series
[4]: /podcasts
[5]: /blogs
[6]: /youtube
[7]: /courses
[8]: /reddit
[9]: /games
[10]: /music
<!-- [11]: /cities -->