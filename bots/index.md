---
layout: page
title: My Bots
---

Here's a list of all my published (personal) bots, sorted by date of release (newest first).

I currently do not offer support for bots.

{% for member in site.data.bots %}

{% if member.link %}

## {% if member.fontAwesome %}{% for image in member.fontAwesome %}<i class="fa fa-{{ image }}"></i> {% endfor %}{% endif %}<a href="{{ member.link }}">{{ member.name }}</a>
<br>
{{ member.description }}   

{% if member.bundleLink %}Included in [{{ member.bundleName }}]({{ member.bundleLink }}) bundle.{% endif %}{% endif %}  
[More Info](/bots/patchnotes/page/{{ member.id | downcase }}.html)          

{% endfor %}

[Click here to take a look at the Patch Notes for each project](/bots/patchnotes)