---
title: Use multiple values from js array into a SQL in Retool
layout: layouts/post.njk
date: 2024-01-13
---
If you're a Retool user, here the tip to make a SQL query that uses in the WHERE clause one or multiple values that come from a multi-select component:

```sql
SELECT
  *
from
  "Table"
WHERE
  category = ANY ({{ multiselect.value }})
```

