//! TYPESCRIPT BASICS

// TypeScript is a statically typed superset of JavaScript.
// It adds static type checking to JavaScript and helps catch
// type-related errors during development.

//? 1. VARIABLES WITH TYPES

// TypeScript allows us to explicitly define the type of a variable.

let username: string = "Nikhil";
let age: number = 22;
let isDeveloper: boolean = true;

console.log(username);
console.log(age);
console.log(isDeveloper);


//? 2. BASIC DATA TYPES

// Common primitive types in TypeScript:
// string, number, boolean, null, undefined, bigint, symbol

let firstName: string = "Nikhil";
let score: number = 95;
let loggedIn: boolean = true;

let emptyValue: null = null;
let notAssigned: undefined = undefined;


//? 3. ARRAYS

// Arrays can contain values of a specific type.

let skills: string[] = ["JavaScript", "TypeScript", "React"];

let marks: number[] = [80, 90, 95];


// Alternative syntax using Array<T>

let languages: Array<string> = ["JavaScript", "TypeScript"];


//? 4. OBJECTS

// We can define the expected types of object properties.

let user: {
    name: string;
    age: number;
    isDeveloper: boolean;
} = {
    name: "Nikhil",
    age: 22,
    isDeveloper: true,
};


//? 5. CONST VS LET

// `let` allows reassignment.
// `const` does not allow reassignment.

let currentAge: number = 22;
currentAge = 23; // ✅

const birthYear: number = 2004;
// birthYear = 2005; // ❌


//? 6. SPECIAL TYPES — INTRODUCTION

// `any`, `unknown`, `never`, and `void` are important
// TypeScript types.

// These will be covered in detail in separate files.


// ============================================================
// KEY TAKEAWAY
// ============================================================

// TypeScript adds types to JavaScript.
// Types help us catch errors early.  
// Make code easier to understand, maintain, and refactor.