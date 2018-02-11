---
layout: page
title: My Apps
---

Here's a list of all my published (personal) apps, sorted by date of release (newest first).

[If you need Support and would like to open a ticket, please go to the Support page.](/support)

{% for member in site.data.apps %}

{% if member.link %}

## {% if member.fontAwesome %}{% for image in member.fontAwesome %}<i class="fa fa-{{ image }}"></i> {% endfor %}{% endif %}<a href="{{ member.link }}">{{ member.name }}</a>
<br>
{{ member.description }}   

{% if member.bundleLink %}Included in [{{ member.bundleName }}]({{ member.bundleLink }}) bundle.{% endif %}{% endif %}  
[More Info](/apps/patchnotes/page/{{ member.id | downcase }}.html)          

{% endfor %}

[Click here to take a look at the Patch Notes for each project](/apps/patchnotes)