---
title: "Avoid non-standard unicode characters to be displayed as Emojis"
date: 2018-09-27T15:08:58+02:00
draft: true
---

The other day I wanted to use the cloverleaf on my personal website. Since it was a simple visual enhancement, I added it as a before element.

I picked it from the ever so helpful [HTML arrows](https://www.toptal.com/designers/htmlarrows/symbols/) website. Same as on Toptal's website, I wanted the cloverleaf to appear in a simple, plain color. So I went ahead, added my CSS and got… [the cloverleaf emoji](https://emojipedia.org/four-leaf-clover/). 

If your're reading this on a Mac, but not on Firefox, you'll already always see the emoji. As it turns out though, only Firefox will render the non-standard unicodes as non-emojis. Chrome and Safari both use the Apple Color Emoji font. No matter what you specifiy in your CSS. 

Here's the HTML:

```html
<p class="cloverfleaf">A line with a cloverleaf.</p>
```

And this is the CSS:

```css
.cta-line::before {
  content: '\2618';
  margin-right: 0.5rem;
  font-family: Arial, sans-serif;
  font-weight: inherit;
  font-style: inherit;
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
}
```





## Using unicode characters in pseudo elements

When I tried to use unicode characters as an enhancement, I thought: "It's only visual. Let's go for ::before and ::after elements then."

Well, well… Firefox and Chrome begged to differ. 

* Possible to set `vertical-align`.
* chars had larger font-size than text in the paragraph
* aligning the chars and text was different.

I guess, they're called elements for a reason. 



dump CSS:

```css
.cta-line::before,
.cta-line::after {
  content: '\2619';
  font-size: 2.7rem;
  display: inline-block;
  position: relative;
  top: 9px;
}

.cta-line::before {
  margin-right: 0.3rem;
  transform: scaleX(-1);
}

.cta-line::after {
  margin-left: 0.3rem;
}
```

