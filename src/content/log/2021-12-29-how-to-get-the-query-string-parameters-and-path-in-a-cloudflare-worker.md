---
title: How to get the query string parameters and path in a Cloudflare worker
layout: layouts/post.njk
date: 2021-12-29
---
Here the tip to get the string URL parameters:

```js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest (request) {
  const { search, pathname } = new URL(request.url)

}
```

Using the `URL` class we can extract the different parts of the URL requested:

- `search` is the query string, such as `?p=1&p=2...`
- `pathname` is the path after the domain, such as `/my/path/is` 