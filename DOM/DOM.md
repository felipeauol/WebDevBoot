# What is the DOM

- The Document Object Model (DOM) is a programming interface for HTML documents
- The DOM is an object-oriented representation of an HTML document
- It allows websites to be read and altered by using scripting languages such as JavaScript
- The `document` object contains every element of the HTML in the form of objects

# DOM and JavaScript

- JavaScript can be used to access and alter elements in the DOM
- DOM manipulation is achieved by using `document` methods intrinsic to the DOM

## DOM Selectors

 _document.getElementByID_:
    Takes a string argument and returns the element with a matching ID
    IDs are unique in HTML

    document.getElementByID("highlighted")

_document.getElementsByClassName_:
    Takes a string argument and returns elements with a matching class in the form of a `nodeList`

    document.getElementByClassName("option")


 _document.getElementsByTagName_:
    Returns elements with matching tag

    document.getElementByTagName("h1")

 _document.querySelector_: 
    Takes a css-like selector 
    Returns the *first* element with matching selector

    document.querySelector("#highlighted")
    document.querySelector(".option")
    document.querySelector("li.option")

 _document.querySelectorAll_:
    Same as previous but returns *all* matching elements
