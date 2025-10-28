---
title: String object notation to value reference
layout: layouts/post.njk
date: 2021-12-22
---
Here the cleanest way to get the object value from a string representation of the dot notation path:

```js
const key = 'a.b.c'
const ob = {a: {b: {c:true}}}

const prop = key.split('.').reduce((o, i) => o[i], ob)
```

