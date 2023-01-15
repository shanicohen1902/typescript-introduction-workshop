---
title: JavaScript
---

# JavaScript

For impatient programmers


---


<img src="/assets/easy.gif" class="m-20 h-80 rounded shadow" />


---


<img src="/assets/weird.gif" class="m-20 h-80 rounded shadow" />


---


<img src="/assets/distopia.gif" class="m-20 h-80 rounded shadow" />


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
semicolon ;Dynamically typed - what doe's it means? there is no type. the type is on run time
python - optional typing
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

# let

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
global scope
local scope
if / block scope
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

![Local Image](/assets/types.png)

<!--
By value - the value of a variable is passed (copied)
By reference - a reference to that variable is passed to the function (gives the function a way to change the contents of the variable).
Java - All arguments to methods in Java are pass-by-value.

js -primitives by value, objects by reference
Allnon.primitivesinherit frombject

objects at the heap
primitives at the stack
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
- dynamic collection
- also set 
- also map that it's like an object but it has more features
-->

---

# array storage

Array can store any type

```ts
// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello
```

<twemoji-cat-with-tears-of-joy />

```ts
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```


---

# Map

 
```ts
const dict = new Map ([
  ["Apples",1], ["Pear",9], ["Orange",2]
]);

```

<!--
- not garbage collected!
use weakmap
also set
-->

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

# Object

An empty object

```ts
const user = new Object(); 
const user = {};  
```

The two ways of using objects

```ts
const user = {    
  name: "John",  
  age: 30
};
```
```ts
const user = {};
user['name'] = "john";
user['age'] = 30;
```

Which to use?

<!--
- collection of key val
- the val can be anything (even func)
- mutable
- garbage collection
-->

---

# Object properties

```ts
console.log( user.name ); 
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


---

# Clone
```ts
const anotherUser = { ...user };
// or
const anotherUser = Object.assign(user, { name: "John"})

// deep?
```


---

# Create object by class

Class 
```ts
Class User { 
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
does it used? yes!
static - global to the class
-->

---

<img src="/assets/homer-simpson-eat.gif" class="m-20 h-80 rounded shadow" />


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
when using the word function - function definition

can be nested (and then it's closure) to encapsulate logic

function usually stores at the stack
internal function can access to the outer variables since it stores the outer functions at the heap
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

<!--
can be a parameter or return value
-->

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

```ts
sayHi(); // Hello 
console.log( sayHi ); //?
```

<!--
An expression is a piece of code that can be evaluated to produce a value.
-->

---

# Arrow function

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

# Arrow function 

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

# That's it!

<div class="p-3">
  <Tweet id="1606946307620458496" />
</div>


---

# TypeScript

![Local Image](/assets/viralhog-spider.gif)

<!--
(if you don't write tests)

open source by microsoft
super set of js - every ts is also a js

strongly type - no option to change type
weakly typed - conversion of type
compile - translate java to nachine code / vm (most of static languages)
ts - translate to another language. transpilation
js - interpreted (most of dynamic languages) JIT

data instead of abstraction

how does it effect on your code?
and on efficiency? 
changes ?
-->

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
