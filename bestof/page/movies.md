---
layout: page
title: Best Of - Movies
---

<!-- <h1>{{ site.data.bestof_movies.title }}</h1> -->
<div>
{{ site.data.bestof_movies.description }}
</div>
{% for bestof in site.data.bestof_movies.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}