// ! FUNCTION IN TYPESCRIPT

// ? 1. FUNCTION TYPE ANNOTATION

// Definition:
// Function Type Annotation means explicitly defining the types
// of a function's parameters.

// Simple:
// Function ke parameters ka type hum khud define karte hain.

function add(num1: number, num2: number) {
  return num1 + num2;
}

add(10, 20);

// num1 → number
// num2 → number


// ? 1.1 FUNCTION RETURN TYPE

// Definition:
// Function Return Type means explicitly defining the type
// of value that a function returns.

// Simple:
// Function kya value return karega, uska type hum define karte hain.

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

multiply(10, 20);

// `: number` means the function must return a number.


// ? 2. OPTIONAL PARAMETERS

// Definition:
// An optional parameter is a parameter that may or may not
// be provided when calling a function.

// Simple:
// Parameter ke naam ke baad `?` lagane se
// wo parameter optional ho jaata hai.

function greet(name: string, age?: number) {
  console.log(`Hello ${name}`);

  if (age !== undefined) {
    console.log(`Your age is ${age}`);
  }
}

greet("Nikhil");
greet("Nikhil", 23);

// `age?: number` means age can be provided or omitted.

// If age is not provided:
// age → undefined

// Important:
// Required parameters must come before optional parameters.


// ? 3. DEFAULT PARAMETERS

// Definition:
// A default parameter is a parameter that has a default value.

// Simple:
// Agar function call karte time value nahi di,
// to default value automatically use ho jaati hai.

function greet1(name: string, message: string = "Hello") {
  console.log(`${message} ${name}`);
}

greet1("Nikhil");
greet1("Nikhil", "Hey");

// First call:
// message → "Hello"

// Second call:
// message → "Hey"

// Default value is used when the argument is not provided.


// ? 4. REST PARAMETERS

// Definition:
// A rest parameter allows a function to accept multiple arguments
// and collects them into an array.

// Simple:
// Jab hume pehle se nahi pata ki function ko kitne arguments milenge,
// tab `...` rest parameter use karte hain.

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(10, 20, 30);
sum(10, 20, 30, 40);

// `...numbers: number[]` means:
// Multiple number arguments can be passed.
// All arguments are collected inside the `numbers` array.

// Example:
// sum(10, 20, 30)
// numbers → [10, 20, 30]

// Important:
// Rest parameter must always be the last parameter.


// ? 5. ARROW FUNCTIONS

// Definition:
// An arrow function is a shorter syntax for writing a function
// using the `=>` operator.

// Simple:
// Normal function ko short syntax mein likhne ke liye
// arrow function use kar sakte hain.

const add1 = (num1: number, num2: number): number => num1 + num2;

add1(10, 20);

// `=>` is used to create an arrow function.


// ? 5.1 ARROW FUNCTION WITH VOID

const greeting = (): void => {
  console.log("Hello Nikhil");
};

greeting();

// `: void` means the function does not return a value.


// ? 6. FUNCTION TYPE

// Definition:
// A Function Type defines the parameter types
// and return type of a function.

// Simple:
// Function ka structure/type define karne ke liye
// Function Type use kar sakte hain.

type Add = (a: number, b: number) => number;

const add2: Add = (num1, num2) => num1 + num2;

add2(12, 21);

// `Add` is a Function Type.

// It means:
// First parameter  → number
// Second parameter → number
// Return           → number


// ? 6.1 FUNCTION TYPE WITH VOID

type Greet = (name: string) => void;

const greet2: Greet = (name) => {
  console.log(`Hello ${name}`);
};

greet2("Nikhil");

// `Greet` means:
// name   → string
// return → void


// ? 7. FUNCTION AS PARAMETER / CALLBACK FUNCTION

// Definition:
// A callback function is a function that is passed
// as an argument to another function.

// Simple:
// Ek function ko doosre function ke parameter ke roop mein
// pass karna callback function kehlata hai.

const addition = (a: number, b: number): number => a + b;

const calculate = (
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number => {
  return operation(a, b);
};

calculate(10, 20, addition);

// `addition` is passed as a callback function.

// `operation` means:
// It must be a function.
// It takes two numbers.
// It returns a number.

// Flow:
// calculate(10, 20, addition)
//          ↓
// operation = addition
//          ↓
// addition(10, 20)
//          ↓
// 30


// ? 8. FUNCTION OVERLOADING

// Definition:
// Function Overloading allows us to define multiple
// function signatures for the same function.

// Simple:
// Ek hi function ko different types ya different parameters
// ke saath use karne ke liye multiple signatures define karna.

// Overload signatures

function format(value: string): string;
function format(value: number): number;

// Implementation

function format(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value;
}

format("Nikhil");
format(100);

// First signature:
// string → string

// Second signature:
// number → number

// Implementation function dono cases handle karti hai.

// Important:
// Multiple overload signatures ho sakti hain,
// lekin implementation ek hi hoti hai.


// ? 9. THIS IN TYPESCRIPT FUNCTIONS

// Definition:
// `this` refers to the current object or context
// in which a function is called.

// Simple:
// `this` current object/context ko refer karta hai.


// ? 9.1 THIS PARAMETER

function greet4(this: { name: string }) {
  console.log(`Hello ${this.name}`);
}

// `this: { name: string }` tells TypeScript
// what type of object `this` should refer to.

// `this` is a special parameter.
// It is not passed as a normal function argument.


// ? 9.2 THIS INSIDE OBJECT

const user = {
  name: "Nikhil",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

user.greet();

// Here:
// `this` → user object
// `this.name` → user.name

// `this` depends on how the function is called.


// ? 9.3 ARROW FUNCTION AND THIS

// Arrow functions do not have their own `this`.
// They inherit `this` from the surrounding scope.

// Therefore, when using `this` as an object method,
// normal method syntax is generally preferred.


// ? 10. VOID AND NEVER IN FUNCTIONS

// ? 10.1 VOID

// Definition:
// `void` represents the return type of a function
// that does not return a value.

// Simple:
// Function kaam karta hai, lekin koi value return nahi karta.

function printMessage(message: string): void {
  console.log(message);
}

printMessage("Hello Nikhil");

// `void` → Function completes but returns no value.


// ? 10.2 NEVER

// Definition:
// `never` represents a function that never returns normally.

// Simple:
// Aisa function jo normally kabhi return nahi karta.

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong");

// The function throws an error
// and never reaches normal completion.


// ? NEVER WITH INFINITE LOOP

function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}

// infiniteLoop();

// The function never finishes normally.


// ! VOID VS NEVER

// void:
// Function completes but does not return a value.

// never:
// Function never returns normally.


// ! KEY POINTS

// Function Type Annotation → Defines parameter types.
// Function Return Type → Defines the return type.
// Optional Parameter → Parameter may be omitted.
// Default Parameter → Uses a default value if omitted.
// Rest Parameter → Accepts multiple arguments as an array.
// Arrow Function → Short syntax for writing functions.
// Function Type → Defines function parameter and return types.
// Callback Function → Function passed as an argument to another function.
// Function Overloading → Multiple signatures for one function.
// `this` → Refers to the current object/context.
// void → Function returns no value.
// never → Function never returns normally.