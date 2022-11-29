---
title: "Adding links to previous and next articles in Hugo"
slug: "adding-links-to-previous-and-next-articles-in-hugo"
date: 2022-11-29T10:34:21+01:00
categories: ["Templating"]
tags: ["Hugo", "browse articles", "variables", "bind context"]
---

I've just added a browse navigation to the single page templates of this blog. Below each article (or page, as they are called in the [Hugo universe](https://gohugo.io/variables/page/)), you will now find links to the previous and next article. This typical blog navigation allows users to browse from article to article without the need to return to a list page.

Since the documentation in Hugo is not super straight forward, i want to document my insights here.

## Finding the suitable page variables

First off, i didn't really know where to start looking within the [Hugo documentation](https://gohugo.io/documentation/). After 3 years of working on the template, my Hugo skills got a bit rusty. The [Template section](https://gohugo.io/templates/) only has pagination for lists. Searching for "previous next" leads to the [example template for a single page](https://gohugo.io/templates/single-page-templates/#postssinglehtml). Here, the page variables `.PrevInSection` and `.NextInSection` are used. This didn't sound suitable and indeed is not what i need since i have organized my articles in yearly folders, hence each year is a section. However, the use of [page variables](https://gohugo.io/variables/page/) was the necessary hint. Here we also find `.Prev` and `.Next`.

The entry for `.Prev` states:
> Points down to the previous regular page (sorted by Hugo’s default sort). Example: `{{if .Prev}}{{.Prev.Permalink}}{{end}}`. Calling `.Prev` from the last page returns `nil`.

The entry for `.Next` states:
> Points up to the next regular page (sorted by Hugo’s default sort). Example: `{{with .Next}}{{.Permalink}}{{end}}`. Calling `.Next` from the first page returns `nil`.

Interestingly, the example code differs. One uses the conditional `if`, the other uses `with`.

## Which one to use?

The [Conditionals section in the introduction to Hugo](https://gohugo.io/templates/introduction/#conditionals)) provides descriptions for both conditionals. Turns out, `with` is a very convenient way in Hugo to use the logic of an `if` condition while simultaniously binding the context of the used variable to the code block.

What does "binding the context" mean? In my not-so-computer-sciency own words: Hugo grabs all related variables and shoves it down into that `with`-block so we don't need to use that variable name anymore within that code block. Let's look again at the code examples from above and see how the output for the permalink is written. The `{{if .Prev}}` statement requires `{{.Prev.Permalink}}`, whereas the `{{with .Next}}` statement requires `{{.Permalink}}` to achieve the same result.

We DRY up our code by using the `with` conditional. This is also [encouraged by the Hugo documentiontation](https://gohugo.io/templates/introduction/#example-1-with):
>It is common to write “if something exists, do this” kind of statements using with.

## Final template

In my final HTML template, the Page variable `.Permalink` is used for the link attribute `href`. The displayed link label is the title of the article, using the [Page-level Parameter](https://gohugo.io/variables/page/#page-level-params) `.Params.Title`.

Here's the relevant code, reduced to the necessary parts.

```html
<nav aria-label="Browse">
  {{with .Next}}
    <a href="{{.Permalink}}">{{.Params.Title}}</a>
  {{end}}
  {{with .Prev}}
    <a href="{{.Permalink}}">{{.Params.Title}}</a>
  {{end}}
</nav>
```

## Complete code snippet, with accessibility considerations

And this is the complete code (both HTML and CSS), including the arrows as well as the link back to the home page.

Please note, that i have added `aria-hidden="true"` to all arrows and added separate aria-labels for the links. While the HTML code is translated into and read aloud as a semantic word by a screen reader, the announcement "heavy arrow headed right" is hardly a useful information. Instead, i prefix the link label with "Next article:" and "Previous article:" respectively. This has the effect that the links can be easier recognized when listing all links of a page within a screen reader.

(Now one could argue that a simple arrow is in itself also not a useful information for sighted users. However, this being a known pattern on blogs and having a potential association with a timeline, albeit reversed, i'd say the arrows provide enough information for sighted users. And yes, this is opening up a whole new field for discussion ;).)

```html
<nav aria-label="Browse" class="post-single__browse browse-nav">
  {{with .Next}}
  <div class="browse-nav__next">
    <div aria-hidden="true" class="browse-nav__symbol browse-nav__symbol--next">
      &#10142;
    </div>
    <a href="{{.Permalink}}" class="browse-nav__link browse-nav__link--next" aria-label="Next article: {{.Params.Title}}">{{.Params.Title}}</a>
  </div>
  {{end}}

  {{with .Prev}}
  <div class="browse-nav__prev">
    <div aria-hidden="true" class="browse-nav__symbol browse-nav__symbol--prev">
      &#10142;
    </div>
    <a href="{{.Permalink}}" class="browse-nav__link browse-nav__link--prev" aria-label="Previous article: {{.Params.Title}}">{{.Params.Title}}</a>
  </div>
  {{end}}

  <a href="{{.Site.BaseURL}}" class="browse-nav__home"><span aria-hidden="true">&larrb;</span> Back to home page</a>
</nav>
```

```css
.browse-nav {
  display: grid;
  gap: 3rem 5rem;
  grid-template-areas: "next prev" "home home";
  grid-template-columns: repeat(2, 1fr);
}
.browse-nav__prev {
  grid-area: prev;
  justify-self: end;
}
.browse-nav__next {
  grid-area: next;
}
.browse-nav__home {
  grid-area: home;
}
.browse-nav__symbol {
  text-align: right;
}
.browse-nav__symbol--next {
  transform: rotate(180deg);
}
.browse-nav__link--prev {
  display: inline-block;
  text-align: right;
}
```