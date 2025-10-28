---
title: Set headers in ExpressJs app to return a file buffer
layout: layouts/post.njk
date: 2021-10-10
---
If you want to return a file from an API request in an Express.js app, here the settings:

```js
app.get('/',  (req, res) => {
	// ... create the buffer of a PDF, PNG or ZIP
  
  const filename = 'myFile.pdf' // myFile.png or myFile.zip
  const mimeType = 'application/pdf' // 'image/png' or 'application/zip'
  
  res.setHeader('Content-Disposition', 'attachment;filename="' + filename)
  res.setHeader('Content-Type', mimeType)  
  res.send(buffer)
})
```

