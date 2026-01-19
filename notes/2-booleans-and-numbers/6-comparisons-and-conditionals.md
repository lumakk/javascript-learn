# Understanding Comparisons and Conditionals

## Conditionals and Null 

In JavaScript, `null` and `undefined` are two distinct data types that represent the absence of a value, but they behave differently in compariosns.

A variable is `undefined` when it has been declared but hasn't been assigned a value. It's the default value of uninitialized variables.

The `null` type on the other hand is an assignment value that represents a deliberate non-value. It's often used to indicate that a **variable intentionally has no value**

When comparing `null` and `undefined`, using the equality operator `==`, JavaScript performs type coercion. This means it tries to convert the operands to the same type before making the comparison. In this case, `null` and `undefined` are considered equal:
```javascript 
console.log(null == undefined); // true
```
However, when using the strict equality operator `===`, which checks both value and type without performing type coercion, `null` and `undefined` are not equal:
```javascript 
console.log(null === undefined); // false
```

When comparing `null` or `undefined` with other values using the equality operator `==`, the behavior can be unexpected. For example:
```javascript 
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
```
We can see that although `null` returns `false`, when comparing using the `>=` operator, it returns `true`.

`null` and `undefined` are only equal to each other (and themselves) when using the equality operator:
```javascript 
console.log(null == 0);  // false
console.log(null == ''); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false
```
`undefined`, on the other hand, always converts to `NaN` in numeric contexts, which makes all numeric comparisons with `undefined` return `false`:
```javascript 
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false
```

This means it's generally recommended to use the strict equality operator `===` especially when dealing with `undefined` and `null` values.


## Switch Statements

Previously, we learned about basic conditional statements: `if/else` statements. Here we'll talk about another conditional statement called `switch`.

A **`switch` statement** evaluates an expression and matches its value against a series of `case` clauses. When a match is found, the code associated with the matching `case` is executed. It is often used as a cleaner alternative to multiple `if/else` statements. Here's a basic structure of a `switch` statement:
```javascript 

switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}
```
The `expression` inside the parentheses `()`  is evaluated exactly once. It then compares this result against the `value` of each `case` using **strict equality** `===`, which means both the value and data type must match. If a match is found, the code inside the case executes. The `break` statement at the end of each `case` is crucial. It tells the program to exit the `switch` block once a matching `case` has been executed. Without it, the program would continue executing subsequent cases, a behavior known as "fall-through". The `default` value is executed if the expression doesn't match any of the `cases`.

`switch` statements are typically used when you're comparing a single variable against multiple possible values. They're especially useful when you have many potential conditions to check against a single variable. Here is an example using a `switch` statement for the days of the week: 
```javascript 
const trafficLight = "yellow";

switch (trafficLight) {
  case "green":
    console.log("Go!");
    break;
    
  case "yellow":
    console.log("Slow down...");
    break; // Matches! Prints "Slow down..." then exits.
    
  case "red":
    console.log("Stop!");
    break;
    
  default:
    console.log("Traffic light is broken.");
}
```

`switch` statements can be more readable and concise when dealing with many possible values for a single variable.

`if/else if` statements on the other hand are more flexible. They can evaluate complex conditions and different variables in each clause making them suitable for a wider range of scenarios:
```javascript 
let creditScore = 720; 
let annualIncome = 60000; 
let loanAmount = 200000; 

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    eligibilityStatus = "Not eligible due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);
```
