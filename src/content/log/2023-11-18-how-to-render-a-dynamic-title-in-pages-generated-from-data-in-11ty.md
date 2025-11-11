---
title: How to render a dynamic title in pages generated from data in 11ty
layout: layouts/post.njk
date: 2023-11-18
---
This is the way to render the page title when you're creating pages dynamically using data.

The variable you'd use in the template is not accessible for the title property.

So this is the trick:

```html
---
pagination:
  data: posts
  size: 1
  alias: post
permalink: "posts/{{ post.slug }}/"
eleventyComputed:
  title: "{{ post.title }}"
---

<h1>
  {{ post.title }}
</h1>
```

Note: The `permalink: "posts/{{ post.slug }}/"` in the example above is specific to that use case. For regular log posts, the permalink is automatically set by `log.json`.

