---
title: How to convert a javascript array in a string separated by comma
layout: layouts/post.njk
date: 2024-04-14
---
The title is pretty self explanatory, here the code:

```js
const myArray = ['a', 'b', 'c']

JSON.stringify(myArray).replace(/[\[\]]/mig, '')

// '"a","b","c"'
```

Here an (better) alternative given by ChatGPT:

```js
myArray.map(item => `"${item}"`).join(',');
```

