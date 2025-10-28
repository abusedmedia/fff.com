---
title: Disable animations and transitions in a Chartjs instance
layout: layouts/post.njk
date: 2021-12-18
---
Here the tip:

```js
const config = {
  type: 'line',
  data: [],
  options:{
    animation: false,
  }
}

const chart = new Chart('#chart', config)
```

