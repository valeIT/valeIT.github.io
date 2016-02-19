---
layout: page
title: My Apps
---

Here's a list of all my published apps, sorted by platform.

[If you need Support and would like to open a ticket, please go to the Support page.](/support)

Most applications are available in English, Italian and Polish so far.

[Click here to take a look at the Patch Notes](/apps/patchnotes)

{% for member in site.data.apps %}

{% if member.link %}

## {% if member.fontAwesome %}{% for image in member.fontAwesome %}<i class="fa fa-{{ image }}"></i> {% endfor %}{% endif %}<a href="{{ member.link }}">{{ member.name }}</a>
<br><br>
{{ member.description }}   
    
{% if member.bundleLink %}Included in [{{ member.bundleName }}]({{ member.bundleLink }}) bundle.{% endif %}
{% endif %}

{% endfor %}
