---
title: How to check if all fonts are loaded with javascript
layout: layouts/post.njk
date: 2022-01-08
---
Within modern browsers it wouldn't be more easier than that:

```js
document.fonts.ready.then(() => {
  // do something
})
```

