---
title: Stitches Landing Page
layout: other.njk
cssFile: ../css/style.css
---

# Stitches

<div class="imgSpace">
{%for page in collections.stitchfold %}

- [{{ page.data.title }}]({{page.url}})

{% endfor %}
</div>