---
title: How to change programmatically a route in a Vue 3 project with vue-router
layout: layouts/post.njk
date: 2022-10-16
---
Here the way to change the routing programmatically in Vue 3 with Vue Router:

```vue
<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()
    
    const changeRoute = () => {
      router.push('/otherLocation')
    }
</script>


<template>
	<div @click="changeRoute">Change</div>
</template>
```

In the above example you might better use the `RouterLink` component in your `template` but you can see how to change the route due other triggers, such as a timeout or a network specific response.