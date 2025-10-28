---
title: Electron process in Vue.js CLI version
layout: layouts/post.njk
date: 2020-12-18
---
If you want to use the `process` of Electron from within a Vue.js project, there's a little conflict because webpack inject its own `process` object.

You can use both in this way:

```js
export default{
  mounted(){
    console.log(window.process) // electron process
    console.log(process) // webpack process
  }
}
```

