---
title: Include CSV in Vue-CLI project
layout: layouts/post.njk
date: 2020-07-19
---
Here the steps:

- Install the loader with `npm i csv-loader -D`
- Add in `vue.config.js` the webpack rule:

```js
module.exports = {
  chainWebpack: config => {
    config
      .module
      .rule('csv')
      .test(/\.csv$/)
      .use('csv-loader')
      .loader('csv-loader')
      .options({
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
      })
      .end()
  }
}
```

- Import the file anywhere in your components:

```js
import csv from './assets/file.csv'

export default{
  created(){
    console.log(csv)
  }
}
```

It's already converted as JS object. Neat!