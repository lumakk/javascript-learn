# Working with Arrays

An **array** in JavaScript is an ordered list of values. These values could be numbers, strings, booleans, objects, and even other arrays. An array allows you to store multiple values in one variable. The position of each value is known as the **index**:
```javascript 
let fruits = ["apple", "banana", "orange"];
```
To create an array, we use the square brackets `[]`, and separate the values with commas `,`. In this example, we declare a variable `fruits` and assign it an array containing three string values: `apple`,`banana`,`orange`.

One of the key characteristics of arrays is that they are zero-indexed. Meaning that the first element of an array has an index of `0`, the second has an index of `1`, and so on. We can access these individual elements using their `index`:
```javascript 
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"
```
In this example, we use the index `[0]` to access the first element `"pplae"` from the `fruits[]` array. Then we use the index `[2]` to access the third element, `"orange"`.

Arrays in JavaScript has a special `length` property that returns the number of elements in the array. We can access this property using the `length` keyword:
```javascript 
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
```
Here, our array `fruits` has a length of `3`.

Another key characteristic of arrays in JavaScript is that they are **dynamic.** Meaning that their size cah change after they are created. We can add or remove elements from an array using the **array methods** such as `push()`,`pop()`,`shift()`,`unshift()`,`splice()` and more.  

## Access and Update Elements 

We can update elements in an array by assigning a new value to a specific index:
```javascript 
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]
```
In this example, we've replaced `banana` with `blueberry` at index `1`. Logging the array `console.log(fruits)` gives us a list of the updated array with the replaced value.

If you try to access an index that doesn't exist in the array, JavaScript will return `undefined`:
```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[3]); // undefined
```
In this example, since there is no index `3` for the `fruits` array. The log will show `undefined`

You can add new elements to an array by assigning a value to an index that doens't exist yet:
```javascript 
let fruits = ["apple", "banana", "cherry"];
fruits[3] = "date";
console.log(fruits); // ["apple", "blueberry", "cherry", "date"]

```
Here, we don't have a fourth element yet, so we input the value `"date"` at index `[3]`. However, exercise caution when doing this. If you assign a value to an index that is much larger than the current length of the array, **you will create undefined elements** for the indices in between, which can lead to unexpected behavior. 

## Add or Remove Elements from the Beginning & End of an Array 

Arrays in JavaScript are **dynamic**, which means you can easily add or remove elements from them. As mentioned earlier, there are four main methods for adding and removing elements from the beginning and end of an array: `push()`,`pop()`,`shift()` and `unshift()`. 

The `push()` method is used to **add one or more elements to the end of an array.** The return value for the `push()` method is the new length of the array:
```javascript 
const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]
```
In this example, we start with an array called `fruits` which contains two elements: `"apple"` and `"banana"`. We then use the `push()` method to add the string `"orange"` to the end of the array, and storing the new length of the array in the variable `newLength`. Printing the `newLength` variable gives us the new length `3`, and printing the array `fruits` shows us the newly-added value.

it is possible to add more elements to an array even when it is a `const` because declaring an array with the `const` keyword creates a reference to the array. While the array itself is mutable and can be modified, you cannot reassign a new value to the constant, like this:
```javascript 
const fruits = ["apple", "banana"];
fruits = ["This", "will", "not", "work"];
console.log(fruits); // Uncaught TypeError: Assignment to constant variable. 
```

The `pop()` method removes the **last element from an array** and returns that element. It also modifies the original array:
```javascript 
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"
```
In this example, we start with an array of three fruits: `apple`,`banana`,`orange`. Using the `pop()` method removes the last element `orange` and stores it in the variable `lastFruit`. Logging the `fruits` array leaves us with the two fruits, and logging the `lastFruit` variable gives us the element that we removed from the array. 

The `unshift()` method adds one or more elements to the **beginnin of the array** and returns its new length. it works similarly to `push()`, ut modifies the start of the array instead: 
```javascript 
let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength); // 3
```
In this example, we use the `unshift()` method to add the number `1` to the beginning of the `numbers` array and stores the new length of our array in `newLength`. Printing `numbers` gives us our new array, and printing `newLength` gives us our new length. 

Finally, the `shift()` method removes the first element from an array and returns that statement. It's similar to `pop()`, but it works at the beginning of the array instead of the end:
```javascript 
let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"
```
In this example, the `shift()` method removes the first element `red` from the array and returns it. The original `colors` array is modified to contain only two elements. 


You can add multiple elements at once with `push()` and `unshift()`:
```javascript
let arr = ["a", "b", "c"];
arr.unshift("x", "y");
console.log(arr); // ["x", "y", "a", "b", "c"]
```
Here we added elements the elements `"x"` and `"y"` to our array `arr` using the `unshift()` method. Notice how the order of our inputs, `"x"` and `"y"`, is preserved. When you pass multiple arguments to `unshift()` and `push()`, they are added to the beginning of the array as a block in the exact oder they were passed.

Note that while `push()` and `unshift()` can add multiple elements at once, `pop()` and `shift()` remove only one at a time. 

## Multi-dimensional Arrays 

There are two main types of arrays: **One-Dimensional** and **Two-Dimensional**

A **one-dimensional array**, often called an array, is a single row of elements. Each item in a one-dimensional array is accessed using a single index:
```javascript 
let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[2]); // "cherry"
```
Here, `fruits` is a one-dimensional array. You can think of it as a single row of fruit names. To access any fruit, we use one number (the index) inside square brackets [2].

A **two-dimensional array**, often called 2D Arrays, has multiple rows and columns. In programming, a 2D array is essentially an array of arrays. It is used to represent data that has a natural grid-like structure lke tables, and spreadsheets. Each item in a 2D array is accessed using two indices:
```javascript 
let matrix = [
// 0  1  2
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, 9]  // 2
];
console.log(matrix[0][1]); // 2 
console.log(matrix[2][2]); // 9
console.log(matrix[1][1]); // 5

```
In this example, `matrix` is a two-dimensional array representing a table of numbers (rows and columns). To access the number `2`, we use two indices: `[0][1]`. The first index `[0]`, selects the first row, and the second index, `[1]`, selects the second column in that row. Each index number associated with the row and column is indicated in the comments. 

It's worth noting that in JavaScript, two-dimensional arrays are actually arrays of arrays, with each array sepeated by a comma `,`: 
```javascript 
let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
```
This means each element of the outer array is itself an array.

## Array destructuring 
**Array destructuring** is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise and readable way. Instead of writing something like this: 
```javascript 
const fruits = ["apple", "banana", "orange"];

const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

console.log(first); // "apple"
console.log(second); // "banana"
console.log(third); // "orange"
```
Where we create three separate variables: `first`,`second`,`third` in each line and assign each value accordingly. We can instead write something like this:
```javascript 
let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
``` 
In this example, we have an array called `fruits` with three elements. Using **array destructuring,** we create the variables `first`, `second`, and `third` in a single line contained within square brackets `[]`, rather than declaring them individually. Each element is assigned to a variable based on the order of the variables, so `first` is assigned to `"apple"`, `second` is assigned to `"banana"` and so on.

Array destructuring also allows us to skip elements we're not interested in by using commas. For instance:
```javascript 
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"
```
In this example, we skip the second element `"green"` of the `colors` array by using an extra comma `, ,` between the two variables. This assigns `red` to `firstColor` and `blue` to `thirdColor`, effectively ignoring `green`.

You can also use **default values** in array destructuring, if the array has fewer elements than the variables you're trying to assign:
```javascript 
let numbers = [1, 2];
let [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```
Here, we assign the default value `3 = c` because the `numbers` array doesn't have a third element. 

To capture the remaining elements of an array that haven't been destructured, we can use the **rest syntax**, denoted by three dots `...`:
```javascript 
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]
```
In this example, `first` and `second` capture the first two elements of the `fruit` array. This is followed by a third variable `rest` which is denoted by the three dots `...`, this is to signify that the `rest` variable will store all remaining elements as a new array. Logging it, you can see how the `rest` variable prints out the rest of the arrays.

When using the `rest` syntax, it must be the last element in the destructuring pattern. Putting the `...rest` syntax in the middle:
```javascript 
let [first, ...rest, last] = fruits;
```
Will throw in an error `"Error: Rest element must be last element`

## Reverse a String 

**Reversing a string** is a common programming task that can be accomplished by using a combination of string and array methods. The process involves three main steps:
* Splitting the string into an array of characters 
* Reversing the string 
* Joining the characters back into a string. 

The three main methods to achieve this are: `split()`,`reverse()` and `join()`.

The first step involves converting the string into an array of individual characters. We can do this using the `split()` method. The `split()` method **divides a string into an array pf substrings**. We can specify where each split should happen based on a given separator:
* `""`, an empty string. This splits the string into individual characters. 
* `" "`, a single space. This splits the string wherever spaceso ccur.
* `-`, which splits the string at each dash.

Here's an example of using the `split` method to create an array of characters:
```javascript 
let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]
```
In this example, we use `split()` with an empty string passed into it `("")`, to convert the string `hello`, into an array of individual characters. We store the result in a variable `charArray`. Printing said variable gives us an array with the letters: `"h"`,`"e"`,`"l"`,`"l"`,`"o"`.

After splitting the string into an array of characters, we can now reverse the order of elements in the array. We can do this using the `reverse()` method. The `reverse()` method reverses an array in place:
```javascript 
let charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray); // ["o", "l", "l", "e", "h"]
```
In this example, `reverse()` changes the order of elements in `charArray`, reversing it from `["h", "e", "l", "l", "o"]` to `["o", "l", "l", "e", "h"]`.

The final step is to **convert the reversed array of characters back into a string.** We can accomplish this using the `join()` method. The `join()` method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string:
```javascript
let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"
```
In this example, `join("")` with an empty string combines all the characters into a single string `"olleh"` without any separator between them.

For a more concise version, we can simply chain the `split()`,`reverse()` and `join()` methods into one:
```javascript 
let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed);
```
In our `reversed` variable, we chained the different methods to create `split("").reverse().join("")` which will reverse the string `str`
