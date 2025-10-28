---
title: How to use MySql into a lambda function in Netlify or Vercel platform
layout: layouts/post.njk
date: 2022-10-16
---
Suppose you have a MySql db and want to fetch or write to it from within a lambda function. I use Netlify function but it should be the same in other platforms.

```js
const mysql = require('mysql2/promise')
const connOb = require('./conn')

exports.handler = async (event, context) => {

  const body = JSON.parse(event.body)
  const name = body.name

  try{
    const conn = await mysql.createConnection(connOb)
    await conn.execute(`insert into mytable (name) values ('${name}')`)
  }catch(e){
    console.log('error on mysql')
  }
  
  return {
    statusCode: 200,
    body:'OK'
  }
}
```

Don't forget to define the connection object `connOb` such as:

```js
module.exports = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}
```

