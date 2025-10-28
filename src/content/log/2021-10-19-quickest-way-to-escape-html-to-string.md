---
title: Quickest way to escape HTML to String
layout: layouts/post.njk
date: 2021-10-19
---
Here the code:

```js
const esc = (v) => {
    var escape = document.createElement('textarea')
    escape.textContent = v
    return escape.innerHTML
}
```

Found it [here](https://stackoverflow.com/questions/5499078/fastest-method-to-escape-html-tags-as-html-entities).

