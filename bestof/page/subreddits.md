---
layout: page
title: Best Of - Subreddits
---

<!-- <h1>{{ site.data.bestof_subreddits.title }}</h1> -->

{% for bestof in site.data.bestof_books.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}