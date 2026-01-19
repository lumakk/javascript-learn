# String Formatting

## Lowercase and Uppercase Methods

You can adjust the casing of an entire string using the `toUpperCase()` and `toLowerCase()` methods.

As the name implies, `toUpperCase` method converts all the characters to uppercase letters and returns a new string with all the uppercase characters.

For example,
```js 
    let greeting = "Hello, World";
    let uppercaseGreeting = greeting.toUpperCase();
    console.log(uppercaseGreeting); // OUTPUTS "HELLO, WORLD!"

```
As you can see, the `toUpperCase()` method transform the entire string into uppercase letters. The original string remainds unchanged because `toUpperCase` returns **a new string**, rather than modifying the original one.

Similarly, `toLowerCase()` converts all character strings into lowercase. 
```js 
    let shout = "I AM LEARNING JAVASCRIPT!";
    let lowercaseShout = shout.toLowerCase();
    console.log(lowercaseShout);

    // OUTPUTS 
    // "i am learning javascript!"
```

If you'll notice, both methods do not have parameters. This is because parameters are not needed when using the `toLowerCase()` and `toUpperCase()` methods since they convert the entire string. The methods do not affect numeric and non-alphanumeric characters.

The methods are particularly useful if you want to make sure user input is standardized for case-insensitive comparisons.

## Trimming Whitespace

**Whitespace** refers to non-visible characters. They are the spaces, tabs, or line breaks in a string. 
```js 
    let greeting = "     Hello, world!     "
```

When working with strings in JavaScript, whitespace can interfere with operations like comparison, storage, or display especially when dealing with user input. This is why it is important to know how to remove them.

In JavaScript, you can remove whitespace using the `trim()`, `trimStart()` and `trimEnd()` methods.

The `trim()` method is the most common way to remove whitespace from both the beginning and end of a string, for example:
```js 
    let message = "   Hello!   ";
    console.log(message); // OUTPUTS "   Hello!   "
    let trimmedMessage = message.trim();
    console.log(trimmedMessage); // OUTPUTS "Hello!"
```
As you can see, simply printing the original message includes the whitespace. Using the `trim()` method removes the whitespace at the front and end of the string. 

> > [!NOTE]
> The `trim()` method does not remove any whitespace within the string (between words, for example) and only removes those at the front and back.

You can specify if you want to remove the whitespace at the front of the string, using `trimStart()` or at the end of the string, using `trimEnd()`

For example for `trimStart()` ,
```js
    let greeting = "   Hello!   ";
    console.log(greeting);  // "   Hello!   "
    let trimmedStart = greeting.trimStart();
    console.log(trimmedStart);  // "Hello!   "
```

And for `trimEnd()`
```js 
    let greeting = "   Hello!   ";
    console.log(greeting);  // "   Hello!   "
    let trimmedEnd = greeting.trimEnd();
    console.log(trimmedEnd);  // "   Hello!"
```




