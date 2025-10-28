---
title: How to read the body payload from a POST request in Netlify Edge function
layout: layouts/post.njk
date: 2022-10-20
---
Here the function example as per the title:

```js
export default async (request, context) => {
	
  	// you might want to check the method with `request.method === 'POST'`
  
    const body = await request.json()

    return new Response(body)
}
```

