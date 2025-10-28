---
title: How to convert a full name to an acronym with the initials
layout: layouts/post.njk
date: 2021-10-09
---
So, your name is John Doe and want to get JD in javascript?

```js
const shortNames = n => {
  return n.split(' ').map(d => d.substr(0, 1).toUpperCase()).join('')
}

shortNames('John Doe') // JD
```

