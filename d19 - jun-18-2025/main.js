var msg="Hello, World!";

// Data types
// primitive types
var num = 42; // number
var isTrue = true; // boolean
var name = "John"; // string
var notDefined = undefined; // undefined
var emptyValue = null; // null

// non-primitive types
var arr = [1, 2, 3]; // array
var obj = { key: "value" }; // object
var func = function() { return "I am a function"; }; // function

// Operator

// Arithmetic operators
/*
- Addition: +
- Subtraction: -
- Multiplication: *
- Division: /
- Modulus: %
*/

// Assignment operators
/*
- Assignment: =
- Addition assignment: +=
- Subtraction assignment: -=
- Multiplication assignment: *=
- Division assignment: /=
- Modulus assignment: %=
*/

// Comparison operators
/*
- Equal to: ==
- Not equal to: !=
- Strict equal to: ===
- Strict not equal to: !==
- Greater than: >
- Less than: <
- Greater than or equal to: >=
- Less than or equal to: <=
*/

// Logical operators
/*
- Logical AND: &&
- Logical OR: ||
- Logical NOT: !
*/

var city = "Dhaka ";
city += "Bangladesh";
console.log("My city is " + city);

console.log(5 > 3 || 2 > 4);

// ternary operator
var age = 13;
var isAdult = (age >= 18) ? "Adult" : "Minor";
console.log(isAdult);