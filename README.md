1. What is the difference between var, let, and const?
   answer:--
   Iin
   ##var:
   var is a function scoped ; it can be re-declared and re-assigned.In modern JavaScript ,var is avoid cause it's can lead to unexpected errors .

##let:
let is a block scoped; it can not re-declared but can be re-assigned.

##const :
const is also a block scoped ; it can not re-declared and can not be re-assigned after initialization.

2. What is the difference between map(), forEach(), and filter()?
   answer:--
   #map():
   To creating a new array by applying a function to each element .It's return same length new array.

#forEach():
It purpose is executes a function for each element in an array.and It returns undefined .
##filter ():
filter () also creates a new array but containing only the elements that pass a given condition.

---

3. What are arrow functions in ES6?
   answer:--
   ##arrow functions :

arrow functions are a new way to write function introduced in ES6.They provide a shorter and cleaner syntax compared to traditional function expressions.

4. How does destructuring assignment work in ES6?

   answer:--
   Destructing assignment is a shorthand in ES6 that allows unpacking values from arrays or properties from objects into distinct variables.It offers a more concise and readable way to extract data compared to traditional property access.

5. Explain template literals in ES6. How are they different from string concatenation?
   answer:--

## ##Template literals:

Template literals in ES6 are a new way to define strings. They are enclose by backticks (``) instead of single or double quotes.It joining two or more strings together without using + operator .

It allow string interpolation inserting variables or expressions directly inside ${} also writing strings in multiple lines without using \n .

## ##string concatenation:

In the other side string concatenation means joining two or more strings together using + operator . When writing multiple line its need \n or + operator .It becomes messy with long strings .
