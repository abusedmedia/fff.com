---
title: Set overwrite as default in GSAP
layout: layouts/post.njk
date: 2021-01-29
---
Note to self: to set `overwrite` always true by default on all GSAP tweens, configure the `defauls` property:

```js
gsap.defaults({
  overwrite: true
})
```

By default is `auto`, just to know.