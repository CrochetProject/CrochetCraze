---
title: Pattern Landing Page
layout: other.njk
---

# Patterns

<div class="imgSpace">

{%for page in collections.diagrampatternfold %}
{{page.data.title}}
[]({{page.url}})

{% endfor %}

{%for page in collections.writtenpatternfold %}
{{page.data.title}}
[]({{page.url}})

{% endfor %}

</div>
