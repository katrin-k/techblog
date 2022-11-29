---
draft: true
title: "Draft article"
date: 2020-11-28T11:23:58+01:00
categories: ["TIL", "JS"]
tags: ["keyword", "yield", "return", "Cypress"]
---


Ruby uses it. Python apparently as well. I've come across it recently when looking into Cypress. One of the core concepts of Cypress is,

> Cypress commands do not **return** their subjects, they **yield** them.
>
> [Docs](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Subject-Management)

So what does that mean?

## In Python

On a website explaining this concept for Python it says

> The yield statement suspends the function’s execution and sends a value back to the caller, but retains enough state to enable the function to resume where it is left off. When resumed, the function continues the execution immediately after the last yield run. This allows its code to produce a series of values over time rather them computing them all at once and sending them back like a list.
>
> **return** sends a specified value back to its caller, whereas **yield** can produce a sequence **of** values. We should use **yield** when we want to iterate over a sequence but don't want to store the entire sequence in memory.
>
> [dzone](https://dzone.com/articles/when-to-use-yield-instead-of-return-in-python)

## In Ruby (rather different)

In Ruby, the `yield` keyword is apparently handled differently. If a method has the `yield` keyword, that method expects a code block (basically a function's code block) which is then called (= executed) within the method. The article "[Ruby iterators and the yield keyword (with examples)](https://www.brainstobytes.com/ruby-iterators-and-the-yield-keyword-with-examples/)" by Juan Orozco Villalobos helped me lot in understanding what to expect when Ruby executes a method with a `yield` keyword.

Additionally, this stackoverflow post provides context for [Ruby's yield feature in relation to computer science](https://stackoverflow.com/questions/764134/rubys-yield-feature-in-relation-to-computer-science).

## In JavaScript (same as Python)

Cypress, on the other hand, is written in JavaScript. So how is `yield` done in JS?

From what i understand, it's the same as in Python. MDN says

> The `yield` keyword is used to pause and resume a generator function […].
>
> [MDN - yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

The generator function is supposed to, well, generate results as long as its condition is true.
