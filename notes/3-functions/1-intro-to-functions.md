# What are Functions?

**Functions `function`** are reusable pieces of code that perform a specific task or calculate a value. Think of `functions` as a machine that takes some input, does some operations on it, and then produces an output. Here is an example of declaring a `function`:
```javascript 
function greet() {
  console.log("Hello, Jessica!");
}
```
In this example, we have declared a `function` called `greet`. Inside that function, we have `console.log` that logs the message `Hello, Jessica!`. If we tried to run this code, we would not see the message appear in the console. This is because we need to **call the function**.

A **function call** or invocation, is when we actually use or execute the `function`. To call a `function`, we need to reference the function name followed by a set of parentheses:
```javascript 
function greet(){
    console.log("Hello, Jessica!");
}

greet(); // Hello Jessica!
```
Here calling the `greet()` function gives us `"Hello, Jessica!"`.

If we want to change the values of a function, for example instead of `"Hello, Jessica!"` we want it to display `"Hello, Anna!"`, we use what are called **function paremeters** and **arguments.** 

**Parameters** act as placeholders for the values that will be passed to the function when it is called. They allow functions to accept input and work with input. **Arguments** are the actual values passed to the function when it is called. For example:
```javascript 
function greet(name){
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Allice!
greet("Nick"); // Hello, Nick!
```
Here, the `name` inside the parentheses of `function greet()` serves as the parameters, while the strings `"Alice"` and `"Nick"` serve as arguments. When we call a function, the arguments are sent to the paremeters, of the function where they are used for whatever line of code is inside of the function. You can **think of parameters as variables of a function**. 

We can also have multiple parameters for a function:
```javascript 
function calculateSum(num1, num2) {
  console.log(num1 + num2);
}

calculateSum(3, 4); // 7
```
Here, we called the `calculateSum` function with arguments: `(3, 4)` which is sent to the function parameters `(num1, num2)`. We added the two numbers inside the `console.log()`, giving us a result of `7`. It is important to note that when calling a function with multiple arguments, **the arguments must be in the same order as the parameters**. 

When a function finishes its execution, it will always return a value. By default, the return value will be `undefined`, here is an example:
```javascript 
function doSomething() {
  // empty
}

let result = doSomething();
console.log(result); // undefined
```

If you need your function to return a specific value, then you will need the `return` statement. Here is an example of using a `return` statement to return the sum of two values `(3, 4)`:
```javascript 
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7
```
Often times you will be using the `return` statement, because you can use that value that was output from the function later on in your code.

So far, we've been working with named functions, but you can also create what's called an anonymous function. An **anonymous function** is a function without a name that can be assigned to a variable like this:
```javascript 
const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7
```
In this example, we have a `const` variable called `sum` and we are assigning it an anonymous function that returns the sum of `num1` and `num2`. We are then able to call `sum` and pass in the numbers `3` and `4` to get the result of `7`.

Functions support **default parameters**, allowing you to set default values for parameters. These default parameters are used if the function is called without an argument for example:
```javascript 
function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!
```
In this example, the default parameter is `name = "Guest"`. If no argument is provided for `name`, it defaults to `Guest`.

## Arrow Functions

In the previous lesson, we learned how to work with functions. All previous examples used the regular function syntax like this:
```javascript 
function greetings(name) {
  console.log("Hello, " + name + "!");
}
```

But another way to write functions in JavaScript is to create an **arrow function expression**. An **arrow function expression** is a more concise way to write regular functions:
```javascript 
const greetings = (name) => {
  console.log("Hello, " + name + "!");
};
```
In this revised example, we are creating a `const` variable called `greetings` and assigning it an anonymous function. This is followed by an equal sign `=` which is then followed by the parameters `(name)`. This is followed by the arrow `=>` and a set of curly braces `{}` which will contain our function's code.

If our function only has one parameter, we can remove the parentheses like this:
```javascript 
const greetings = name => {
  console.log("Hello, " + name + "!");
};
```

If function has no parameters, then we must use a parentheses like this:
```javascript 
const greetings = () => {
  console.log("Hello");
};
```

Like regular functions, we could also input multiple parameters like this:
```javascript 
const greetings = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`);
};
```

Arrow expressions `=>` are commonly used when writing single-line functions like this:
```javascript 
const greetings = name => console.log("Hello, " + name + "!");
```
Here, we don't use curly braces `{}` but we know this is a function because of the arrow expression `=>`. However it is important to note that this only works for single-line code. If we want to write multi-line code we need to use curly braces `{}`:
```javascript 
const greetings = name => { console.log("Hello, " + name + "!")
                            console.log("You are old!")};
```

Another key concept is the `return` statement. Here is an example of using the arrow function syntax to calculate the area:
```javascript 
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(calculateArea(5, 3)); // 15
```
We are creating a variable inside the function `calculateArea` called `area` which will calculate the `width * height` and then returning that variable. But we could clean up our code a bit and return the calculation itself:
```javascript 
const calculateArea = (width, height) => {
  return width * height;
}; 

console.log(calculateArea(5, 3)); // 15
```

## Global, Local, and Block Scope 

**Scope** in programming refers to the **visibility and accessibility of variables** in different parts of the code. It determines where variables can be accessed or modified. There are three main types of scope: **Global scope**, **Local scope** and **Block scope**

**Global scope** is the outermost scope in a JavaScript program. Variables declared in the global scope are **accessible from anywhere in the code**, including within functions and blocks. These types of variables are often called **global variables**. Here's an example of a global variable:
```javascript 
let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"
```
In this example, since `globalVar` is declared outside of any function, it's considered a global variable. Because of this, it can be accessed inside the `printGlobalVar` function.

While they are convenient, they should **be used sparingly** as they **can lead to naming conflicts** and make your code harder to maintain. 
**Local scope** on the other hand, refers to variables that are **only accessible within a function.**  
```javascript 
function greet() {
    let localScope = "Hello, local scope!";
    console.log(localScope);
}

greet(); // "Hello, local scope!"
console.log(localScope); // This will throw an error

```
In this code, `localScope` is a local variable within the `greet()` function. It can be used inside the function, but trying to access it outside the function will result in an error `console.log(localScope);`.

**Block scope** refers to variables that are **only accessible within code blocks**.  A **block** is any code section within curly braces, `{}`, such as an `if` statement, `for` loop, or `while` loops. This concept was introduced with the `let` and `const` keywords in ES6.

Variables declared with `let` or `const` inside a block are only accessible within that block, for example:
```javascript 
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // "I'm in a block"
}
console.log(blockVar); // This will throw an error
```
In this example, `blockVar` is only accessible within the `if` block.  Trying to access it outside the block, `console.log(blockVar)` will result in an error.


