---
layout: page
title: Best Of - Blogs
---

<!-- <h1>{{ site.data.bestof_blogs.title }}</h1> -->

{% for bestof in site.data.bestof_blogs.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}