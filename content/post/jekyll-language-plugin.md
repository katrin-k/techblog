---
title: "jekyll-language-plugin"
date: 2018-09-27T15:08:58+02:00
draft: true
---

jekyll-language-plugin



trouble getting it up and running.

wiki is super good. follow the constructions.

yet, there were a few explanations, I found confusing. It's mostly because I need to see it in action. Again, the plugin author did a great job. The plugin site itself is translated into maaany languages and there's an example that refers to the wiki guides. 

config.yml , e.g. `language_data: data.lang.%%` The placeholder doesn't need to be replaced. It is indeed the placeholder for the plugin.



Overall, when i thought I had it, I got this error: `Liquid Exception: No language specified for current page or post. in /_layouts/default.html`.

My layout `default.html` looked like so:

```html
<!DOCTYPE html>
<html lang="{{ page.language }}">
  {% include head.html %}
  <body>
    {% tinclude header.html %}

    {{ content }}

    {% tinclude footer.html %}

    <!-- <script src="js/creative.js"></script> -->
    {% include script-cookie.html %}

  </body>
</html>
```

The strange thing: at that time, I only had the index.html. No other page, no other post.

Where does {{page.language}} come from if I only have languages: - en -de? jekyll built-in

But: Each and every page needs the language variable in the fornt matter. Of course, I had also one other page, the 404.html. And this also needs the language var.

Another thing that confused me a little was all the talk about subsets.
