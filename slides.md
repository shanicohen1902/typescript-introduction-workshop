---
title: JavaScript
---

# JavaScript

For impatient programmers


---


<img src="/easy.gif" class="m-20 h-80 rounded shadow" />


---


<img src="/weird.gif" class="m-20 h-80 rounded shadow" />


---


<img src="/distopia.gif" class="m-20 h-80 rounded shadow" />


---

# Syntax

```ts
let helloWorld = true;

if (helloWorld) {
  console.log('This code is easy to read');
}
```

<!--
camelCase.  
semicolon ;Dynamically typed
-->

---

# Variables

let 
```ts
let hello = 'Hello world!';
let message;
hello = 'Just Hello!';
```

const
```ts
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!
```

var
```ts
var x = 123
```

<!--
const - immutable variable bindings
can’t assign a different value later. 
the value itself may be mutable and we may be able to change its contents.
-->

---

# const

```ts
const data = ['10','20','30'];
data[1] = '90'; // ?
```
---

# var

```ts {monaco}
let x = 5;
{
  let x = 10;
  
  if(true){
    let x = 8;
    var y = 'hoisted!';
  }
  console.log(y); // 'hoisted!'
}
```

<!--
bit weird!
-->

---

# var

```ts {monaco}
let x = 5;
{
  let x = 10;
  
  if(true){
    let x = 8;
    var y = 'hoisted!';
  }
  console.log(y); // 'hoisted!'
}
```

<!--
bit weird!
-->

---

# Primitives
Assign
```js {monaco}
// no error
let message = "hello";
message = 123456;
```

<!--
1. passed by value (copied)
2. compared by value
3.seven types
-->

---

# Primitives

Boolean
```ts
true
false
```

Number
```ts
1.141
-123
```

String
```ts
'abc'
"abc"
`String with interpolated values: ${256} and ${true}`
```

Bigints
```ts
17n
-49n
```

<!--
no extra type for char
-->

---

# None values

undefind

```ts
let age;

console.log(age); // shows "undefined"
```

null

```ts
let age = null;
```

<!--
Undefined-initial value
null -switch of
-->

---

# typeof

```ts
typeof 0  // "number"

typeof true // "boolean" 

typeof "foo" // "string"

typeof undefined // "undefined"

typeof null // "object" - why?

typeof console.log // "function" - why?

```

<!--
null  is.a.primitive(bug)
-->

---

![Local Image](/types.png)

<!--
By value - the value of a variable is passed (copied)
By reference - a reference to that variable is passed to the function (gives the function a way to change the contents of the variable).
Java - All arguments to methods in Java are pass-by-value.
js -primitives by value, objects by reference
Allnon.primitivesinherit frombject
-->

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
tip - use functional when you can
<!--
-There is no concept of array size
-->

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

<twemoji-cat-with-tears-of-joy />

```ts
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```


---

# Array assignment

 
```ts
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log( fruits.length ); // ?
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
console.log( true == 1 ); // ?
console.log( false == 0 ); // ?
```

```ts
console.log( 0 == false ); // true
console.log( '' == false ); // true
console.log( 0 === false ); // ?
```

<twemoji-cat-with-tears-of-joy />

```ts
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
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
```ts
for (let item:items) { ... }
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

<!--
Function is an object
-->

---

# Anonymous function


```ts
function () {
  console.log( 'I have no name!' );
}
```

<!--
Function is an object
-->

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

<!--
An expression is a piece of code that can be evaluated to produce a value.
-->

---

# Arrow functions, the basics

A simple one
```ts
let myFunc = function(arg1) {
  return expression;
};
```
the same as
```ts
let myFunc = (arg1) => {
  return expression;
}
```
the same as
```ts
let myFunc = (arg1) => expression;
```
the same as
```ts
let myFunc = arg1 => expression;
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

# Object

An empty object

```ts
const user = new Object(); // "object constructor" syntax
const user = {};  // "object literal" syntax
```

The two ways of using objects

```ts
const user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```
```ts
const user = {};
user['name'] = "john";
user['age'] = 30;
```

Which to use?

<!--
- mutable
- garbage collection
-->

---

# Compare Objects

```ts
const obj = {}; 
assert.equal(obj === obj, true);
assert.equal({} === {}, false); //?
```

<!--
- mutable
- garbage collection
-->

---

# Object properties

```ts
// get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30
user.isAdmin = true;
delete user.age;
```

Square brackets

```ts
const bag = {};
bag['fruit'] = 'banana';
```

Property existence test, “in” operator

```ts
const user = { name: "John", age: 30 };

console.log( "age" in user ); // true
console.log( "blabla" in user ); // false
```

---

# Clone
```ts
const anotherUser = { ...user };
// or
const anotherUser = Object.assign(user, { name: "John"})
```

---

# Create object by function

```ts
function User(name, age) {
  this.name = name;
  this.age = age;
}
```

Instantiate

```ts
let user = new User("John", 30);
```
---

# Create object by class

Class 
```ts
Class user { 
  constructor(name, age){
   	this.name = name;
    this.age = age;
  }
  connect(message){
    // whatever
  }
};
```

```ts
let user = new User("John", 30);
```

<!--
-Class is a syntetic sugar
-->

---

# That's it!

<div class="p-3">
  <Tweet id="1606946307620458496" />
</div>


---

# TypeScript

![Local Image](/viralhog-spider.gif)

---

#### Install tsc compiler

```bash
npm i typescript

```

#### Compile file
```bash
tsc index.ts
```

---

# Customize

touch tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2020",
    "watch": true
  }
}
```

---

# Autocomplete

```bash
npm i -D @types/lodash
```

---

# Types

Primitives
```ts {monaco}
let myStringVariable = "str"; // implicit
let anotherStringVariable:string = "str"; //explicit

myStringVariable = 10; 
```

Object
```ts {monaco}
const myObjectVariable: object = "str"; // error
const myObjectVariable2: object = {};
```

Any
```ts {monaco}
let myAnyVariable; // any
let anotherAnyVariable:any = 'banana'; // any

myAnyVariable = 10;
myAnyVariable = true;
```

---

# Types

Unknown
```ts {monaco}
const myUnknownVariable: unknown = "str";
const myStrVariable = "str";
myStrVariable = myUnknownVariable;
```

<!--
unknown-assigning the variable of unknown type to anything else is not possible
-->

---

# Union


```ts {monaco}
let myUnionVariable: string | number = "str";
myUnionVariable = 10;
myUnionVariable = false; // error
```
---

# Literals


```ts {monaco}
let myStringLiteral: "str" = "str";
let myNumberLiteral: 10 = 10;
let myBooleanLiteral: true = true;

myStringLiteral = "string"; // error
myNumberLiteral = 1; // error
myBooleanLiteral = false; // error
```
---

# Array of

Array of type
```ts {monaco}
const myStringArrayVariable: string[] = ["banana", "pizza"];
myStringArrayVariable.push(10) // error

const anotherStringArrayVariable = ["banana", "pizza"];
myStringArrayVariable.push(10) // error
```
Array of types
```ts {monaco}
const myUnionArrayVariable: (string | number)[] = ["str", 10];

const myLiteralArrayVariable: ("banana" | "strawberry")[] = ["banana","strawberry"];
myLiteralArrayVariable.push("orange") //error
```


---

# Enum

```ts {monaco}
enum Color {Red, Green, Blue};

Color.Red // 0
Color.Blue // 2
Color[1] // "Green"
Color[2] // "Blue"
```


---

# Function
```ts {monaco}
function myFunction(myStringArg, myNumberArg) // error
{
	// code
}


function anotherFunction(myStringArg: string, myNumberArg: number): string
{
	// code
}
```

```ts {monaco}
const myFunctionExpression: (arg: string, arg2: number) => void =
(arg, arg2) => {
	// code
}
```


---

# Interface

```ts {monaco}
interface LabeledValue {
  label: string;
}
```

# Type

```ts {monaco}
type Puppy = {
  toys: number;
};
```

<!--
Interface extandable
-->
---

# Generics

```ts
function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}
```
---

```ts
console.log('Goodbye');
exit();
```
