---
title: "Cascade vs. Inheritance"
date: 2019-08-27T15:08:58+02:00
draft: true
---


[This tweet by @ppk](https://twitter.com/ppk/status/1164523740329365505) gave me the thoughts:

> OK, so in CSS we talk about "Cascading and Inheritance", but to my mind they are two quite different things that should be treated completely separately.
> Agree? Disagree?

Huuhh. I realized, i never thought about this in detail. On the spot, i'd say "Yeah, probably the same. More or less". Is it two synonyms? Is one the concept (cascade) and the other the practical implementation (inheritance)? I'm seeing "inherited from" all over the dev tools, but i never read "casading along" anywhere. Or in what ways is it completely different? So, let's revise.

## The Definition of Cascade

### In standard dictionaries

I'm a linguist/semiotic. I believe, as a developer we all can learn a certain definition or usage of a term or concept within a specific area, but we can never get away from the overall used meanings. It's always intertwined. Plus, brains love categories and simplifications for the pure benefit of not being blown away by all the details all the time.

Hence, i'll take a look in dictionaries first.

The [Merriam Webster](https://www.merriam-webster.com/dictionary/cascade) says:

> 1. a steep usually small fall of water _especially_ : one of a series
> 2. 2a: something arranged or occurring in a series or in a succession of stages so that each stage derives from or acts upon the product of the preceding

Definition 1 points at a meaning of the same material moving along a certain path or route. Definition 2a points at a meaning of "something" (a material) in consecutive stages where on each stage the "something" is part of a certain "product"; this product then has an influence on the next stage, might change its system/context/appearance; it could be the same "something" throughout all stages or the "something" could change.

These two definitions don't necessarily contradict each other. If the "something" doesn't change its characteristics, definition 2 is rather a more detailed version of definitions 1. If the "something" does change its characteristics over the stages, i interpret definition 2 as a more systemic definition, taking reference to context/environment into account.

Definition 2 likely hints at how cascade and inheritance can be understood as different things.

The [Oxford Dictionary](https://www.lexico.com/en/definition/cascade) says (phrases in brackets are usage examples):

> 1: A small waterfall, typically one of several that fall in stages down a steep rocky slope.
>
> - 1.1: A mass of something that falls or hangs in copious quantities. (_‘a cascade of pink bougainvillea’_)
>
> - 1.2: A large number or amount of something occurring at the same time. (_‘a cascade of anti-war literature_’)
>
> 2: A process whereby something, typically information or knowledge, is successively passed on. ([as modifier] _‘the greater the number of people who are well briefed, the wider the cascade effect’_)
>
> 2.1: A succession of devices or stages in a process, each of which triggers or initiates the next.

Here it becomes interesting. Definition 1 is again the waterfall. However, the subdefinitions 1.2 and 1.2 already show a differentiation not present in the Merriam Webster defintions: the "something" is not one entity in consecutive places or stages. Here it's a mass, a large amount, many things of (roughly) the same "something" occuring side by side as well as consecutively (potentially together forming a kind of wholesome entity, such as the bougainvillea).

Definition 2 is even more interesting. The definition itself states the "one entity in a consecutive occurence" meaning. The usage example, however, takes the "happening parallely" into account. The (supposedly) same piece of information is spread with many people, each of who can spread the piece of information again. So starting with each person being briefed, the information is passed on in a (kinda) consecutive flow. All together, from the perspective of the result that the information is spread parallely, the "larg amount occurring at the same time" is present again.

Definition 2.1 is the same as Merriam Webster's defintion 2a: Each stage triggers the next, implying different characteristics on each stage.

### In MDN

And now for the definitions in the MDN.

In "[Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)" we can read: "The **cascade** is an algorithm that defines how to combine property values originating from different sources."

Alright. Here we come into the fields of specific area and specific definition. "… combine … values originating from different sources." This is a new-ish perspective. It looks at the result, or maybe better at a certain stage and the characteristics of the entity at this stage while stating several sources.

Further on, the article says: "The CSS cascade algorithm's job is to select CSS declarations in order
to determine the correct values for CSS properties. CSS declarations
originate from different origins: the **User-agent stylesheets**, the **Author stylesheets**, and the **User stylesheets**."

Here, an ongoing or consecutive flow does not seem to play a role. We got different sources and the algorithm picks values according to certain rules.

In the article "[Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)" we can read:

> At some point in your work, you'll find yourself in the situation where
> multiple CSS rules will have selectors matching the same element. In
> such cases, which CSS rule "wins", and ends up being the one that is
> finally applied to the element? This is controlled by a mechanism called
> the Cascade; this is also related to inheritance (elements will take some property values from their parents, but not others).

A bit later [we find](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#The_cascade: "What selectors win out in the cascade depends on three factors …" which are (in order of weight) Importance, Specificity and Source order. And later on: "… when considering all this cascade theory, …". So cascade is the underlying concept, inheritance is a different mechanism.

[Inheritance is a section in this article](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Inheritance), but not covered as an aspect of cascade. The section starts with: "CSS inheritance is the last piece we need to investigate to get all the information and understand what style is applied to an element. The idea is that some property values applied to an element will be inherited by that element's children, and some won't."

## Sooo, is it different things now?

Is it different things? Yes. Should it be treated completely differently? Jein (german for yes and no).

Cascade is a direct pick from somewhere, a rule directly applied to my element, with no steps inbetween. Inheritance is a rule directly applied to another element (higher in the nesting path) and subsequently also applied to certain elements deeper into the nesting path.

Each element appearing on our web pages is on a stage down in our markup waterfall (as everything inside our body element is already nested). Yet, the applied rules directly come from a certain place. Whereas Inheritance takes the rule from higher-nested element and passes the value down the nesting line (or waterfall, we could say).

Maybe this is, where all the confusion comes from?

## The Cascade in action

I find it hard to describe the CSS mechanism of cascade in other words. So, let's try and make it specific in the dev tools (or more specififcally the Inspector). I'm using Firefox on the [MDN's "Cascade and inheritance" page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance). Also, i've changed several default settings in my browser to take user and user-agent styles into account.

The changed browser settings are:

- In Preferences > Fonts and Colors > Font advanced: Change size to 26px and untick the box "Allow pages to choose their own fonts"
- In the colors settings, i select "Override the colors specified by the page" with "always".

This already changes the appearance quite significantly. All background colors are gone. The links have different colors and the font changed.

// IMAGES side-by-side

Now, let's open up the Inspector (by right-clicking on any element and choosing "Inspect element"). I'm looking at [the heading "The cascade"](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#The_cascade). In the Inspector on the left, we have the HTML markup, on the right we find the CSS information.

In order to see user and user-agent styles, make sure to show the browser styles. In the developer tools Settings (behind the 3 little dots) > section "Inspector" > tick "Show Browser Styles".

Here's the markup, a little cleaned up:

```html
<h3 id="The_cascade" class="highlight-spanned">
  <span class="highlight-span">The cascade</span>
  <a class="local-anchor" href="https://developer.mozilla.org…">…</a>
</h3>
```

## What about the !important keyword?

And the `!important` keyword? I'd call it the exception to it all (debatable, i know). But this one's for another philosophical moment.

## Loose notes

On each stage, it's a variety of factors, which ruke will be applied.
