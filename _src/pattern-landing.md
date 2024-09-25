---
title: Pattern Landing Page
layout: other.njk
---

# Patterns

## This is the Pattern Landing Page

{%for page in collections.patternfold %}

- [{{ page.data.title }}]({{page.url}})

{% endfor %}

