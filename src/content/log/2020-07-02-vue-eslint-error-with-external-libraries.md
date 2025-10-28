---
title: Vue ESlint error with external libraries
layout: layouts/post.njk
date: 2020-07-02
subtitle: 2nd July, 2020
categories: Tips
---
If you got this error when running a Vue project with the Vue-CLI:

```shell
No ESLint configuration found.
```

it's because the library you're using lacks the necessary ESLint config.

To skip that error, put in `vue.config.js` file the following command:

```js
module.exports = {
    chainWebpack: config => config.resolve.symlinks(false)
}
```

Found [here](https://github.com/vuejs/vue-cli/issues/2948)