---
title: How to use Vue Components in Nuxt Markdown
layout: layouts/post.njk
date: 2021-10-09
---
Having this kind possibility is simply great:

```markdown
# Title

<Hello :name="John"></Hello>

## Subtitle
```

In Nuxt, you just need to do a couple of things.

First, enable the feature since it's an opt-in capability, in `nuxt.config.js`:

```js
export default {
  
  components: true, // 👈
  
  target: 'static',
  ...
}
```

Then, create your components in`/components/global` folder, such as:

```
/components/global/Hello.vue
```

```vue
<template>
    <h1>Hello {{name}}</h1>
</template>

<script>
export default {
    props:{
      name:String
    }
}
</script>
```

Finally, write it in your markdown files using the mandatory closing tag:

```markdown
Yes🤘:

<Hello :name="John"></Hello> 

Nope😞:

<Hello :name="John" />
```

