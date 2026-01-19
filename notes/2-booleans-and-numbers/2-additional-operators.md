# Additional Operators 

## Working with Comparison and Boolean Opeators 

### Boolean Operators and Equality Operators
As mentioned, Booleans are a data type with only `true` and `false` values. They are the backbone of modern computing and logic design. Here is an example of setting the value `true` to a variable called `isOldEnoughToDrive`:
```javascript 
let isOldEnoughToDrive = true;

console.log(isOldEnoughToDrive); // true
```
You can also use the variable inside conditionals `if-else` like this:
```javascript 
let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
 console.log("You're old enough to drive"); // You're old enough to drive
} else {
 console.log("Sorry, you are not old enough to drive");
}
```
A conditional helps you make decisions in your cosed based on a condition. If `isOldEnoughToDrive` is `true`, then the sentence `You're old enough to drive` will be logged. Otherwise, if it is `false` then the sentence `Sorry, you are not old enough to drive` will be logged.

To compare two values, we can use the **equality operator** (`==`):
```javascript
console.log(5 == 5); // true
```
The result of the comparison will be a boolean of either `true` or `false`. We can see that since both values are the same, `5` the result is `true`.

There are two types of equality operators, a noram equality operator `==` and a strict equality operator `===`.

The normal equality operator `==` uses **type coercion** before checking if the value is equal:
```javascript 
console.log(5 == "5"); // true 
```
The string `"5"` is converted into the number `5`, which is then checked to see if they are equal. Since both values are the same, the result is `true`. 

This differs from the **stict equality operator,** `===` which does not perform type coercion. The strict equality operator will check if the types are the same and if the values are the same:
```javascript 
console.log(5 === '5')l // false 
```
Unlike before, the character `'5'` is not converted into a number. Since the number `5` is different from the character `'5'`, it returns `false`.

If you need to check if something is **not equal**  to another value, then we can use the **inequality operator** (`!=`):
```javascript 
console.log(5 != 4); // true
```
Here, it checks if `5` **is not equal to** `4`. Since they're not equal, it returns `true`. Like the equality operator, the inequality operator also performs **type coercion**. 

The inequality operator also has a **strict inequality operator** `!==`, which does not perform type coercion:
```javascript 
console.log(5 !== "5"); // true
```
The result is `true` because the string `"5"` is not converted into a number. If it was not strct, then it would return `false`.

It is considered best practice to use strict inequality and equality operators whenever possible, as they do not perform type coercion. In professional projects you will see codebases that usually prefer these two operators.

### Comparison Operators

**Comparison operators** allow you to compare two values and return a `true` or `false` result, this is similar to the **equality operators** we did earlier. The following are the basic comparison operators:
* `a > b` - is `a` greater than `b`?
* `a < b` - is `a` less than `b`?
* `a <= b` - is `a` less than or equal to `b`?
* `a >= b` - is `a` greater than or equal to `b`?

For example:
```javascript 
let a = 6;
let b = 9;

console.log(a > b); // false
console.log(b > a); // true
```
Here we have two variables: `a` and `b`, with values `6` and `9` respectively. We used the right-angle bracket `>`, to compare if the value on the left is greater than the one on the right. On `a > b` since, `a` which is equal to `6` is greater than `b` which is equal to `9` it returns false.

The greater than or equal to operator, `>=`, checks if the value on the left is either greater than or equal to the right:
```javascript 
let a = 6;
let b = 9;
let c = 6;

console.log(a >= b); // false
console.log(a >= c); // true
```
Here, `a` is greater than `b` so it returns `false`. But since `a` is equal to `c`, it returns `true`.

A **truthy value** is a value that evaluates to `true` in a boolean context. Examples of truthy values are:
* Non-empty strings 
* Non-zero numbers 
* The boolean `true`

We can use the `Boolean()` function to check the truthiness of a value:
```javascript 
const truthy1 = true;
const truthy2 = "Hello World!";
const truthy3 = 12;
const truthy4 = "";

console.log(Boolean(truthy1)); // true
console.log(Boolean(truthy2)); // true
console.log(Boolean(truthy3)); // true 
console.log(Boolean(truthy4)); // false
```
Here we have four variables with different values. We can see that the values `true`, `"Hello World!"` and `12` gives us `true` while the tmpty string `""` gives us `false`. The values that evalues to `false` are callued **falsy values** 


