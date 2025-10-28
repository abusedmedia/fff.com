---
title: How to style a Details or Summary HTML tags when is open
layout: layouts/post.njk
date: 2021-12-31
---
Suppose this HTML markup:

```html
<details>
	<summary>Title</summary>
  <p>
    Content
  </p>
</details>
```

Here the CSS to style the summary when `details` is open by the user:

```css
details[open] summary{
  background:red;
}
```

