---
layout: page
title: Best Of - Courses
---

<!-- <h1>{{ site.data.bestof_courses.title }}</h1> -->

{% for bestof in site.data.bestof_courses.content %}
 <ul>
    <ol>
        <b>{{ bestof.title }}</b> <br> {{ bestof.description }}
    </ol>
  </ul>
  <!-- <p>{{ staff_member | markdownify }}</p> -->
{% endfor %}