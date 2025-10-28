---
title: Enable CORS on Netlify
layout: layouts/post.njk
date: 2020-02-15
subtitle: 15th February, 2020
categories: Logs
tags: [log]
---
Put a file `_headers` alongside the `index.html` with the following rule:

```shell
/*
  Access-Control-Allow-Origin: *
```

