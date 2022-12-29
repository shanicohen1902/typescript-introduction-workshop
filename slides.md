# JavaScript

Hello, World!

---

# Syntax

```ts
let helloWorld = true;

if (helloWorld) {
  console.log('The code is easy to read');
}
```

---

# Variables

let 
```ts
let hello = 'Hello world!';
let message;
```

const
```ts
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!
```
---

# Types

```ts
// no error
let message = "hello";
message = 123456;
```

Primitives

```ts
typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"
```
---

# Object

An empty object

```ts
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

Literals and properties

```ts
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

---

# Object usage

```ts
// get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30
user.isAdmin = true;
delete user.age;
```

Square brackets

```ts
let bag = {};
bag['fruit'] = 'banana';
```

Property existence test, “in” operator

```ts
let user = { name: "John", age: 30 };

console.log( "age" in user ); // true
console.log( "blabla" in user ); // false
```

---

# nullish

undefind

```ts
let age;

console.log(age); // shows "undefined"
```

null

```ts
let age = null;
```

---

# typeof

```ts
typeof undefined // "undefined"

typeof Math // "object"

typeof null // "object"

typeof console.log // "function"
```


---


# array

Empty array
```ts
let arr = new Array();
let arr = [];
```

Array usage
```ts
let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] ); // Apple
fruits[2] = 'Pear';
console.log( fruits.length ); // 3
```
---

# array storage

Array can store any type

```ts
// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello
```
---

# task

 
```ts
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?
```
---

# Comparison

```ts
console.log( 2 > 1 );  // true
console.log( 2 == 1 ); // false 
console.log( 'Z' > 'A' ); // true 
```

Comparison of different types

```ts
console.log( '2' > 1 ); // true
console.log( '01' == 1 ); //true
```

```ts
console.log( true == 1 ); // true
console.log( false == 0 ); // true
```

```ts
console.log( 0 == false ); // true
console.log( '' == false ); // true

console.log( 0 === false ); // false
```
---

# loops

while
```ts
while (condition) {
  // code
}
```
```ts
let i = 3;
while (i) console.log(i--);
```
for
```ts
for (begin; condition; step) {
  // ... loop body ...
}
```
```ts
for (let i = 0; i < 3; i++) { ... }
```

---

# Skipping parts

```ts
let i = 0;

for (; i < 3;) {
  console.log( i++ );
}
```


```ts
for (;;) {
  // repeats without limits
}
```
---

# Functions

```ts
function showMessage() {
  console.log( 'Hello everyone!' );
}
```

scope
```ts
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log( userName ); // ?
```

---

# Function parameters

Default values
```ts
function showMessage(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessage("Ann"); // ?
```

Complex expression
```ts
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```
---

# Function expression

Function Declaration:
```ts
function sayHi() {
  console.log( "Hello" );
}
```

Function Expression:
```ts
let sayHi = function() {
  console.log( "Hello" );
};
```

Function Value:
```ts
function sayHi() {
  console.log( "Hello" );
}

sayHi(); // Hello 
console.log( sayHi ); //?
```
---

# Arrow functions, the basics

```ts
let func = (arg1, arg2, ..., argN) => expression;
```

the same as
```ts
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

---

# Arrow function example

```ts
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3
```
---

# Multiline arrow function

```ts
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

console.log( sum(1, 2) ); // 3
```

---

# TypeScript

Hello, World!

---

# Types

Primitives
```ts
const myStringVariable: string = "str";
```

Object
```ts
const myObjectVariable: object = "str"; // error
const myObjectVariable2: object = {};
```

Any
```ts
let myAnyVariable: any = "str";
myAnyVariable = 10;
myAnyVariable = true;
```

Unknown
```ts
const myUnknownVariable: unknown = "str";
const myAnyVariable: any = "str";
```
---

# Page 3

You can directly use Windi CSS and Vue components to style and enrich your slides.

<div class="p-3">
  <Tweet id="20" />
</div>

---

# Types

Union
```ts
let myUnionVariable: string | number = "str";
myUnionVariable = 10;
myUnionVariable = false; // error
```
---

# Types

Literals
```ts
let myStringLiteral: "str" = "str";
let myNumberLiteral: 10 = 10;
let myBooleanLiteral: true = true;

myStringLiteral = "string"; // error
myNumberLiteral = 1; // error
myBooleanLiteral = false // error
```
---

# Types

Array of strings
```ts
const myStringArrayVariable: string[] = ["str", "str"]; 
```
Array of string and numbers
```ts
const myUnionArrayVariable: (string | number)[] = ["str", 10];
const myLiteralArrayVariable: ("str")[] = ["str","str"];
```
---

# enum
```ts
enum Color {Red, Green, Blue};
```
```ts
Color.Red // 0
Color.Blue // 2
Color[1] // "Green"
Color[2] // "Blue"
```

---

# Function
```ts
function myFunction(myStringArg: string, myNumberArg: number): void
{
	// code
}
```
```ts
const myFunctionExpression: (arg: string, arg2: number) => void =
(arg, arg2) => {
	// code
}
```
---

# Type inference
```ts
const myStringVariable = "str"; // string
const myNumberVariable = 10; // number
const myObjectVariable = {
    str: "str",
    num: 10
}; // {str: string, num: number}
```
