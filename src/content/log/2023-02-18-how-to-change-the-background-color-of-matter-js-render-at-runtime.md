---
title: How to change the background color of Matter js render at runtime
layout: layouts/post.njk
date: 2023-02-18
---
If you need to change the background color of the render in a Matter.js project at runtime (after you've already initialized), here the tiny solution:

```js
// you have a render
var render = Render.create({...})

// ...
// here the color change
render.options.background = 'red'
```

