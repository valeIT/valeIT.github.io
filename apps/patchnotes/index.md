---
layout: page
title: Patch Notes
---

For each app you will find listed the Patch Notes from the latest one, to the oldest.

[If you need Support and would like to open a ticket, please go to the Support page.](/support)

{% for member in site.data.apps %}

{% if member.section %}
#{{ member.section }}    
{% endif %}
    
<br>
{% if member.name %}
####[{{ member.name }}](/apps/patchnotes/page/{{ member.id | downcase }}.html)      
{% endif %}
    
{% endfor %}
