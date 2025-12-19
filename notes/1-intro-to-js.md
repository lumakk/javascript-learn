# Introduction to JavaScript

## What is JavaScript?
Javascript is a programming language that adds logic and interactive behavior to websites. Whereas HTML and CSS are markup languages that structure content on a web page, JavaScript adds functionality. 

Here is an example of how it may look like:

```html 
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: green;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <button onclick="alert('Button clicked!')">Click me</button>
</body>
</html>
```
In the example above, we can see Javascript applied on the `button` element.

## Data Types 
Similar to other programming languages, Javascript has different data types. A **data type** refers to the kind of value a variable holds. 

> NOTE: JavaScript is a case-sensitive language.

Although JavaScript has multiple data types, the following are some of the basics: 
* `Number` - represents both integers and floating-point values.
    * For example: `7, 19, 90, 3.14, 5.2`
* `String` - a sequeunce of characters, or text, enclosed in quotes.
    * For example: `"Hello, World!"`
* `Boolean` - represents one of two possible values. 
    * For example: `true` or `false`
* `undefined` - means a variable has been declared but not yet given a value. 
* `null` - means the variable has been intentionally set to "nothing".
* `Object` - similar to `structures`, it is a complex data type that can hold collcetions of **key-value pairs**. A **key** is a label for the data, while the **value** is the actual data. 
    * For example:
    ```js 
        let book = {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald", 
            year: 1925
        };
    ```
    In the example above, `title`, `author`, and `year` are the keys, while `The Great Gatsby`, `F. Scott Fitzgerald`, and `1925` are the values.
    Each key-value pair in an object is called a **property.** 
* `Symbol` - is a special type of value that is always unique and cannot be changed.
    * For example: 
    ```js 
    Symbol('mySymbol');
    ```
* `BigInt` - is used for very large numbers that exceed the limit of `Number` type. 
    * For example: `1234567890123456789012345678901234567890n;`

## Variables 
Similarly, in JavaScript we have variables for storing data. To declare a variable in JavaScript we use the `let` keyword followed by the variable name.

Here is an example declaring a variable called `age`:
```js 
    let age;
```
Right now, `age` doesn't have a value assigned to it. If you try to use it, it will return `undefined`

```js 
    let age;
    console.log(age);

    // OUTPUT 
    // undefined
```

To assign a value, you need to use the assignment operator (`=`).

The following is an example of the variable `age` with a value of `25`:
```js 
    let age = 25;
```

You can also reassign values for variables: 
```js 
    let age = 25;
    console.log(age); // OUTPUTS 25 
    age = 30; 
    console.log(age); // OUTPUTS 30 
```

There are rules when it comes to naming variables. In JavaScript it must begin with either a letter, an underscore (`_`), or a dollar sign (`$`). They cannot start with a number.
```js 
    
// Valid variable names
let age;
let _score;
let $total;

// Invalid variable names
let 1stPlace; // starts with a number
```

A common convention for writing variables is through `camelCase`. It is where the first word is all lowercase and each subsequent word starts with an uppercase letter. For example: 
```js 
let thisIsCamelCase;
let anotherExampleVariable;
let freeCodeCampStudents;
```

### let and const 
When working in JavaScript, the two most preferred ways to declare variables are `let`, and `const`

As mentioned previously, `let` allows you to declare variables that can be updated or reassigned later. For example:
```js 
    let score = 10;
    console.log(score); // 10
    score = 20;
    console.log(score); // 20 
```

On the other hand, `const` is used to declare variables that are **constant**. Once you assign a value to a variable declared with `const`, you cannot reassign it. 

This makes `const` ideal for values you don't want to change during the execution of your program. 

Here is an example of a constant variable `maxScore` with a value of `100`:
```js
    const maxScore = 100; 
    console.log(maxScore); // OUTPUTS 100 
```
Once `maxScore` is assigned the value of `100`, it cannot be changed.
```js 
    maxScore = 200; // returns an error
```

Variables declared with `const` must be assigned a value at the time of declaration. If you try to declare a `const` variable without assigning a value, you will get an error: 
```js 
    cosnt age; // Error: Missing initializer in const declaration 
```

When declaring a variable without a value, or will be reassigned later, use `let`.

## Strings 
In JavaScript (or other programming languages), a string is a sequence of characters used to represent text data. In JavaScript, to create a string, you can use single quotes (`'`), or double quotes (`"`).

Here is an example creating two variables that hold string values. 
```js 
    let singleQuotes = 'This is a string';
    console.log(singleQuotes);
    let doubleQuotes = "This is also a string";
    console.log(doubleQuotes);
```

If a stringle begins with a single quote, it must end with a double quote. The same applies to double quotes. 
```js 
    const improperStr = "Do not do this'; // ERROR 
```

Strings are also **immutable**, meaning we cannot change the string directly. In order to change the string, we'll have to assign a new string to the variable.
```js 
    let developer = "Jessica";
    console.log(developer);
    developer = "Quincy";
    console.log(developer);
```

### String Concatenation 
The process of combining or joining pieces of text together is called **string concatenation**. To do this, you'll have to use the (`+`) operator, the (`+=`) operator, and the `concat()` method.

The `+` operator is the simplest way to concatenate strings.
```js 
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; 
console.log(fullName); // John Doe
```
In the example above, we use the `+` operator to concatenate `firstname` and `lastName` variables along with a space `" "`, to create the full name. An issue with using the `+` operator is it could lead to spacing issues.

You can also append one string to another using the `+=` operator:
```js 
let greeting = 'Hello';
greeting += ', John!';

console.log(greeting); // "Hello, John!"
```

Another way to concatenate string is the `concat()` method. 
```js 
let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World
```
In the example above, we used the `concat()` method to join `str1`, a space ` ` and `str2`, into a single string.

### Display text with console.log 
Previously, we used the `console.log()` to display text, however there is more that we could do. 

To use `console.log()`, you call the method with the value or message you want to output inside the parentheses. 
```js 
    let num = 5;
    console.log(num); // OUTPUTS 5 
```
Here we declared a variable, `num` with the value `5`, and output it usinge the `console.log()` method. 

You can also pass in multiple values to `console.log()` separated by commas. For example: 
```js 
let name = "Alice";
let age = 25;
console.log("Name:", name, "Age:", age); 

// OUTPUTS
// Name: Alice Age: 25
```

`console.log()` is mostly used by developers for debugging and inspecting values or expressions in their code during development. 
