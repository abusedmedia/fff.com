---
title: How to modify the HTML source page of Wordpress before to send to the user
layout: layouts/post.njk
date: 2022-12-15
---
If you need to create a Wordpress Plugin that is able to modify the HTML source before sending it to the users, here the PHP basic code:

```php
function mod_func($buffer) {
  $buffer = preg_replace('/oldtext/u', 'oldtext', $buffer);
  return $buffer;
}

function mod_buffer_start() { ob_start("mod_func"); }
function mod_buffer_end() { ob_end_flush(); }

add_action('wp_body_open', 'mod_buffer_start');
add_action('wp_footer', 'mod_buffer_end');
```

