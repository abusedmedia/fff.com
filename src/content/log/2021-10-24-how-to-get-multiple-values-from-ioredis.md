---
title: How to get multiple values from ioRedis
layout: layouts/post.njk
date: 2021-10-24
---
If you need to get multiple values from a Redis database using a single atomic call, here the way:

```js
const vals = await redis.mget(
    'key:a',
    'key:b',
    'key:c'
  )

// vals is an array such as [2, 5, 8]
```

The order of the array matters and it's related to the order of the commands in the `mget` call.