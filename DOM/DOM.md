# What is the DOM
- The Document Object Model (DOM) is a programming interface for HTML documents
- The DOM is an object-oriented representation of an HTML document
- It allows websites to be read and altered by using scripting languages such as JavaScript

- The `document` object contains every element of the HTML in the form of objects


# DOM and JavaScript

- JavaScript can be used to access and alter elements in the DOM
- DOM manipulation is achieved by using `document` methods intrinsic to the DOM


## DOM Selectors

 **_document.getElementByID_**: Takes a string argument and returns the element with a matching ID. IDs are unique in HTML

    document.getElementByID("highlighted")

**_document.getElementsByClassName_**: Takes a string argument and returns elements with a matching class in the form of a `nodeList`

    document.getElementByClassName("option")


 **_document.getElementsByTagName_**: Returns elements with matching tag

    document.getElementByTagName("h1")

 **_document.querySelector_**: Takes a css-like selector and returns the **first** element with matching selector

    document.querySelector("#highlighted")
    document.querySelector(".option")
    document.querySelector("li.option")

 **_document.querySelectorAll_**:
    Same as previous but returns *all* matching elements


------------------


## DOM Manipulation

We can use JavaScript to manipulate DOM and change its elements by:

 - changing styles
 - changing classes
 - changing content
 - changing attributes

### Manipulating Styles

_*Separation of Concerns*_: A concept where HTML, CSS and JS each handle an aspect of the webiste: structure, presentation, and behavior, respectively. The objective is to keep each of these aspects isolate as much as possible, for instance, refraining from directly changing styles with Javascript.
    
So instead of adding styles with JavaScript, we can dot his by adding a class using `.classList`, which is an array-like list of classes attributed to a DOM element. Example:
    
     .classList.add("your-class");

This respects the Separation of Concerns since we can determine styles for "your-class" separately in our CSS file. 

Other `.classList` methods:

   * `.classList.add("your-class");`

   * `.classList.remove("your-class");`

   * `.classList.toggle("your-class");` *

    ˆ* conditionally adds or removes a class depending on whether it is present or not in the element
    

### Manipulating Text and Content

    .textContent: returns a string of all the text contained in a given element
    

    .innerHTML: similar to textContent,except it returns a string containing HTML tags inside the element



Both of these methods can be used to select or change the content of an element:

    p = document.querySelector("p");

    p.textContent;      //"some text"

    p.textContent = "A different text";



These methods differ in that `.innerHTML` will display HTML tags from retrieved elements and will respect tags specified when changing the content of an element:

    p = document.querySelector("p");

    p.innerHTML;        //"some <strong>text</strong>"

    p.innerHTML = "<em>more</em> text";

### Manipulating Attributes



We can use `getAttribute()` and `setAttribute()` to read and write attributes in DOM elements.



    link = document.querySelector("a");

    link.getAttribute("href");        //thissite.com

    link.setAttribute("href", "thatsite.com")


