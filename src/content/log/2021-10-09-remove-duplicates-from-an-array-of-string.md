---
title: Remove duplicates from an Array of String
layout: layouts/post.njk
date: 2021-10-09
---
This is my preferred way:

```js
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

// ['A', 'B', 'C']
```

