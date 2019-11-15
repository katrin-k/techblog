---
title: "Higher-order what?!"
date: 2019-10-14T10:08:58+02:00
categories: ["JS", "Software Architecture"]
tags: ["Higher-order functions", "Higher-order components"]
---



One of the reasons for having started this blog is because i very well understand coding, software and computer concepts, but i fail miserably at remembering the terms denoting these concepts. Today, the term "high order function" (HOF) came to my mind again, plus the concept of a "higher-order component" (HOC), along with the question marks of "what was that again?".

Why "higher-order", what does it mean, what does it refer to? Can i build myself a memory hook (or Eselsbrücke, donkey bridge, as the german language has it), a memory hook to keep the difference of these terms easily available for me? And what do both of them really mean?



## Higher-order functions

At first, the higher-order functions.

The [wikipedia definition](https://en.wikipedia.org/wiki/Higher-order_function) puts it quite nicely:

> In mathematics and computer science, a higher-order function is a function that does at least one of the following:
>
> - takes one or more functions as arguments,
> - returns a function as its result.

In JavaScript, some of the most famous higher-order functions are `map()`, `reduce()`, `filter()` and `addEventListener()`. What have they all in common? They take a function as a parameter, also known as the callback function.

In their podcast episode "What is a higher-order function?", Eric Normand expands the term higher-order function to first-order function (taking 1 function), second-order function (taking 1 function which in turn takes another function) and so on. I've never heard this before, but i like to point it out as it seems useful when talking about specific code, making things a little less abstract.

So far so good. Now my problem often is, that i look at abstracted code bits and feel like i am looking at modern art. I need to know what's behind it to give it some meaning.



## A closer look

The wikipedia article uses a second-order function as an example for the various programming languages. Looking at the JS example, i was like… aahyeahsure, one calling the other, suresure. And then i looked more closely and read out the details to myself and was like… what?!?

This is the JavaScript example:

```JS
const twice = (f, v) => f(f(v));
const add3 = v => v + 3;

twice(add3, 7); // 13
```



The above is a quite minimal way of writing a second-order function, proudly served by the ever so lovely arrow functions. It's wonderfully abstract, so let's de-abstract. Here's my – really detailed – reading process.

```js
// Original twice function.
const twice = (f, v) => f(f(v));

/*  This is an inbetween step, applying the add3() function.
    Beware: Here add3 is actually called from the global scope,
    that's not the case in the original twice function and
    this is one of the key points of higher-order functions.
    It's all about passing functions around as values.*/
const twiceApplyingAdd3 = (f, v) => {
  return add3(add3(7));
};
// Now a more declarative way of writing the twice function.
// add3 is again called from the global scope.
const twiceDissected = (f, v) => {
  const innerFunction = add3(7); // innerFunction = 10
  const outerFunction = add3(innerFunction) // outerFunction = 13
  return outerFunction; // returns 13
};
/*  Remember the scope problem? Here we have the dissected
    twice function again, more abstracted, but with the
    correct scope.*/
const twiceDissectedWithCorrectScope = (f, v) => {
  const innerFunction = f(v); // innerFunction = add3(7) = 10
  const outerFunction = f(innerFunction) // outerFunction = add3(10) = 13
  return outerFunction; // returns the value 13
};

/*  Now, let's make our higher-order function do less.
    The passed-in function is only called once.*/
const once = (f, v) => {
  return f(v);
};

// Some rewriting of the add3 function, 'cause you know, sometimes this helps.
// The original add3 function.
const add3 = v => v + 3;
// add3 with an explicit return statement.
const add3ArrowWithReturn = v => {
  return v + 3;
};
// add3 with an old school function syntax...
// ...enhanced with an unneccessary variable declaration.
const add3WithOldschoolFunctionSyntax = function(v) {
  const result = v + 3;
  return result;
};

// Calling the higher-order functions.
twice(add3, 7); // 13
once(add3, 7); // 10
```



What happens in a JavaScript engine, when you call the function `twice(add3, 7)`? I'm following the call stack order.

1. At first, `twice(add3, 7)` is called. Note, how the `add3` function is not called directly, but the function value (the function as such) is passed as a parameter. Another way of writing this, would be: `twice(function(v) {return v + 3;}, 7)` or `twice((v => v + 3), 7)`.

2. Within the twice function, now `add3` is called the first time. The parameter passed to `add3` is again `add3`,

3. This time, `add3` is called directly, using the value 7, originally passed into the `twice` function.
4. The returned value 10 is now the parameter of the first `add3` function call: `add3(10)`.
5. This, in turn, returns the value 13.
6. And ends the calculation of `twice(add3, 7)`.

So, the function `twice` is called twice, because whatever function you hand over as a parameter, `twice` will call it two times. And that's about it, i would say.



## Higher-order components

Now let's head over to higher-order components (HOC). With all the frameworks and modularized software architecture patterns, this is a thing now. From what i can figure, React made this pattern popular.

While researching for this article, i also often found the term "React Higher Order Component", but don't be misguided here. It's not a React thing. It's a software development thing. You can do the same in VueJS, using a render function-based approach to your Vue components. I don't know about Angular and Ember, but i would guess it's possible there, too. 'Cause, you know, in the end it's all JavaScript anyways.

So, what is a higher-order component? It's a component which takes another component as its input, does something with this inputted component and outputs a (new) component again. I put "new" in brackets here. The HOC either injects properties into the inputted component or the HOC wraps the properties around it. Or both. That's why i kinda prefer to say the HOC returns an enhanced version of the inputted component (and be it for the sake of a more human-friendly approach to describing things). I've also seen quite often the term "WrappedComponent".

Here are some examples:

- Form validation wrapped around form fields: https://codepen.io/javiarques/pen/oWKMZy (Codepen by Javier, using React)
- A Timer interval injecting its functionality into a Time component: https://codepen.io/datchley/pen/xRgdKL (Codepen by Dave Atchley, using React)
- A Codepen by Ben Daley where the HOC not yet exists. It's a test and a nice way to include test-driven development: https://codepen.io/at0g/pen/mEyOjJ
- A link to a presentation by Johannes Lamberts on HOC in Vue: https://www.sumcumo.com/vuejs-meetup-3-zu-vuetify-und-higher-order-components (Article in German, Slides in English)

If you search the internet, and more specific JSFiddle or CodePen, you'll quickly find more examples.



## Reading List

- The english wikipedia page has examples from many programming languages https://en.wikipedia.org/wiki/Higher-order_function.
- "What is a higher-order function?" by Eric Normand on LispCast: [https://lispcast.com/what-is-a-higher-order-function/](https://lispcast.com/what-is-a-higher-order-function/).
- If you wanna know about the call stack, the talk "What the heck is the event loop anyway?" by Philip Roberts is the number one recommendation on it, [https://www.youtube.com/watch?v=8aGhZQkoFbQ](https://www.youtube.com/watch?v=8aGhZQkoFbQ).