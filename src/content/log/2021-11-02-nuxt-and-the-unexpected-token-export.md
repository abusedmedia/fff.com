---
title: Nuxt and the unexpected token export
layout: layouts/post.njk
date: 2021-11-02
---
Today I learned that in Nuxt, if you're using an ES6 library, you need to specifically set the transpilation option for each of them in `nuxt.config.js`:

```js
build: {
    transpile: [
      '@presenta/config-interpolator'
    ],
    ...
```

Found out [here](https://stackoverflow.com/questions/56690294/vuejs-nuxtjs-unexpected-token-export).

