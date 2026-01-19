# String Modification Methods

## Replacing Strings 

You can replace a portion of a string with another string using the `replace()` method.

The `replace()` method allows use to find a specified value in a string and replace it with another value. The method returns a new string with the replacement.

Here is the basic syntax:
```js 
    string.replace(searchValue, newValue);
```
The method takes in two paremeters, `searchValue` is the value you want to search for while `newValue` is the value that will replace `searchValue`

For example:
```js 
let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"
```
In the example above, the word `JavaScript` is found and replaced with the word `coding`

The `replace()` method is case-sensitive, meaning that it will only find exact matches of the `searchValue`, for example:
```js 
let sentence = "I enjoy working with JavaScript.";
console.log(sentence);  // "I enjoy working with JavaScript."
let updatedSentence = sentence.replace("javascript", "coding");
console.log(updatedSentence);  // "I enjoy working with JavaScript."
```
Since the `javascript` has a lowercase `j`, it doesn't match `JavaScript` which means the replacement is not made.

By default, the `replace()` method will only replace the first occurrence of the `searchValue`. If the value appears multiple times in the string, only the first one will be replaced:
```js 
let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);  // "Hello, universe! Welcome to the world of coding."
```
Notice how only the first intsance of `world` is replaced with `universe`

In order to replace all occurrences of the `searchValue`, we need to use the `replaceAll()` method. For example,
```js 
let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);  // "Hello, universe! Welcome to the universe of coding."
```
As seen above, all instances of the string `world` has been replaced by the string `universe`.

Replacing string is particularly useful if, for instance, you might need to update user information in a URL, changing the formatting of dates, or correcting errors in user-generated content.

## Repeat Strings a Number of Times 

You can repeat a string a number of times using the `repeat()` method. The method provides a more efficient way of generating repeated patters or simply duplicating text. 

The basic syntax is as follows:
```js 
    string.repeat(count);
```
Where `string` is the string you want to repeat and `count` is the number of times you want the string to be repeated. For example,

```js 
    let word = "Hello!";
    let repeatedWord = word.repeat(3);
    console.log(repeatedWord); // "Hello!Hello!Hello!"
```
As you can see, the string `Hello!` is repeated three times, resulting in `Hello!Hello!Hello!`

For the previous example, we used the variable `word` as the receiver (or object) for the `repeat()` method. We can also plug in directly the string to the method, for example:
```js 
    let repeatedWord = "Hello!".repeat(3);
    console.log(repeatedWord); // "Hello!Hello!Hello!"
```
We can see that we wrote `"Hello!".repeat(3);` instead and it still gave us the same results. 

When using the `repeat()` parameter, there are a few exceptions and limitations to keep in mind.

For instance, if you pass a negative number on the `count` parameter, it will throw out a `RangeError` as seen below
```js 
    let word = "Hello!";
    let repeatedWord = word.repeat(-1);
    console.log(repeatedWord); // RangeError 
```

The `count` must also be a **finite** number. If you try to repeat a string an infinite number of times, you will also get a `RangeError`
```js 
    let word = "Hello!";
    let repeatedWord = word.repeat(Infinity);
    console.log(repeatedWord); // RangeError 
```

If the count is not an integer (such as a decimal like `2.5`), the `repeat()` method will round it down to the nearest integer `2`

```js 
    let word = "Hello!";
    let repeatedWord = word.repeat(2.5);
    console.log(repeatedWord); // "Hello!Hello!" 
```

If you pass `0` as the `count`, the `repeat()` method will return an empty string.

```js 
    let word = "Hello!";
    let repeatedWord = word.repeat(0);
    console.log(repeatedWord); // "" 
```


