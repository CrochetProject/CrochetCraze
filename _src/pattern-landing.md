---
title: Pattern Landing Page
layout: other.njk
cssFile: ../css/style.css
---

# Patterns

<div class="imgSpace">

{%for page in collections.diagrampatternfold %}
{{page.data.title}}
[]({{page.url}})

{% endfor %}

</div>
