---
title: How to find and remove duplicates in array of object
layout: layouts/post.njk
date: 2023-11-11
---
Here the snippet I found, very fast!

```js
const uniq = (arr, key) => {
    return [
        ... new Map(
            arr.map(x => [key(x), x])
        ).values()
    ]
}

const data = uniq(incomingData, item => item.id)
```

