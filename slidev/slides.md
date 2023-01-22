---
title: JavaScript
---

# JavaScript

For impatient programmers


---

<img src="/assets/easy.gif" class="m-20 h-80 rounded shadow" />

<!--
easy to start
-->

---

<img src="/assets/weird.gif" class="m-20 h-80 rounded shadow" />

<!--
Weird
-->

---

<img src="/assets/distopia.gif" class="m-20 h-80 rounded shadow" />

<!--
caotic ecosystem
-->

---

# Syntax

```ts
let helloWorld = true;

if (helloWorld) {
  console.log('This code is easy to read');
}
```

<!--
Dynamically typed - when type enforced
Weakly typed - Conversion from one data type to another data type must be done explicitly,
python - optional typing
camelCase.  
semicolon ;
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
  }
  console.log(x); // ?
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
// no worries
let message = "hello";
message = 123456;
```

<!--
wanted to put a gif but
  - stack
  Weakly type!
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
0.1 + 0.2 = ?
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
<br/><br/>

null

```ts
let age = null;
```

<!--
Undefined-initial value
null -switch of
garbage collection
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

# Comparison


```ts
console.log( '2' > 1 ); // true
console.log( '01' == 1 ); //true
console.log( '01' === 1 ); //false
```
<br/><br/>

```ts
console.log( true == 1 ); // ?
console.log( false == 0 ); // ?
```
<br/><br/>

```ts
console.log( 2 > 1 );  // true
console.log( 'Z' > 'A' ); // true 
```
<br/><br/>

<twemoji-cat-with-tears-of-joy />

```ts
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

<!--
Loose equality vs Strict equality
-->

---
layout: center
---

# Is there any way to avoid unexpected behavior at runtime?

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

<!--
- collection of key val
- the val can be anything (even func)
- mutable
- garbage collection
-->

---

# Object properties

```ts
const user = { name: "John", age: 30 };

console.log( "age" in user ); // true
console.log( "blabla" in user ); // false

console.log( user.name ); 

user.isAdmin = true;

delete user.age;
```

Print objects

```ts
str = JSON.stringify(obj);
str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
console.log(str);
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

# array

Empty array
```ts
let arr = new Array();
let arr = [];
```
<br/><br/>

Array usage
```ts
let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] ); // Apple
fruits[2] = 'Pear';
console.log( fruits.length ); // 3
```

<!--
- init new array
- starts from 0
-->

---

# array storage

Array can store any type

```ts
// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

console.log( arr[1].name ); // John

arr[3](); // hello
```

<twemoji-cat-with-tears-of-joy />

```ts
[1, 2, 3] + [4, 5, 6] = ?
```

<!--
- dynamic collection
- list of different types
-->

---

# Map

 
```ts
const dict = new Map ([
  ["Apples",1], ["Pear",9], ["Orange",2]
]);

```

<!--
- not garbage collected!
Key Types
Key size
Optimized for frequect inserts/removals
Ordered!

use weakmap
also set
-->

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

<!--
Use map/filter/reduce when you can
-->

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

not have to be declared before used
-->

---

# Anonymous function


```ts
function () {
  console.log( 'I have no name!' );
}
```

<!--
why?
local usage
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
<br/><br/>

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
<br/><br/>

Function Expression:
```ts
let sayHi = function() {
  console.log( "Hello" );
};
```
<br/><br/>

```ts
sayHi(); // Hello 
console.log( sayHi ); 
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
<br/><br/>

the same as
```ts
let myFunc = (arg1) => {
  return expression;
}
```
<br/><br/>
```ts
let myFunc = (arg1) => expression;
```
<br/><br/>
```ts
let myFunc = arg1 => expression;
```


---

# Arrow function 

```ts
let sum = (a, b) => a + b;


let sum = function(a, b) {
  return a + b;
};


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


```ts {monaco}
let myStringVariable = "str"; // implicit
let anotherStringVariable:string = "str"; //explicit

myStringVariable = 10; 
```
<br/><br/>
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

```ts {monaco}
const myStringArrayVariable: string[] = ["banana", "pizza"];
myStringArrayVariable.push(10) // error

const anotherStringArrayVariable = ["banana", "pizza"];
myStringArrayVariable.push(10) // error
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


function anotherFunction(myStringArg: string, myNumberArg?: number): string
{
	// code
}
```


---

## Object Literals

```ts {monaco}
interface Car {
  model: number;
  color?: string;
}

```
```ts {monaco}
type Car = {
  model: number;
};
```
```ts {monaco}
const myCar: Car = {
  model: 2021,
};
```
<br/><br/>
```ts {monaco}
const myCar: { model:number } = {
  model: 2021,
};
```

<!--
Interface extandable
-->

---

# instanceof

```ts
myCar instanceof Car; // ?
```


---

```ts
console.log('Goodbye');
exit();
```
