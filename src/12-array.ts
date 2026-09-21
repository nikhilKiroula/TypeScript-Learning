// ! ARRAYS IN TYPESCRIPT

// ? 1. ARRAY TYPE ANNOTATION

// Definition:
// Array Type Annotation means explicitly defining the type
// of values that an array can contain.

// Simple:
// TypeScript ko batana ki array ke andar kis type ki values hongi.

const numbers: number[] = [10, 20, 30, 40];

const names: string[] = ["Nikhil", "Rahul", "Aman"];

const isActive: boolean[] = [true, false, true];

// `number[]` → Array of numbers
// `string[]` → Array of strings
// `boolean[]` → Array of booleans


// ? 2. GENERIC ARRAY SYNTAX

// Array ko `Array<Type>` syntax se bhi define kar sakte hain.

const numbers1: Array<number> = [10, 20, 30];

const names1: Array<string> = ["Nikhil", "Rahul"];

// `number[]` and `Array<number>` are equivalent.
// `string[]` and `Array<string>` are equivalent.


// ? 3. ARRAY TYPE INFERENCE

// Definition:
// TypeScript automatically determines the type of an array
// based on the values inside it.

// Simple:
// Array ki values dekhkar TypeScript khud type samajh leta hai.

const numbers2 = [10, 20, 30];

const names2 = ["Nikhil", "Rahul", "Aman"];

// TypeScript infers:
// numbers2 → number[]
// names2   → string[]


// ? 4. UNION ARRAY

// Definition:
// A Union Array allows an array to contain values
// of multiple specified types.

// Simple:
// Array ke andar multiple allowed types rakh sakte hain.

const data: (string | number)[] = [
  "Nikhil",
  23,
  "Rahul",
  25,
];

// `(string | number)[]` means:
// Array can contain strings OR numbers.

// data.push(true); // ❌ boolean is not allowed


// ? 5. READONLY ARRAYS

// Definition:
// `readonly` prevents an array from being modified.

// Simple:
// Array ko read kar sakte hain, lekin change nahi kar sakte.

const number: readonly number[] = [10, 20, 30];

console.log(numbers[0]); // ✅

// numbers.push(40);  // ❌
// numbers[0] = 100;  // ❌

// `ReadonlyArray<number>` can also be used.
const usernames: ReadonlyArray<string> = ["Nikhil", "Rahul"];


// ? 6. ARRAYS OF OBJECTS

// Definition:
// An array of objects is an array that contains multiple objects
// with a specific structure.

// Simple:
// Array ke andar multiple objects.

const students: { name: string; age: number }[] = [
  {
    name: "Nikhil",
    age: 23,
  },
  {
    name: "Rahul",
    age: 22,
  },
  {
    name: "Aman",
    age: 24,
  },
];

console.log(students[0]?.name);
console.log(students[1]?.age);

// `?.` safely accesses the property
// if the object exists.


// ? 7. NESTED ARRAYS

// Definition:
// A nested array is an array that contains other arrays.

// Simple:
// Array ke andar ek aur array.

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0]?.[1]); // 2
console.log(matrix[2]?.[0]); // 7

// ? 8. TUPLES

// Definition:
// A Tuple is an array with a fixed number of elements
// where each position has a specific type.

// Simple:
// Tuple mein position aur type fixed hota hai.

const userInfo: [string, number] = ["Nikhil", 23];


// ? 8.1 READONLY TUPLE

const locationInfo: readonly [string, number] = [
  "Delhi",
  110001,
];

// locationInfo[0] = "Mumbai"; // ❌


// ? 8.2 OPTIONAL TUPLE ELEMENTS

const userContact: [string, number?] = ["Nikhil"];

const userContact2: [string, number?] = [
  "Rahul",
  9876543210,
];


// ? 8.3 REST ELEMENTS IN TUPLES

const studentMarks: [string, ...number[]] = [
  "Nikhil",
  85,
  90,
  78,
];


// ? 8.4 NAMED TUPLE

const userDetails: [name: string, age: number] = [
  "Nikhil",
  23,
];


// ? 8.5 TUPLE DESTRUCTURING

const personDetails: [string, number] = [
  "Rahul",
  25,
];

const [personName, personAge] = personDetails;


// ? 8.6 TUPLE VS ARRAY

const marks: number[] = [80, 90, 75];
// Array → same type, flexible length.

const userRecord: [string, number] = ["Nikhil", 23];
// Tuple → fixed positions and specific types.


// ? 9. ARRAY METHODS

const prices: number[] = [100, 200, 300, 400];

const doubledPrices = prices.map((price) => price * 2);

const filteredPrices = prices.filter((price) => price > 200);

const totalPrice = prices.reduce(
  (total, price) => total + price,
  0
);

console.log(doubledPrices);
console.log(filteredPrices);
console.log(totalPrice);

// ? 10. ARRAY DESTRUCTURING

const colors: string[] = ["red", "blue", "green"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // red
console.log(secondColor); // blue
console.log(thirdColor);  // green

// ? 10.1 ARRAY SPREAD

const frontendSkills: string[] = ["HTML", "CSS", "React"];

const allSkills: string[] = [
  ...frontendSkills,
  "Node.js",
  "MongoDB",
];

console.log(allSkills);


// ! KEY POINTS

// Array Type Annotation → Array ke elements ka type explicitly define karta hai.
// Generic Array Syntax → `Array<Type>` syntax se array ka type define kar sakte hain.
// Array Type Inference → TypeScript automatically array ka type infer karta hai.
// Union Array → Array mein multiple specified types allow karta hai.
// Readonly Array → Array ko modify hone se prevent karta hai.
// Array of Objects → Same structure wale multiple objects ka array.
// Nested Array → Array ke andar arrays.
// Tuple → Fixed positions aur specific types wala array.
// Readonly Tuple → Tuple ko modify hone se prevent karta hai.
// Optional Tuple Element → Tuple ka element optional bana sakte hain.
// Rest Tuple Element → Fixed elements ke baad multiple elements allow karta hai.
// Named Tuple → Tuple elements ko meaningful names de sakte hain.
// Tuple Destructuring → Tuple values ko variables mein extract karna.
// Array Methods → `map`, `filter`, `reduce` jaise methods use karna.
// Array Destructuring → Array elements ko directly variables mein extract karna.
// Array Spread → Existing array ke elements ko doosre array mein spread karna.