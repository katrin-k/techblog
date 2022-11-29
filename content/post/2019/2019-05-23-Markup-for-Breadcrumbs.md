---
title: "Markup for Breadcrumbs"
slug: "markup-for-breadcrumbs"
date: 2019-10-23T10:07:58+02:00
categories: ["Accessibility", "HTML", "TIL"]
tags: ["breadcrumb", "snippets"]
---

Reading into [the Breadcrumb example](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html) on the WAI-ARIA Practices website, i noticed a tiny detail in the HTML i never gave much thought before: The list uses `<ol>`, an ordered list, for the list markup.

So far, i've used an unordered list `<ul>`, mainly because i never gave it any thought and unordered lists are always used in menus. Come to think of it, it totally makes sense to use `<ol>` for breadcrumb navigations since it explicitly conveys the hierarchy of the nested page structure in that naviation.

## Code snippet

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li>
      <a href="#0">
        Home
      </a>
    </li>
    <li>
      <a href="#0">
        About Us
      </a>
    </li>
    <li>
      <a href="#0" aria-current="page">
        Company Profile
      </a>
    </li>
  </ol>
</nav>
```

## Accessibility aspects

- The Breadcrumb list is wrapped inside a `<nav>` landmark region and the `<nav>` receives either an `aria-label` or `aria-labelledby`.
- If the current page is marked up as a link, `<a>`, it must receive the attribute `aria-current="page"`. (Optional without link markup).
- The separators must be added via CSS.



(For `<ul>` it is always said that an unordered bullet list doesn't convey a hierarchy. Speaking and reading only languages that follow a top-to-bottom and left-to-right directional language, i beg to differ, though. There is a subtle hierarchy in what comes first. I'm often reminded of this when collaborating on a text and there's annotations or discussions about the order of items in a list. Especially in marketing, the order in a bullet list does matter.)

## Reading List

- WAI-ARIA Authoring Practices: [https://www.w3.org/TR/wai-aria-practices/](https://www.w3.org/TR/wai-aria-practices/)
- Breadcrumb example: [https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html)