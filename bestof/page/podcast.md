---
layout: page
title: Best Of - Podcasts
---

<!-- <h1>{{ site.data.bestof_podcasts.title }}</h1> -->

{% for bestof in site.data.bestof_podcasts.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}