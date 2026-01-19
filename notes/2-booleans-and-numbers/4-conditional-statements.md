# Conditional Statements

**Conditional statements** let you make decisions and design logic in your JavaScript code. They are the backbone of most modern codebases. There are several conditional statements notably:
* `if` - if statement
* `else if` - else-if statement
* `else` - else statement
* `?` - ternary operator.
* `switch` - switch statement

Before going into conditionals, we need to learn about **Truthy** and **Falsy** values.  

**Truthy values** are any values that result in `true`. Examples of truthy values include:
* non-empty strings like `Hello`
* any number other than `0` and `-0` like `4` and `-5`
* arrays 
* objects
* boolean `true`

**Falsy values** are any values that result in `false`. Examples of falsy values include:
* boolean `false`
* `0` zero 
* `""` empty string 
* `null` 
* `undefined`
* `NaN` Not a Number

An **`if` statement** takes a condition and runs a block of code if that condition is **truthy**, for example:
```javascript 
if (null) {
  console.log("This will not run."); // This will not run
}

if ("freeCodeCamp") {
  console.log("This will run."); // This will run
}
```
Inside the condition `()` of the first `if` statement is a value `null`. Since `null` is a falsy value, it will not run the code inside the curly braces `{}`. Inside the condition of the second `if` statement is a string `"freeCodeCamp"`. Since a non-empty string is a truthy value, it will run the code inside the curly braces. 

`if` statements** are generally used with different comparison operators inside the condition. For example:
```javascript 
const age = 22;

if (age >= 18) {
 console.log("You're eligible to vote"); // You're eligible to vote
}
```
Inside the condition of the `if` statement is a comparison operator `>=` comparing the value of the variable `age` with the number `18`. Since `age` is `22` and `22 >= 18`, this means the condition will return `true`. Because it returns `true`, it will display the message ` You're eligible to vote`. If we change the value of `age` to a lesser number say `15`, then the condition will evaluate to `false` and the message will not be logged into the console.

When a condition is `false`, then we can use an `else` statement. The **`else` statement** allows us to check multiple for multiple conditions:
```javascript 
const age = 15;

if (age >= 18) {
 console.log("You're eligible to vote");
} else {
 console.log("You're not eligible to vote"); // You're not eligible to vote
}
```
In this example, since the age `15` is not greater than or equal to `18`, the condition would be `false` and the code inside the `else` statement is run instead.

We can keep adding more **`else if` statements** if we want to check for multiple conditions, for example:
```javascript 
const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}
```
Since the `score` is currently `87`, then the message of `You got a B` would be logged into the console.

The **ternary operator `?`** is a compact way to write `if/else` statements. It has three parts: a condition, a result if the condition is true, and a result if it is false. Here's a basic syntax:
```javascript 
condition ? expressionIfTrue : expressionIfFalse;
```
The condition checks to see if it is `true`. If it is true then it will do the expression after `?` operator. If it is `false` it will do the expression after the `:` operator.

For example:
```javascript 
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);
```
If `temperature` is greater than `25`, weather has a value of `'sunny'` otherwise it has a value of `'cool'`.

An `if` statement is useful for writing complex conditions and multiple statements, while ternaries `?` are useful when dealing with a single condition or expression. 

## Binary Logical Operators 

**Binary logical operators** help evaluate two expressions and return a result based on their truthiness. For example, let's look at the three most common binary logical operators: **logical AND `&&`**, **logical OR `||`** and the **nullish coalescing operator `??`**.


The **logical AND operator `&&`** returns `true` if and only if all the operands are `true`. Otherwise it return `false`. Moreover, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy:
```javascript 
const result1 = "" && "foo"; // result is assigned "" (empty string)
const result2 = 2 && 0; // result is assigned 0
const result3 = "foo" && 4; // result is assigned 4
```
Here, `result1` is assigned the value `""` because it is the first falsy element it encounters from left to right. `result2` is assigned the value `0` because `2` is a truthy element. Lastly, `result3` is assigned the value `4` because there are no falsy elements. 

The logical AND operator `&&` is especially useful when you want to check multiple conditions inside the `if` statement before proceeding:
```javascript 
if (2 < 3 && 3 < 4) {
 console.log('The if block runs'); 
} else {
 console.log('The else block runs');
} 
```
In the condition, since `2` is less than `3` AND `3` is less than `4`, then the sentence `The if block runs` will be logged in the console.

The **logical OR operator `||`** returns `true` if and only if one or more of its operands is `true`. Otherwise it will return `false`. Moreover, the operator returns the value of the first truthy operand encountered when evaluating from left to right, or the value of the truthy if there is a falsy.

```javascript 
const result = 'Hello World!' || false;

console.log(result); // This is truthy
```
Here, since `Hello World!` is the only truthy element, it returns `true`.

Similar to the previous one, the logical OR operator `||` is especially useful when you want to check multiple conditions inside the `if` statement before proceeding:
```javascript 
const a = 3;
const b = -2;

if (a > 0 || b > 0) {
    console.log("It Works!"); // OUTPUTS It Works!
} else {
    console.log("It Doesn't Work!");
}

```
Here, even though `b` is not greater than `0`, it is still able to run because `a` is greater than `0`. It will only return `false` if neither `a` nor `b` is greater than `0`.

The **nullish coalescing operator `??`** returns its right-hand side operand when its left-hand side operand is `null` or `undefined`. Otherwise it returns its left-hand side operand:

```javascript 
const result1 = null ?? 42;
const result2 = 12 ?? null;
const result3 = undefined ?? null;

console.log(result1); // 42
console.log(result2); // 12
console.log(result3); // undefined
```
Here `result1` outputs `42` because the right-hand side of the `??` operator is `null`. `result2` outputs `12`, because the right-hand side of the `??` operator is a number. Lastly, `result3` outputs `null` because the right-hand side of the `??` operator is `undefined`.

The nullish coalescing operator `??` is incredibly useful in situations where `null` or `undefined` are the only values that should trigger a fallback value. They are useful when setting default values if, for example the user can't choose a value:
```javascript 
let userSettings = null;
let theme = userSettings ?? 'light';

console.log(theme); // light
```
For example here, the user didn't pick a theme in the settings, and because of it the variable is set to `null`. To avoid any errors, we use the nullish coalescing operator `??` to set a default value of `light`. If the user finally picks a theme, say `userSettings = "dark"`, then it will display `"dark"`

## Math Object 

While basic arithmetic operators can handle simple calculations, JavaScript offers a built-in `Math` object to tackle more complex math challenges. This tool provides a variety of methods that make it easier to perform advanced calculations and manipulate numbers.

The **`Math.random()` method** generates a random floating-point number between `0` (inclusive) and `1` (exclusive). This means the possible output can be `0`, but it will never reach `1`:
```javascript 
const randomNum = Math.random();

console.log(randomNum); // 0.44447609330323434
```

The **`Math.min()` and `Math.max()` methods** both take a set or array of numbers and return the minimum and maximum value, respectively:
```javascript 
const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9
```
Inside `Math.min()` is a list of numbers `(1, 5, 3, 9)`. Because `1` is the smallest, it gets logged. Inside `Math.max()`, because `9` is the largest, it gets logged.

The **`Math.ceil()` and `Math.floor()` methods** allow us to round numbers up or down to the nearest whole intger:

```javascript 
console.log(Math.ceil(4.3));  // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4)); // 4 
console.log(Math.floor(0)); // 0
```
`Math.ceil()` will round up `4.3` to the nearest whole integer, which in this case is `5`. `Math.floor()` will round `4.7` down to to the nearest whole integer, which in this case is `4`. Notice how it doesn't take into account whether the decimal is less than or greater than the whole number, `Math.ceil()` increases `4.3` by `5` and `Math.floor()` removes the decimal values of `4.7` and turns it whole `4`. If the number is already a whole number like in `Math.ceil(4)` then it doesn't apply any changes. 

If we want the numbers to round up and down, taking the decimal point into account, we use the **`Math.round()` method**. The `Math.round()` method is essentially a hybrid between `Math.floor()` and `Math.ceil()`:
```javascript 
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
```
So, if the decimal point is less than `5`, the number is rounded down. And if the decimal point is `5` or greater, the number is rounded up.

A practical application of `Math.floor()` and `Math.random()` is to create a random number generator between two whole numbers:
```javascript 
const max = 10;
const min = 5;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); 
```
`Math.random()` generates a random decimal number between `0` and `1`. The `(max - min + 1)` calculates the size of our range (total number of integers possible). Since we have a `max` value of `10` and `min` value of `5` our range is `10 - 5 + 1` which is `6`. Multiplying our `Math.random()` with our range `Math.random() * 6`, scales the number up. The result is now a random decimal between `0` and `5.999`. For example if `Math.random()` generated `0.8`, then `0.8 * 6 = 4.8`

The `Math.floor()` rounds our result down to the nearest whole number. This converts our range of `0 to 5.999` into a whole integer range of `0 to 5`. For example, our `4.8` becomes `4`. Finally, adding the `min` (`5`) value to the result of our `Math.floor()` shifts the range up to a range of `5 to 10`. For example, our integer `4` becomes `9`.

The **`Math.trunc()`** method truncates or removes the decimal part of a number, returning only the whole integer portion without rounding: 
```javascript 
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9
```

The **`Math.sqrt()` and `Math.cbrt()`** method gives us the square root and cube root of a number respectively:
```javascript 
console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3
```

The **`Math.abs()`** method returns the absolute value of a number, turning negatives into positives:
```javascript 
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
```

Lastly, the **`Math.pow()`** method takes two numbers and raises the first number to the power of the second.
```javascript 
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64
```



