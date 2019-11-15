---
title: "What are Symbols?"
date: 2019-10-11T17:08:58+02:00
categories: [JS]
tags: ["Understanding JS", "Symbols", "ES6", "ES2015", "Primitives"]
---

During the [Fronteers 2019 Conf](https://fronteers.nl/congres/2019) (i forgot which talk, will hand in as soon as the talk videos are online) one of the speakers mentioned Symbols, iirc as a potential object property key. And again i asked myself: What are Symbols?

MDN to the rescue. [In the glossary](<https://developer.mozilla.org/en-US/docs/Glossary/Symbol>), we can read:

> In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), Symbol is a [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
>
> A value having the data type **Symbol** can be referred to as a "Symbol value". In a JavaScript run-time environment, a symbol value is created by invoking the function [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), which dynamically produces an anonymous, unique value. A symbol may be used as an object property.

From what i could read further on, this is all the basic definitions there are. A Symbol is a primitive data type. It is unique. It is immutable. You can use it as an object property. There are so-called well-known Symbols which is nothing more than built-in symbols.

You create a Symbol this way: `const mySymbol = Symbol()` or with a description for your own reference: `const describedSymbol = Symbol('custom description here')`.

Along with ES6 it's been exposed, but under the hood it has been used for a long time already.

Symbols are not iterated over. Symbols also have a use case for meta programming (as [mentioned by Kyle Simpson in this comment](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/#comment-17825). Maybe it's because they're not part of loops, but you can still easily access them by either their description or by accessing Symbol properties with the `Object.getOwnPropertySymbols(obj)` method).

Apparently, if familiar with Symbols in Ruby or other programming languages, you shouldn't confuse them, in JS it's different.



## Now what's the value (ehem…) of a Symbol?

What can i use it for? When does it make sense to use it?

The main use case seems to be for library and frameworks, to provide unique property keys avoiding accidental duplicates in both the developer's code as well as potential future JS features (for the latter (see "[ES6 in Depth: Symbols](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)").



## Things that are part of the story, yet only briefly mentioned

- The runtime-wide symbol registry. Has all the symbols, built-in, built by third-party used in your app, built by you and me.
- `Symbol.for(key)` and `Symbol.keyFor(symbol)`. Methods to look up symbols in that runtime-wide registry.
- Iterations and `Symbol.iterator`.
- Symbol.match and other Regular expression symbols



## Reading List

- Symbol in MDN Glossary: [https://developer.mozilla.org/en-US/docs/Glossary/Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)
- Symbol in MDN's JS Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- "ES6 in Depth: Symbols" on mozilla hacks: [https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/) (Make sure to read the comments, too.)
- "ES6 Symbols in Depth" on ponyfoo: [https://ponyfoo.com/articles/es6-symbols-in-depth](https://ponyfoo.com/articles/es6-symbols-in-depth)
