---
layout: page
title: Best Of - VideoGames
---

<!-- <h1>{{ site.data.bestof_videoGames.title }}</h1> -->

{% for bestof in site.data.bestof_videoGames.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}