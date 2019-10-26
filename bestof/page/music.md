---
layout: page
title: Best Of - Music
---

<!-- <h1>{{ site.data.bestof_music.title }}</h1> -->

{% for bestof in site.data.bestof_music.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}