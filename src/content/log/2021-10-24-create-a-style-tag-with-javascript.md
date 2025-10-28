---
title: Create a style tag with javascript
layout: layouts/post.njk
date: 2021-10-24
---
If you want to create programmatically a `style` tag with javascript, here the tip:

```js
const style = document.createElement('style')
style.type = 'text/css'
style.append(myCSS)
document.head.appendChild(style)
```

where `myCSS` is your CSS string you want to inject, such as:

```js
const myCSS = `p{
  color: blue;
}`
```

