---
layout: page
title: Best Of - Articles
---

<!-- <h1>{{ site.data.bestof_articles.title }}</h1> -->
<div>
{{ site.data.bestof_articles.description }}
</div>
{% for bestof in site.data.bestof_articles.content %}
 <ul>
    <ol>
        <a href={{ bestof.url }}><b>{{ bestof.title }}</b></a> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}