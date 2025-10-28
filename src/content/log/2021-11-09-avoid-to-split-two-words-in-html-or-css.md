---
title: Avoid to split two words in HTML or CSS
layout: layouts/post.njk
date: 2021-11-09
---
Here the handy tip to avoid that two or more words are split in the paragraph.

Using the HTML only:

```html
<p>
  These two&nbsp;words need to be in the same line
</p>
```

or with CSS:

```css
<p>
  These <span class="together">two words</span> need to be in the same line
</p>
```

```html
span.keeptogether {
  white-space: nowrap;
}
```

