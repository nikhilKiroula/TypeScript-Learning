//! unknown
//? `unknown` is a TypeScript type used for values whose type is not known at compile time.
//? It can store a value of any type, but the value must be checked or narrowed before it can be used.

//! Basic Example

let data: unknown;

data = "Hello";
data = 100;
data = true;

//? `unknown` can hold values of different types.

//! Why use `unknown`?

//? `unknown` is safer than `any` because TypeScript does not allow us to directly perform operations on an unknown value.
//? We must first check its type using type narrowing.

let value: unknown = "Hello";

// value.toUpperCase(); // ❌ Error
//? TypeScript does not know whether `value` is a string, number, boolean, etc.

//! Type Narrowing with `typeof`

let a: unknown = "hello";

if (typeof a === "string") {
//? TypeScript narrows `a` from `unknown` to `string`.
console.log(a.toUpperCase());
}

// Output:
// HELLO

//! Different Types with `unknown`

let data2: unknown = 100;

if (typeof data2 === "number") {
//? After the check, TypeScript knows that data2 is a number.
console.log(data2.toFixed(2));
}

// Output:
// 100.00

//! unknown vs any

//? `any` allows us to use a value without performing a type check.
//? This reduces type safety.

let anyValue: any = "Hello";

anyValue.toUpperCase(); // ✅
anyValue.toFixed();     // ✅ TypeScript does not complain

//? `unknown` requires type checking before using the value.

let unknownValue: unknown = "Hello";

// unknownValue.toUpperCase(); // ❌ Error

if (typeof unknownValue === "string") {
unknownValue.toUpperCase(); // ✅
}

//! Important Point

//? `unknown` can hold any type of value.
//? But we cannot directly access properties or call methods on an `unknown` value.
//? We must first narrow the type.

//? Shortcut:
//? any     → "Do whatever you want."
//? unknown → "First check the type, then use it."

//! Real-World Use Case

//? `unknown` is useful when working with external or untrusted data,
//? such as API responses, user input, JSON data, or third-party libraries.

function processData(data: unknown) {
if (typeof data === "string") {
console.log(data.toUpperCase());
}

if (typeof data === "number") {
console.log(data.toFixed(2));
}
}

processData("Nikhil"); // NIKHIL
processData(100);      // 100.00

//! Key Takeaways

//? 1. `unknown` can store values of any type.
//? 2. It is safer than `any`.
//? 3. We cannot directly use an `unknown` value.
//? 4. We must perform type checking or type narrowing first.
//? 5. `typeof`, `instanceof`, `in`, and custom type guards can be used for narrowing.
