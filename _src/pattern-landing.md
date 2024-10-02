---
title: Pattern Landing Page
layout: other.njk
cssFile: ../css/style.css
---

# Patterns

## This is the Pattern Landing Page


<div class="imgSpace">
{%for page in collections.patternfold %}

[{{ page.data.title }}]({{page.url}})

{% endfor %}
</div>
