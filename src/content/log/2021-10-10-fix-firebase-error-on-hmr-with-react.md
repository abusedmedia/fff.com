---
title: Fix Firebase error on HMR with React
layout: layouts/post.njk
date: 2021-10-10
---
It's something annoying when developing a React App with Firebase as backend.

Every time you save, the HMR break the Firebase initialization, because Firebase is already initialized.

This is my quick solution:

```js
if(!firebase.apps.length) firebase.initializeApp(config) 
```

Basically, `firebase.apps.length` is global and tells if there's any firebase app initialized.

