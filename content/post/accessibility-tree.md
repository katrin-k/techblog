---
title: "What is the accessibility tree?"
date: 2018-09-27T15:08:58+02:00
draft: true
---

# What is the accessibility tree?

Part of web semantics.



Subsequently, I'll abbreviate the Accessibility Tree with ATree. 

The ATree is similar to the DOM tree (and, in fact, generated out of it). The DOM tree is an hierarchical model of a webpage. It's the first thing a browser does when processing a webpage. At the top, there's the document, the HTML document. The first child of the Document node is the `html` node which again has 2 children: the `head` and the `body`. This is the same for all and required to be valid HTML. As you can see from the phrasings, each element in a DOM tree is called a "node". 

The `body` node now can have many different nodes, depending on how the webpage is structured. In this example, we'll have a `<header>` , a `<main>` and a `<footer>` element. In the DOM, these are the children nodes of the `body`. 

The `header` might have an `<h1>` and a `<p>` element as children nodes. The `h1` node has some text, the actual heading. This is now a text node. The same goes for the paragraph.

Here's a graphic that illustrates the DOM tree:

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.or1999/xlink" x="0px" y="0px" width="600px" height="424px" viewBox="0 0 600 424">
<rect x="224.5" y="10.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="151" height="43"/>
<text transform="matrix(1 0 0 1 261.7778 36.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">document</text>
<rect x="224.5" y="66.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="151" height="43"/>
<text transform="matrix(1 0 0 1 283.1138 92.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">html</text>
<rect x="36.5" y="137.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="151" height="43"/>
<text transform="matrix(1 0 0 1 93.4565 163.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">head</text>
<rect x="35.5" y="208.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="151" height="43"/>
<text transform="matrix(1 0 0 1 77.5044 234.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">&#x2026; nodes</text>
<rect x="354.5" y="137.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="151" height="43"/>
<text transform="matrix(1 0 0 1 411.2383 163.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">body</text>
<rect x="230.5" y="208.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="105" height="43"/>
<text transform="matrix(1 0 0 1 257.0015 234.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">header</text>
<rect x="292.5" y="298.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="57" height="43"/>
<text transform="matrix(1 0 0 1 316.5566 324.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">p</text>
<rect x="206.5" y="298.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="57" height="43"/>
<text transform="matrix(1 0 0 1 225.3325 324.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">h1</text>
<rect x="206.5" y="370.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="57" height="43"/>
<text transform="matrix(1 0 0 1 221.0532 396.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">text</text>
<rect x="291.5" y="370.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="57" height="43"/>
<text transform="matrix(1 0 0 1 306.0527 396.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">text</text>
<rect x="350.5" y="208.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="105" height="43"/>
<text transform="matrix(1 0 0 1 384.6641 234.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">main</text>
<rect x="468.5" y="208.5" style="fill:#00DF72;stroke:#000000;stroke-miterlimit:10;" width="105" height="43"/>
<text transform="matrix(1 0 0 1 498.668 234.6899)" style="font-family:'Helvetica-Bold'; font-size:16;">footer</text>
<line style="fill:none;stroke:#000000;stroke-width:3;" x1="299.5" y1="54" x2="299.5" y2="67"/>
<line style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;" x1="300" y1="110.5" x2="130.333" y2="136.5"/>
<line style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-miterlimit:1;" x1="300" y1="110.5" x2="434.666" y2="136.5"/>
<line style="fill:none;stroke:#000000;stroke-width:3;" x1="106.5" y1="181" x2="106.5" y2="209"/>
<line style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;" x1="430" y1="181.5" x2="284.114" y2="207.5"/>
<line style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;" x1="430" y1="181.5" x2="405.333" y2="207.5"/>
<line style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;" x1="430" y1="181.5" x2="524" y2="207.5"/>
<line style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;" x1="278.333" y1="252.5" x2="234.5" y2="297.5"/>
<line style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;" x1="280.333" y1="252.5" x2="322" y2="297.5"/>
<line style="fill:none;stroke:#000000;stroke-width:3;" x1="234.5" y1="342" x2="234.5" y2="371"/>
<line style="fill:none;stroke:#000000;stroke-width:3;" x1="320.5" y1="342" x2="320.5" y2="371"/>
</svg>



The ATree is created by the browser after the DOM has been modeled. The ATree is a checked  and - in probably most cases - reduced version of the DOM. It is optimized to be used by [assistive technology](https://en.wikipedia.org/wiki/Assistive_technology).

The parts that are taken away the ones that are only visually important. From the above example, actually nothing would be reduced since this example all contains relevant information for the user. 

## What is removed for the Accessibility Tree?

Which tool creates the ATree? The browser.

How does the browser interact with the ATs? Via an API. A screen reader will use the ATree and create an adjusted user interface presentation. A screen reader will create a spoken version of the web page. A braille reader will output content in braille. Each assistive technology also has different ways for their users to interact. A mouse click for example **is done how in a screen reader?**.

How can a web developer provide a good, semantic user interface that is helpful for a wide variety of users? "We do this by ensuring that we express the semantics of our pages correctly: making sure that the important elements in the page have the correct accessible
roles, states, and properties, and that we specify accessible names and
descriptions. The browser can then let the assistive technology access that
information to create a customized experience." (google dev site)

It is also recommended, as a web developer, to not try and optimize for certain assistive devices. Similar to mobile devices, there's such a vast amount of technologies, let alone the number of ways people use zoom and keyboards, that no single web page can cater for all the different options. Instead, we as developers should focus on our output and making it as supportive as possible, thereby relying on web standards (**which are not there yet…**). 

"We can take advantage of that built-in accessibility by writing HTML that expresses the semantics of our page elements." (google)

"Earlier we noted that screen readers will announce an element's role, name, state, and value." => visible labels and text alternatives (google)



## How does the browser decide what to remove?

"A browser can transform the DOM tree into an accessibility tree because much of
the DOM has *implicit* semantic meaning." (google)

### Sources

Google developer sites: https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree