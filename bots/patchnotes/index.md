---
layout: page
title: Patch Notes
---

For each bot you will find listed the Patch Notes ordered by version number (latest on top). 

I currently do not offer support for bots.

{% for member in site.data.bots %}

<br>
{% if member.name %}
### {% if member.fontAwesome %}{% for image in member.fontAwesome %}<i class="fa fa-{{ image }}"></i> {% endfor %}{% endif %}[{{ member.name }}](/bots/patchnotes/page/{{ member.id | downcase }}.html)      
{% endif %}


{% endfor %}
