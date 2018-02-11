---
layout: page
title: Patch Notes
---

For each app you will find listed the Patch Notes ordered by version number (latest on top). 

[If you need Support and would like to open a ticket, please go to the Support page.](/support)

{% for member in site.data.apps %}

<br>
{% if member.name %}
### {% if member.fontAwesome %}{% for image in member.fontAwesome %}<i class="fa fa-{{ image }}"></i> {% endfor %}{% endif %}[{{ member.name }}](/apps/patchnotes/page/{{ member.id | downcase }}.html)      
{% endif %}


{% endfor %}
