---
layout: page
title: My Apps
---

Here's a list of all my published app, sorted by platform.

[If you need Support and would like to open a ticket, please go to the Support page.](/support)

Most applications are available in English, Italian and Polish so far.

[Click here to take a look at the Patch Notes](/apps/patchnotes)

{% for member in site.data.apps %}

{% if member.section %}
#{{ member.section }}
{% endif %}

{% if member.link %}
##[{{ member.name }}]({{ member.link }})   

{{ member.description }}   
{% if member.bundleName %}
[{{ member.bundleName }}]({{bundleLink }})
{% endif %}
{% endif %}

{% endfor %}
