---
title: How to find a process by port used
layout: layouts/post.njk
date: 2022-02-05
---
Here the magic:

```shell
lsof -i:3132
```

It will print the `PID`, then you can kill it with:

```shell
kill `PID`
```

