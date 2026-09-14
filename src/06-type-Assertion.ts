// ! TYPE ASSERTION

// Type Assertion is a way of telling TypeScript to treat a value
// as a specific type when the developer knows more about the value.

// Simple:
// TypeScript ko khud batana ki "ye value is type ki hai."

// ? `as` Syntax

let value: unknown = "Hello";

let text = value as string;

//  TypeScript now treats `text` as a string.
console.log(text.toUpperCase()); // HELLO

// ? Important Point

// Type Assertion does NOT change the actual value or its type at runtime.
// It only tells TypeScript how to treat the value during development.

// No runtime check is performed.

//? Example

const input = document.getElementById("username") as HTMLInputElement;

// We are telling TypeScript that this element is an HTMLInputElement.
console.log(input.value);

// ? Angle-bracket syntax can also be used:
// const text = <string>value;

// ? However, `as` syntax is preferred, especially in TSX/React files.

// ! Key Point

// ? Type Assertion = "Trust me, I know the type."
// ? It should be used only when we are confident about the actual type.


// ? Type Narrowing vs Type Assertion

// Narrowing → We check the type before using the value.
// Assertion → We directly tell TypeScript the type.

// Narrowing:
// if (typeof value === "string") {
//   value.toUpperCase();
// }

// Assertion:
// const text = value as string;