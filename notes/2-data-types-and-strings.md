# Working with Data Types and Strings 

## Dynamic Typing 
You may have noticed in the previously that when we're declaring variables, we don't explicitly specify the data type of the variable (`Boolean`, `String`, `Integer`, `...`). This is because JavaScript is a **dynamically typed langauge**, meaning you don't need to specificy the data type of the variable. Instead, the type is determined based on the value assigned to the variable while the program is running. **This allows you to change the type of variable throughout the program**
```js 
    let example = "Hello";
    example = 42;
```
In the example above, we can see that variable `example` is declared with a string, `"Hello"`. But then we update the value to be a number, `42`intead. 

This is different from **statically typed languages**, where you have to explicitly state the data type of a variable. We can see this in languages like Java or C++
```c 
    int num = 7;
    num = "Hello"; // THIS WOULD CAUSE AN ERROR
```

## typeof Operator
The `typeof` operator in JavaScript is a tool that allows you to see the data type of a variable or value. It always return a string indicating the type.
```js 
    let num = 42;
    console.log(typeof num); // OUTPUTS "number"
```
In the example above, we have a variable called `num` with the value of `42`. Using the `typeof` operator on `num` gives us the string `"number"`, which is the data type of `num`.

Here is another example on a variable called `isUserLoggedIn`
```js 
let isUserLoggedIn = true;
console.log(typeof isUserLoggedIn); // OUTPUTS "boolean"
```
We can see that it outputs `"boolean"`, because the boolean `true` is assigned to the variable

## Bracket Notation
In JavaScript, strings are treated as sequences of characters, and each character in a string can be accessed using the bracket notation, (`[]`). You can access a specific character based on its position, called an **index**.The index of a character within a string starts in `0`.
```js 
let greeting = "hello";
console.log(greeting[1]); // "e"
```
In the example above, we accessed the character at index `1` of `"hello"`, which is `e`.

To get the last character of a string, you can use the **length** of the string minus one. The `length` property of a string tells you how many characters it contains, so to access the last character, you would subtract one from the length:
```js 
let greeting = "hello";
console.log(greeting[greeting.length - 1]); // "o"
```
In the example above, the `length` of `"hello"` is `5`, and the last character (`o`) is at index `4`, which is `5-1`.

If you want to get multiple characters, you can use multiple bracket notations:
```js 
let greeting = "hello";
let firstTwo = greeting[0] + greeting[1]; // "he"
console.log(firstTwo);
```
In the example above, we can concatenated the first and second characters using the bracket notations, `[1]` and `[2]`, to form the string `he`

## Newline and Escape Strings 
You can create newline characters in JavaScript using escape sequences such as `\n`.
```js 
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
```
In the example above, we used the `\n` character to separate `Violets are Blue`, into a newline.

Another important concept when working with strings is escaping characters. Sometimes, you need to include characters in your string that JavaScript normally uses for something else, such as quotes.

If you simply use quotes inside a string without escaping them, it can cause an error because JavaScript will think you're trying to end the string.
```js 
let statement = "She said, "Hello!"";
```
The example above will cause an error. 

In order to alleviate this, we can simply insert a backslash (`\`) before them:
```js 
let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
```

## Template Literals & String Interpolation
In JavaScript, **template literals** are a much more powerful and flexible way of working with string. Unlike regular strings, which use single(`'`) or double (`"`) quotes, template literals use backticks (`).

They also allow us to embed variables directly inside a string, this is known as **string interpolation**
```js 
const name = "Alice";
const greeting = `Hello, ${name}!`;

console.log(greeting);
```
In the example above, notice the use of backticks in the variable `greeting`. The `${name}`, syntax is an example of string interpoltaion, where the value of the variable `name` is directly inserted into the string. 

Previously, we concatenate strings using the plus (`+`) operator: 
```js 
const name = "Alice";
const age = 25;
const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message); 
```
But this time, we use template literals and string interpolation: 
```js 
const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
```
Notice how using string interpolation with template literals is much cleaner and easier to read.

Another great feature of template literals is that they allow you to write multi-line strings. With regular strings you would need to use escape characters (`\n`) to create new lines. With template literals, the formatting is preserved: 
```js 
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);
```

Another feature is it allows you to embed JavaScript expressions directly within the string, for example: 
```js 
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output);
```

## Substrings and indexOf() Operator
A **substring** is a sequence of character that appears within a larger string. For example, in the string `hello world`, `hello` and `word`are substrings.

To locate the position of a substring inside of a stringe, you can use the `indexOf()` method.

If the substring is found, `indexOf()` returns the index (or position)of the first occurrence of that substring. If the subtring is not found, `indexOf()` returns `-1` which means not found. 

The `indexOf()` method is as follows: 
```js 
    variable.indexOf("substring", position);
```
* `variable` - the variable of the string where you want to find the substring 
* `indexOf()` - the method itself 
* `"substring"` - the substring that you're trying to find 
* `position` - a numerical value; an optional starting position for the search.

For example: 
```js 
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14
```
Here we can see that the word `awesome` starts at index `[14]`, counting each letter. Therefore, the `indexOf()` method returns `[14]`

Another example:
```js 
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("fantastic");
console.log(position); // -1
```
Here we can see that since the word `fantastic` does not appear, the method returns `-1`.

As mentioned earlier, you can specify the position at which the `indexOf()` method starts the search, here is an example: 
```js 

let sentence = "JavaScript is awesome, and JavaScript is powerful!";
let position = sentence.indexOf("JavaScript", 10);
console.log(position); // 27
```

> NOTE: `indexOf()` is case sensitive.

## User Input and prompt() Method 
The `prompt()` method allows us to receive user input from the user through a small pop-up dialog box. After the user inputs data, it returns the text entered as a string.  

The `prompt()` method takes two arguments: The first is the `message`, which will appear inside the dialog box, and the second is a `default` value which is optional and will fill the input field initially.
```js 
prompt(message, default);
```

For example: 
```html 
<button id="prompt-btn">Show Prompt</button>
<p id="output"></p>
<script src="index.js"></script>
```
```js 
const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  const userName = prompt("What is your name?", "Guest");
  output.textContent = "Hello, " + userName + "!";
});
```
> NOTE: Some of the topics here will be taught in future lessons.

In the example above, when the user clicks on `button`, the `prompt()`method displays a dialog box with the message `What is your name?`, and an input field that initially contains the value `Guest`. After typing the name, the entered value will be stored in the variable `userName`. If the user presses "Cancel", then the `userName` variable will be set to `null`
