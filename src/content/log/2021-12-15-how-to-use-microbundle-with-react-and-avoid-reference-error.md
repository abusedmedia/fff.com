---
title: How to use microbundle with React and avoid Reference Error
layout: layouts/post.njk
date: 2021-12-15
---
If you are using microbundle to create React librarys that can be used in other React projects, you may encourred in some compilation errors such as "Reference Error: React is not defined at ..." or something.

Here the solution I found after some search and investigations, simply run `microbundle` with this flags:

```shell
microbundle --no-compress --jsx React.createElement --jsxFragment React.Fragment --jsxImportSource react --globals react/jsx-runtime=jsx
```

Good luck!