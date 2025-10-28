---
title: How to rotate a body in Matter Js
layout: layouts/post.njk
date: 2023-01-25
---
This is the command to rotate a Body in Matter.js:

```js
// you have a body
const b = Matter.Bodies.rectangle(200,200,100,20)

// here how to rotate it:
Matter.Body.rotate(b, Math.PI / 4)
```

