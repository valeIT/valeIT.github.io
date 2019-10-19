---
layout: page
title: Best Of - TV Series
---

<!-- <h1>{{ site.data.bestof_tvseries.title }}</h1> -->

{% for bestof in site.data.bestof_tvseries.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}