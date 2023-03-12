---
layout: page
title: Best Of - Books
---

<!-- <h1>{{ site.data.bestof_books.title }}</h1> -->
<div>
{{ site.data.bestof_books.description }}
</div>
{% for bestof in site.data.bestof_books.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}