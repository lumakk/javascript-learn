# Unary and Bitwise Operators

## Unary Operators 

**Unary operators** act on a single operand to perform operations like type conversion, value manipulation, or checking certain conditions. The most common ones are:
* `+` - unary plus operator 
* `-` - unary negation operator 
* `!` - logical NOT operator 
* `~` - bitwise NOT operator 
* `void` - void keyword 
* `typeof` - typeof operator 


The **unary plus operator** `+`, converts its operand into a positive umber. If the operand is already a number, it remainds unchanged:
```javascript 
const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
```
Here we can see that it changed the string `'42'` into a number, `42`

The **unary negation operator** `-`, converts its operand into a negative umber. If the operand is a positive number, it changes the sign:
```javascript 
const str = '42';
const strToNum = -str;

console.log(strToNum); // -42
```
Here we can see that it changed the string `'42'` into a negative number, `-42`. 

The **logical NOT operator** `!`, flips the boolean value of its operand. If the operand is not a boolean value like a number or string, then it converts it into a boolean value `true`, and flips it `false`.
```javascript 
let isOnline = true;
console.log(!isOnline); // false

let num = 12;
console.log(!num); // false
```
Here, we can see it flips the boolean value of `isOnline` from `true` to `false`. In another variable, `num` we can see that it's turned into a boolean value `true` before flipping `false`.

The **bitwise NOT operator** `~`, is a less commonly used unary operator. It inverts the binary representation of a number. The `~` operator flips every bit, meaning it changes all `1s` to `0s` and all `0s` to `1s`:

```javascript 
const num = 5; // The binary for 5 is 00000101

console.log(~num); // -6
```
Generally you won't use the bitwise NOT unless you're working with low-level programming tasks like manipulating bits direclty. 

The **void keyword** `void`, is a unary operator that evaluates an expression and returns `undefined`.
```javascript 
const result = void (2 + 2);

console.log(result); // undefined
```
`void` is commonly used in hyperlinks to prevent navigation:
```html 
<a href="javascript:void(0);">Click Me</a>
```

Finally, there is the `typeof` operator which returns the type of its operand as string:
```javascript 
const value = 'Hello world';

console.log(typeof value); // string
```

## Bitwise Operators 

**Bitwise operators** in JavaScript are special operators that work on the binary representations of numbers. A **bit** is the most basic unit of information. It can only have two values: `0` or `1`. **Binary** is a number system that uses only these two digits to represent all numbers.

For example, the binary representation of the number `10` is `1010`.

As such, bitwise operators perform operations on the binary representations of numbers. There are several bitwise operators notably:
* AND `&`
* OR `|`
* XOR `^`
* NOT `~`
* left shift `<<`
* right shift `>>`

If you already know logic design, you'll recognize them as similar to logic gates. 

The **bitwise AND `&` operator** returns a `1` in each bit position where both bits are `1`. You can think of it as multiplying each bit position.:
```javascript 
let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
//             -----------
//             Answer: 001
console.log(a & b);  // 1 (Binary: 001)
```
Here we can see that multiplying each bit of the binary code of `a` and `b` gives us `(1 * 0), (0 * 1), (1 * 1)` which is equal to `001`. `001` is the binary number of `1`, therefore `a & b = 1` 

The **bitwise OR `|` operator** returns a `1` in each bit position where either bits are `1`. You can think of it as adding each bit position.:
```javascript 
let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
//             -----------
//             Answer: 001
console.log(a | b);  // 7 (Binary: 111)
```
Here we can see that adding each bit of the binary code of `a` and `b` gives us `(1 + 0), (0 + 1), (1 + 1)` which is equal to `111`. `111` is the binary number of `7`, therefore `a | b = 7` 

The **bitwise XOR `^` operator** returns a `1` in each bit position where either bits are `1`, but not both. You can think of it as this equation `(a + b) * ~(a + b)`:
```javascript 
let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
//             -----------
//             Answer: 110
console.log(a ^ b);  // 6 (Binary: 111)
```
Here we can see that adding each bit of the binary code of `a` and `b` gives us `[(1 + 0) * (0 + 1)] , [(0 + 1) * (1 + 0)], [(1 + 1) * (0 + 0)]` which is equal to `110`. `110` is the binary number of `6`, therefore `a ^ b = 6` 

The **bitwise NOT `~` operator** inverts all the bits of its operand, For example:
```javascript
let a = 5;  // Binary: 101
console.log(~a);  // -6
```

The **left shift `<<` operator** shifts all bits to the left by a specified number of positions. For example:
```javascript 
let a = 5;  // Binary: 101
console.log(a << 1);  // 10 (Binary: 1010)
```
Here, all bits are shifted one position to the left, effectively multiplying the number by `2`.

The **right shift `>>` operator** shifts all bits to the right by a specified number of positions. For example:
```javascript 
let a = 5;  // Binary: 101
console.log(a >> 1);  // 2 (Binary: 10)
```
Here, all bits are shifted one position to the right, effectively dividing the number by `2` and rounding down.

Bitwise operators are often used in low-level programming and cryptography. While they may not be commonly used in everyday JavaScript programming, understanding them can be beneficial for certain specialized tasks and can deepen your understanding of how computers work.




