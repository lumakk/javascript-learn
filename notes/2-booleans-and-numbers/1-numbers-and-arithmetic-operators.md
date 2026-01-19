# Numbers and Arithmetic Operators

## Number Data Type 

The `Number` data type represents a number value. It is one of the most used data types in JavaScript and other programming languages

Unlike other programming languages that separate integers with floating-point numbers, **JavaScript uses one unified `Number` type**. Meaning you can work with whole numbers, decimals, and even special numeric values under a single `Number` data type.

We can see the data type of a value using the `typeof` operator. Here's a basic example showing integers, floating point numbers, and negative numbers all have the same type of `number`:
```javascript
const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // OUTPUTS number
console.log(typeof decimalNumber); // OUTPUTS number
console.log(typeof negativeNumber); // OUTPUTS number
```

JavaScript's `Number` type can also have special values like `Infinity` and `NaN`, or "Not a Number":
```javascript
const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // OUTPUTS Infinity
console.log(typeof infiniteNumber); // OUTPUTS number
```
Here, even though our value is `Infinity`, if we use the `typeof` operator we can see that it still outs `Number`

Surprisingly:
```javascript 
const notANumber = 'hello world' / 2;
console.log(notANumber); // OUTPUTS NaN 
console.log(typeof notANumber); // OUTPUTS number 
```
Even though our variable is not a number, `NaN` its data type is still `Number`.

Apart from the standard base-10 decimal system, JavaScript also supports binary, octal, and hexadecimal values.

## Arithmetic Operators 

JavaScript also provies tools to perform basic arithmetic operators on numbers such as **addition (`+`), subtraction (`-`), multiplication (`*`) and division (`/`)**. All these tools are known as **arithmetic operators**.

The **addition operator (`+`)** is used to add two or more numbers together:
```javascript 
const num1 = 10;
const num2 = 5;

const result1 = num1 + num2;

console.log(result1); // 15
```

The **subtraction operator (`+`)** is used to subtract two or more numbers together:
```javascript 
const difference = 10 - 5;
console.log(difference); // 5
```
If you subtract a smaller number to a bigger number, you'll get a negative result:
```javascript 
const difference = 5 - 10;
console.log(difference); // -5
```

The **multiplication operator (`*`)** is used to subtract two or more numbers together:
```javascript 
const num1 = 10;
const num2 = 5;

const result1 = num1 * num2;

console.log(result1); // 50
```

The **division operator (`/`)** is used to divide two or more numbers together:
```javascript 
const num1 = 10;
const num2 = 5;

const result1 = num1 / num2;
const result2 = num2 / num1;


console.log(result1); // 2
console.log(result2); // 0.5 
```
It's important to note that if you try to divide by zero, JavaScript will return `Infinity`:
```javascript 
const result = 10 / 0; 

console.log(result); // Infinity
```

The **remainder operator (`%`)**, also known as modulo operator is used to return the remainder of a division:
```javascript 
const num1 = 10;
const num2 = 3;
const remainder = num1 % num2;

console.log(remainder); // 1
```
10 divided by 3 is 9, which means it has a remainder of 1.

The **exponentiation operator (`**`)**, raises one number to the power of another:
```javascript 
const num1 = 2;
const num2 = 3;

const exponent = num1 ** num2;
console.log(exponent); // 8
```
2 raised to 3 (`2^3`), is equal to 8.

It is also possible to mix different operators in a single expression, the JavaScript engine follows a system called operator precedence to determine the order of operations. **Operator precedence** determines the order in which operations are executed in expressions:
```javascript 
const result = 10 + 5 * 2 - 8 / 4;
console.log(result); // 18
```

## Calculations with Numbers and Strings
In JavaScript, the addition operator `+` does double duty. It handles both addition and string concatenation. When you use `+` with a number and string, JavaScript treats them both as strings and join them together:
```javascript 
const result1 = 5 + '10';
const result2 = '10' + 5;

console.log(result1); // 510
console.log(typeof result); // string
console.log(result2); // 105
console.log(typeof result); // string

```
You'll see how we have two values in the variables, an integer `5` and string `'10'`. Printing the result gives us `510` instead of `15`. Using the `typeof` operator, we can see that the data type is `string`. Even if we change the order, it still treats it as a string.

We call this, **type coercion**, it is when a value from one data type is converted into another. 

Let's try the same with other operations like subtraction, multiplication, or division with a string and a number.
```javascript 
const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number
```
Here, JavaScript instead converts them into a number before doing the math. We can see that it succesfully converts the string `10` and `20` to  number and then performs the calculation. As a result, `10 - 5` yiels `5`.

But what if the string doesn't look like a number?
```javascript 
const subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = 'abc' * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number
```
In the examples above, the string `abc` does not represent a valid numeric value, so JavaScript cannot conver it. When such a conversion fails, JavaScript returns a `NaN.`

We can also see how JavaScript converts boolean numbers (`true` or `false`). JavaScript treats booleans as numbers in mathematical operations: `true` becomes `1`, and `false` becomes `0`
```javascript 
const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string
```
In the first two examples, `true + 1` resulted in `2`, and `false + 1` resulted in `1`. In the third example, `'Hello' + true` is treated as a string, `'Hellotrue'`.

For `null` and `undefined`, JavaScript treats `null` as `0` and `undefined` as `NaN`:
```javascript 
const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
```

## Operator Precedence  

As mentioned previously, **Operator Precedence** refers to the order of equations JavaScript does when you write an expression with several operators. Operators with higher precedence are evaluated before those with lower precedence, it's similar to **PEMDAS** in math, for example:
```javascript 
const result = 2 + 3 * 4;

console.log(result); // 14
```
Here, we can see that JavaScript did the parts `3 * 4` first, before doing `2 + 12` which gives us the result `14`

However, unlike **PEMDAS** where you do it step-by-step where you do parentheses `()` first, then division `/` then addition `+` and finally subtraction `-`; here in JavaScript it **depends on the precedence** of the operator: 

| Precedence | Operator Type | Description |
| -------------- | --------------- | ------
| 1 | Grouping       | `()`    |
| 2 | Exponentiation | `**`   |
| 3 | Multiplication | `*`, `/`, `%` |
| 4 | Addition       | `+`, `-` |

We can have multiple operators on the same precedence level, meaning addition `+` and subtraction `-` have the same level. Similarly, multiplication `*` and division `/` also have the same level. The one with the highest order of presedence is groupings `()`

Now let's use the parentheses on the same equation as before: `2 + 3 * 4`:
```javascript 
const result = (2 + 3) * 4;

console.log(result); // 20
```
We can see how this time, JavScript evaluated the parentheses first `(2 + 3)` before multiplying with `4`. This gives us `20` instead of the `14` we had previously. 

But what happens if both operators have the same level of precedence? `10 - 2 + 3`. To solve this, JavScript uses **associativity** to figure out the order to evaluate them. 

**Associativity** is what tells JavaScript whether to evaluate operators from left to right or right to left. For most operators like addition and multiplication, associativity is left to right. So, JavaScript processes these from **leftmost** side of the expression to the right:
```javascript 
const result = 10 - 2 + 3;

console.log(result); // 11
```
We can see that JavaScript does `10 - 2` first (which is `8`) before adding it to `3`, giving us the answer `11`.

Some operators, like the assignment `=`, are right-to-left associative. This means the right side of the expression gets evaluated first:
```javascript 
let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10
```
We can see that JavaScript assigns `5` to `b` first, then assigns `b` to `a`. This means noth `a` and `b` is equal to `5`.

The exponent operator `**` is also right-to-left associative:
```javascript 
const result = 2 ** 3 ** 2;

console.log(result); // 512
```
We can see that JavaScript evaluates `3 ** 2` first, which equals to `9` then it evaluates `2 ** 9`m which gives us `512` 

## Increment and Decrement Operators 

The **increment and decrement** operators `++` & `--`, allow us to **decrease or increase a value by one**

The **increment** operator is represented by `++` while the **decrement** operator is represented by `--`. They both allow you to adjust the value of a variable by `1`. So instead of writing something like `x = x + 1` or `x = x - 1`, we can simply write `x++` or `x--`.

They come in two forms, **prefix** and **postfix**. Prefix is `++x` and postfix is `x++`.

Prefix `++x` increases the value of the variable first, then returns a new value. Postfix `x++` returns the current values of the variable first, then increases it (Note that we're using the `let` variable since we're changing values.):
```javascript 
let x = 5;

console.log(++x); // 6
console.log(x); // 6
```
In the code above, `++x` means "increment `x` first, then use it". So when you log `++x`, you immediately get the incremented value of `6`

COmpare this to using postfix:
```javascript 
let y = 5;

console.log(y++); // 5
console.log(y); // 6
```
In this example, `y++` means "use `y` first, then increment it." When you log `y++`, you get `5`, but `y` becomes `6` after that line of code.

The same thing happens with the **decrement operator** `--`, except it decreases the value by `1`. 

Generally, it doesn't matter which one you use. However, if you need the updated value right away, use prefix. If you want the current value first and don't care about the increment until ltaer, you can go with postfix:
```javascript 
let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)

```

## Compound Operators 

**Compound assignment operators** allow you to perform a mathematical operator and reassign the result back to the variable in one line of code. It is denoted by an arithmetic operator followed by the assignment operator, `+=`, `-=`, `*=`. Instead of writing something like this:
```javascript 
let num = 5; 
num = num + 2;
```
We can write something like this: 
```javascript 
let num = 5; 
num += 2;
```
Notice how `num += 2` combines both the addition and assignment operator int one. This saves time and reduces clutter in your code.

There's a compound assignment operator for every operator in JavaScript: 
* `+=`
* `-=`
* `/=`
* `*=`
* `%=`
* and so on..



