---
title: Make the first letter uppercase in javascript
layout: layouts/post.njk
date: 2021-10-09
---
Here my preferred snippet:

```js
var s = 'hello'

s.charAt(0).toUpperCase() + s.slice(1)

// 'Hello'
```

