---
layout: page
title: Best Of - Youtube
---

<!-- <h1>{{ site.data.bestof_youtube.title }}</h1> -->

{% for bestof in site.data.bestof_youtube.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}