# Common Array Methods

To find the index of a specific element within an array, we can use the `indexOf()` method. If the element cannot be found, then it will return `-1`:
```javascript 
array.indexOf(element, fromIndex)
```
`element` represents the value you want to search for within the array, and the `fromIndex` parameter is the position from which the search should start. The `fromIndex` is optional, if it is not provided then the search starts from the beginning of an array:
```javascript 
let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
console.log(index); // 1
```
In this example, we have an array of `fruits`, containing various fruit names. We use the `indexOf()` method to find the index of the string `banana` within the `fruits` array. Since `banana` is present at index `1`, the method returns `1`.

> [!NOTE]
> If there are multiple instances or copies of an element, it will return the first instance of that element starting from left to right.

If the element we're not searching for is not found in the array, `indexOf()` returns `-1`:
```javascript 
let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("grape");
console.log(index); // -1
```
Here, we search for the string `grape` in the fruits array using `indexOf()`. Since `grape` is not present in the array, it returns `-1`. 

If you want to start looking for an item after a specific index number, then we pass a second argument like this:
```javascript 
let colors = ["red", "green", "blue", "yellow", "green"];
let index = colors.indexOf("green", 3);
console.log(index); // 4
```
In this example, the search does not start at index `0`, instead it starts from index `3`, which is `yellow`. Notice how even though there are two items called `green`: located in index `1` and `4`, it chose the `green` at index `4` because we started the search at index `3`.

## Splice method 

You can add or remove elements from any position in the array using the `splice()` method. The return value for the `slice()` method will be an array of the items removed from the array. If nothing was removed, then an empty array will be returned. 

It is important to note that this method will modify the original array, rather than creating a new array. The basic syntaax is as follows:
```javascript 
array.splice(startIndex, itemsToRemove, item1, item2)
```
`startIndex` specifies the index at which to begin modifying the array, while `itemsToRemove` is an optional parameter indicating how many elements to remove. If `itemsToRemove` is ommitted, `splice()` will remove all elements from `startIndex` to the end of the array. The subsequent parameters, `item1`,`item2` and so on are the elements to be added to the array, beginning at `startIndex`.

For example:
```javascript 
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]
```
Here, `splice(2, 2)` starts at index `2`: `orange` and removes `2` elements: `orange`,`mango`. The modified array will now consist of only `apple`,`banana` and `kiwi`.

If you want to add elements to the array without removing anything:
```javascript 
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
```
Here, `splice()` starts at index `1`:`green`, removes `0` elements, and inserts `yellow` and `purple`. The second parameter `0` is used to indicate that we do not want to remove any elements. Since `green` is already occupying that position, we shift all remaining elements: `green`,`blue` to the right and insert the elements we want to insert.

You can also use `splice()` to simultaeneously remove and add elements:
```javascript 
let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);

console.log(numbers); // [1, 6, 7, 8, 4, 5]
```
Here, `splice()` starts at index `1`, which is `2` and removes `2` elements (`2` and `3`). After that, it inserts `6`,`7` and `8`.

If we need to keep the original array unchanged, we can create a copy of the array using the spread operator `...`:
```javascript 
let original = [1, 2, 3, 4, 5];
let copy = [...original];
copy.splice(2, 1, 6);

console.log(original); // [1, 2, 3, 4, 5]
console.log(copy);     // [1, 2, 6, 4, 5]
```
In this example, to create a copy of the `original` array without modifying it, we used the spread operator (`...`). The spread operator will create a shallow copy of the elements of the `original` array into a new array. In this case, we stored the original array in a variable called `copy`.  

When we use `copy.slice(2, 1, 6)`, it modifies the copy array by removing the element at index `2`(which is `3`), and inserting the new element `6` at that position.

One common use case for `splice()` is to remove a single element from an array when you know its index:
```javascript 
let fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}

console.log(fruits); // ["apple", "banana", "mango"]
```
In this example, we first used the `indexOf()` method to find the index of the element `orange` in the `fruits` array. The `indexOf()` method returns the index `2`. We then compare `indexToRemove` with `-1` to ensure that the element exists in the array before attempting to remove it. Since `2 != -1`, an element is found meaning we can use the `splice()` to remove one element starting from the `indexToRemove` position.

We can also use `splice()` to clear an array by removing all elements:
```javascript 
let array = [1, 2, 3, 4, 5];
array.splice(0);

console.log(array); // []
```
Here, by inputting `0`, we essentially clear all elements in the array.

While `splice()` is powerful, it's worth noting that for very large arrays, it can be less efficient than other methods. In such cases, if you're only adding or removing elements at the end of the array, methods like `push()`,`pop()`,`unshift()` and `shift()` might be more appropriate.

## Includes Method 

We can check if an aray contains a specific value using the `includes()` method. This method returns a boolean value: `true` if the array contains the specified element, and `false` otherwise:
```javascript 
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```
In this example, we have an array `fruits`. We use the `includes()` method to check if `banana` is in the array. It returns `true` because `banana` is indeed present. We then check for `grape`, which returns `false` because it's not in the array.

The `includes()` method is case-sensitive when dealing with strings. This means that `Banana` with a capital B and `banana` with all lowercase letters are considered different values:
```javascript 
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("Banana")); // false
```

The `includes()` method can also accept an optional second parameter that specifies the position in the array to start the search:
```javascript
let numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers.includes(30, 1)); // true
console.log(numbers.includes(30, 4)); // false
```
For the first `console.log()`, we are looking for the number `30` starting at index `1`. In this case, there is a number `30` that appears at index `2`, so the method returns `true`. However at the second `console.log()`, when we searched for the same number starting at index `4`, it returns `false` because the number `30` doesn't appear after that. 

It's worth noting that `includes()` uses the strict equality comparison `===`, when comparing values. This means it can distinguish between different types. For example:
```javascript 
let mixedArray = [1, "2", 3, "4", 5];
console.log(mixedArray.includes(2));  // false
console.log(mixedArray.includes("2")); // true
```
In this example, the number `2` and the string `"2"` are considered different data types. So the first `console.log()` returns `false` while the second `console.log()` returns `true`.

## Shallow Copies 

A **shallow copy** of an array is a new array that has the same items as the original. They are helpful when you need to modify the top-level structure, such as adding, removing, or reordering elements, without modifying the original array or the inner array. 

The most common methods to create shallow copies of arrays are: `concat()`,`slice()` and the spread operator `(...)`

Starting with the `concat()` method, this method creates a new array by merging two or more arrays. When used with a single array it effectively creates a shallow copy:
```javascript 
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```
In this example, we used the `concat()` method to concatenate an empty array `[]` to the `originalArray`. This will create a new array that is a shallow copy of the `originalArray`. The `copyArray` contains the same elements as the `originalArray`, but it is a different array object, which is why the strict equality `===` returns `false`.

Another method to create a shallow copy is the `slice()` method. Whencalled without arguments, `slice()` returns a shallow copy of the entire array:
```javascript 
const originalArray = [1, 2, 3];
const copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```
In this case, `originalArray.slice();` creates a new array that is a shallow copy of `originalArray`.

Lastly, the spread operator `...`, introduced in ES6, provides another concise way to create shallow copies of arrays:
```javascript 
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```
In this example, the spread operator `...` spreads the elements of `originalArray` into a new array `copyArray`, effectively creating a new shallow copy. 

As mentioned previously, these methods create new array objects, which means you can modify the code without affecting the original, for example:
```javascript 
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

copyArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copyArray);     // [1, 2, 3, 4]
```
In this example, adding an element to `copyArray` doesn't affect `originalArray`.

