# Working With Strings

## String Character Methods

**ASCII** is short for the **American Standard Code for Information Interchange**, it is a character encoding standard used in order for computers to represent text.

ASCII assigns a numeric value to each character. For example, the capital letter `A` is represented by the number `65`, while the lowercase `a` is represented by `97`.

In JavaScript, you can interact with ASCII values using methods like `charCodeAt()` and `fromCharCode()`.

For example, here is code accessing the ASCII code of character `A` from a string `Apple`
```js 
    let letter = "Apple";
    console.log(letter.charCodeAt(0)) // OUTPUTS 65
```
We can see that it returns an ASCII value of `65`

You can also do the opposite and convert an ASCII code into its corresponding character using the `fromCharCode()` method as seen below:
```js 
    let char = String.fromCharCode(65);
    console.log(char); // OUTPUTS A
```
In the example above, `fromCharCode(65)` converts the ASCII value `65` to a character `A`

## String Search Method (include())

You can check whether a string contains a specific **substring (a smaller part of a string)**, using the `includes()` method.

The `includes()` method works by returning `true`, if the substring is found within a string, and `false` if it's not found. It is particularly useful if you want to check if a user's input contains a specific word or character.

Here is the basic syntax:
```string.includes(searchValue);```

Where `searchValue` is the specific substring you want to look for and `string` is where the substring is located. For example,
```js 
    let phrase = "JavaScript is awesome!";
    let result = phrase.includes("awesome!");
    
    console.log(result); // RETURNS true
```
In the example above, we used the `includes()` method in the string `"JavaScript is awesome!"`. Since it is found it returns `true`

It is important to note that the `includes()` method is case-sensitive, for example
```js 
    let phrase = "JavaScript is awesome!";
    let result = phrase.includes("Awesome");

    console.log(result); // false 
```
We can see that since `Awesome` has an uppercase `A`, it doesn't match `awesome`, which results in `false`

You can also use the `includes()` method to check for a substring starting at a specific index in the string by providing a second parameter:
```string.includes(searchValue, number);```
Where number is the index of the string.

For example, 
```js 
    let text = "hello, javascript world!";
    let result = text.includes("javascript", 7);
    console.log(result); // returns true 
```
here we can see that we searched for the substring `javascript` at index `7`. since it is there, it returned `true`

## String Slice Method (slice())

other than searching, we can **extract** a substring from a larget string. We do this using the `slice()` method. 

Here is the basic syntax:
```string.slice(startIndex, endIndex);```
Where `startIndex` is the position where the extraction starts and `endIndex` is the position where the extraction ends.

For example, 
```js 
    let message = "Hello, world!";
    let greeting = message.slice(0, 5);

    console.log(greeting); // OUTPUTS Hello
```
In the example above, `slice(0, 5)` extracts the characters from index `0` up to index `5` and stores it in variable `greeting`. As a result, the word `Hello` is extracted.

If you omit the second parameter, `slice()` will extract everything from the start index to the end of the string: 
```js 
    let message = "Hello, world!";
    let world = message.slice(7);

    console.log(world); // OUTPUTS world!
```
Here, `slice(7)`, extracts the string starting at index `7` all the way to the end of the string, resulting in `world!`

You can also use **negative numbers** as indexes. When use a negative number it counts backwards from the end of the string,
```js 
    let message = "JavaScript is fun!";
    let lastWord = message.slice(-4);

    console.log(lastWord); // OUTPUTS fun!
```
In the example above, `slice(-4)` extracts the last four characters from the string, giving us `fun!`


