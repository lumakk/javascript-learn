# Working with Numbers and Common Number Methods 

## isNaN methods

In JavaScript, `NaN` stands for "Not a Number". It's a special value that represents an unrepresentable or undefined numerical result. `NaN` is a property of the global object, and it's also considered a type of number in JavaScript.

`NaN` is typically the result of operations that should return a number but can't produce a meaningful numerical value. For example:
```javascript 
let result = 0 / 0;
console.log(result); // NaN
```
In this case, dividing by zero by zero is mathemtically undefined, so JavaScript returns `NaN`.

Another interesting property of `NaN` is that it's not equal to anything, including itself:
```javascript 
console.log(NaN === NaN); // false
```

This unique behavior makes it challenging to check if a value is `NaN` using standard comparison operators. To address this, JavaScript provides the `isNan()` function. The `isNaN()` **function** is used to determine whether a value is `NaN` or not, returning `true` if it is and `false` if it is not:
```javascript 
console.log(isNaN(37)); // false 
console.log(isNaN(0 / 0)); // true
```
Here, since `37` is a number, it returns `false`. Since `0 / 0` is mathematically undefined it returns `true`.

`isNan()` works by first attempting to convert the parameter to a number. If it can't be converted, the value is turned into `NaN` which returns `true`. However this behavior can lead to some surprising results:
```javascript 
console.log(isNaN("")); // false
console.log(isNaN("blabla")) // true
console.log(isNaN("37")); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
```
In the first log, the empty string `""`is converted to a number `0`, which is why it returns `false`. For the second, the string `"blabla"` is converted into a number, which fails; returning `true`. For the third log, the string `"37"` is converted into a number `37`, which is why it returns `false`. For the fourth, since `undefined` couldn't be converted into a number it returns `true`, the same applies for the empty bracks `{}`.

As you can see, the results are widely inconsistent. To alleviate this, ES6 (the sixth edition of JavaScript released in 2015) introduced `Number.isNaN()`. This method does not attempt to convert the paremeter to a number and instead strictly returns `true` if the value is exactly `NaN`:
```javascript 
// Returns True 
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

// Returns False
console.log(Number.isNaN("")); // false
console.log(Number.isNaN("blabla")) // false
console.log(Number.isNaN("37")); // false
console.log(Number.isNaN(37)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
```
As you can see, the results are much more consistent and reliable. It only returns `true` if the value is strictly equal to `NaN`. This means strings, numbers, empty, undefined and null values return `false`.

In practice, when dealing with numerical operations or user inputs that should be numbers, it's often necessary to check for `NaN` to handle errors or unexpected inputs gracefully, for example:
```javascript 
let a = 0;
let b = 0;
let result = a / b;

if (Number.isNaN(result)) {
  result = "Error: Division resulted in NaN";
}

console.log(result); // "Error: Division resulted in NaN"
```
In this example, we're using the `Number.isNaN()` inside the condition of the `if` statement to catch cases where division operation results in `NaN`.

## parseFloat() and parseInt() methods

`parseFloat()` and `parseInt()` are two essential methods in JavaScript for converting strings to numbers. These methods are particularly useful when delaing with user input or processing data that comes in string format but needs to be treated as numerical values.

The **`parseFloat()` method** parses a string argument and returns a floating-point number. It's designed to extract a number from the beginning of a string, even if the string contains non-numeric characters:
```javascript 
console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5"));   // 3.14
console.log(parseFloat("abc 3.14")); // NaN
```
`parseFloat()` starts parsing from the beginning of the string and continues until it encounters a character that can't be part of a floating-point number. If it can't find a valid number at the start of the string, like in `"abc 3.14"`, it returns `NaN`.

The **`parseInt()` method** parses a string argument and returns an integer number. Like `parseFloat()`, it starts at the beginning of the string, but it stops at the first non-digit character:
```javascript 
console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN
```
`parseInt()` starts parsing from the beginning of the string and continues until it encounters a character that can't be part of an integer number. For floating-point numbers, like in `"3.14"`, it only returns the intger part `3`. If it can't find a valid number at the start of the string, like in `"abc123"`, it returns `NaN`.

Both methods have noteworthy behaviors. They ignore leading whitespace:
```javascript 
console.log(parseFloat("  3.14"));  // 3.14
console.log(parseInt("  42"));      // 42
```

They also handle plus and minus signs at the beginning of the string. If there is a `+` sign, it's treated as positive, if there is a `-` sign it's treated as negative:
```javascript 
console.log(parseFloat("+3.14"));  // 3.14
console.log(parseInt("-42"));      // -42
```

While these methods are powerful, they have some limitations. For instance, they don't handle all number formats, such as scientific notation.

## toFixed() Method 

The **`.toFixed()` method** is a built-in JavaScript function that formats a number using fixed-point notation. It's particularly useful when you need **to control the number of decimal places**, especially for displaying currency values or when working with precise measurements:
```javascript 
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
```
The `.toFixed()` method is called on a number: `num.toFixed()` and takes one optional argument: the number of digits to appear after the decimal point. In our example it's `2` decimal places. It then returns a string representation of the number with the specified number of decimal places: `"3.14"`. Note that it **returns a string** and not a number.

The `.toFixed()` method rounds the number to the nearest value that can be represented with the specified number of decimal places:
```javascript 
console.log((3.14159).toFixed(3));  // "3.142"
console.log((3.14449).toFixed(3));  // "3.144"
console.log((3.14550).toFixed(3));  // "3.146"
```
As you can see, `toFixed()` rounds up when the next digit is `5` or greater, and rounds down otherwise. If you call `.toFixed()` without arguments, it defaults to `0` decimal places:
```javascript 
let num = 3.14159;
console.log(num.toFixed()); // "3"
```
