---
title: How to extract the file extension from the filename
layout: layouts/post.njk
date: 2021-11-05
---
Here the lovely snippet to grab the extension from the file name in javascript:

```js
const filename = 'myFile.pdf'
const extension = filename.split('.').pop()
// pdf
```

