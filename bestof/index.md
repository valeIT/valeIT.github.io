---
layout: page
title: Best Of
---

This page tries to be an updated list of what I prefer across a various range of topics. Mainly for myself since I'm trying to use my website as [my own personal wiki][1] to refer to when I forget or need to know something.

This is a first version so it might not be accurate since I might have forgotten something, it will get fixed in future revisions.

[The ones without links (or with links pointing back to this page or the homepage) are upcoming]

{% for bestof in site.data.bestof %}
{% if bestof.link %}

 <ul>
    <li>
      <a href="{{ bestof.link }}">
        {{ bestof.name }}
      </a>
    </li>
  </ul>
  <!-- <p>{{ staff_member.content | markdownify }}</p> -->
{% endif %}
{% endfor %}


#### Changelog

- October 7, 2019: First Version.
- December 10, 2019: Adds More data.

[1]: {% post_url 2019-01-06-site-and-wiki %}