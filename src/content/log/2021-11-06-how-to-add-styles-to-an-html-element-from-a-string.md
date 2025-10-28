---
title: How to add styles to an HTML element from a string
layout: layouts/post.njk
date: 2021-11-06
---
Here the little snippet:

```js
const div = document.createElement('div')
const styles = 'width:100%;background-color:red;'
div.setAtribute('style', styles)
```

