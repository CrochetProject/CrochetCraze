---
title: Pattern Landing Page
layout: base.njk
---

# Patterns

## This is the Pattern Landing Page

{%for page in collections.patternfold %}

- [{{ page.data.title }}]({{page.url}})

{% endfor %}

