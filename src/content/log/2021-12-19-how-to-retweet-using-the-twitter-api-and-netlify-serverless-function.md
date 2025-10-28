---
title: How to retweet using the Twitter API and Netlify serverless function
layout: layouts/post.njk
date: 2021-12-19
---
Here the snippet:

```js
const client = require('./common/twitterClient')

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  
  const id = body.id

  const res = await client.post('statuses/retweet', { id })

  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}
```

